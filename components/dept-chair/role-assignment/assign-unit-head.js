import Link from 'next/link'
import Router from 'next/router'
import { Formik, Form, Field } from 'formik'
import approveUnitHead from '../../../services/faculty/assignments/approveUnitHead'
import updateUnitAssignment from '../../../services/faculty/assignments/updateUnitAssignment'

function AssignUnitHead(props) {
    let content
    let tableData = []
    let uhTableData = []
    let currentUser = 0
    let incomingUser = 0
    let unitId = 0

    if(props.children != null) {
        let dcWithPending = false
        let uhWithPending = false

        props.children.forEach(async (e) => {
            if(e.faculty_unit_assignment != null && e.faculty_unit_assignment.approverRemarks == null) {
                dcWithPending = true
                await e.faculty_units.forEach((i) => {
                    if(i.faculty_personal_info != null) {  
                        tableData.push({
                            unitId: e.unitId,
                            unit: e.unit,
                            currentUnitHead: i.faculty_personal_info.lastName + ', ' + i.faculty_personal_info.firstName,
                            currentUserId: i.faculty_personal_info.user.userId,
                            incomingUnitHead: e.faculty_unit_assignment.faculty_personal_info.lastName + ', ' + e.faculty_unit_assignment.faculty_personal_info.firstName,
                            incomingUnitHeadId: e.faculty_unit_assignment.incomingUnitHead,
                            incomingUserId: e.faculty_unit_assignment.faculty_personal_info.user.userId,
                            approverRemarks: e.faculty_unit_assignment.approverRemarks || ''
                        })
                        
                    }
                })
            } else if(e.faculty_unit_assignment != null && e.faculty_unit_assignment.approverRemarks != null) {
                uhWithPending = true
                await e.faculty_units.forEach((i) => {
                    if(i.faculty_personal_info != null) { 
                        uhTableData.push({
                            unitId: e.unitId,
                            unit: e.unit,
                            currentUnitHead: i.faculty_personal_info.lastName + ', ' + i.faculty_personal_info.firstName,
                            currentUserId: i.faculty_personal_info.user.userId,
                            incomingUnitHead: e.faculty_unit_assignment.faculty_personal_info.lastName + ', ' + e.faculty_unit_assignment.faculty_personal_info.firstName,
                            incomingUnitHeadId: e.faculty_unit_assignment.incomingUnitHead,
                            incomingUserId: e.faculty_unit_assignment.faculty_personal_info.user.userId,
                            approverRemarks: e.faculty_unit_assignment.approverRemarks
                        })
                        
                    }
                })
            }
        })

        if(props.role == 2) { 
            let faculty = Object.keys(props.facultyListInfo).map(key => {
                let selected = false
                if((uhTableData.length != 0 && props.facultyListInfo[key].facultyId == uhTableData[0].incomingUnitHeadId) || (tableData.length != 0 && props.facultyListInfo[key].facultyId == tableData[0].incomingUnitHeadId)) {selected = true}
                return(
                    <option value={props.facultyListInfo[key].facultyId} selected={selected}>
                        {props.facultyListInfo[key].faculty_personal_info.lastName + ', ' + props.facultyListInfo[key].faculty_personal_info.firstName}
                    </option>
                )
            })
            if(!uhWithPending) { 
                content = 
                    <tr key = {props.children[0].unitId}>
                        <td>
                        <select name="faculty" id="faculty" onChange={async () => {
                            let alert = document.getElementById("assignalert")
    
                            let updatedUser = document.getElementById('faculty').value
                            
                            let res = await updateUnitAssignment(updatedUser, props.children[0].unitId, props.token)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                alert.style = "visibility: visible"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            
                            $("#assignalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#assignalert").slideUp(500);
                            });
    
                            Router.push('/faculty/role-assignment', '/faculty/role-assignment')
                        }}>
                            <option value="0">--SELECT FACULTY--</option>
                            {faculty}
                        </select>
                        </td>
                        <td></td>
                    </tr>
            } else { 
                content =
                    <tr key = {props.children[0].unitId}>
                        <td>
                            <select name="faculty" id="faculty" onChange={async () => {
                                let alert = document.getElementById("assignalert")

                                let updatedUser = document.getElementById('faculty').value
                                
                                let res = await updateUnitAssignment(updatedUser, props.children[0].unitId, props.token)
                                if(res.success == true) { 
                                    alert.className ="alert alert-success"
                                    alert.style = "visibility: visible"
                                    alert.innerHTML = res.message
                                } else {
                                    alert.className = "alert alert-danger"
                                    alert.style = "visibility: visible"
                                    if(res.error) alert.innerHTML = res.error[0].message
                                    else alert.innerHTML = res.message
                                }
                                
                                $("#assignalert").fadeTo(5000, 500).slideUp(500, function(){
                                    $("#assignalert").slideUp(500);
                                });

                                Router.push('/faculty/role-assignment', '/faculty/role-assignment')
                            }}>
                                <option value="0">--SELECT FACULTY--</option>
                                {faculty}
                            </select>
                        </td>
                        <td>{uhTableData[0].approverRemarks}</td>
                </tr>
            }
        } else if(props.role == 3) {
            if(dcWithPending) {
                content = Object.keys(tableData).map(key => {
                    return(
                        <tr key = {tableData[key].unitId}>
                            <td>{tableData[key].unit}</td>
                            <td>{tableData[key].currentUnitHead}</td>
                            <td>{tableData[key].incomingUnitHead}</td>
                            <td>
                                <div className = "btn-group">
                                    <a className="btn btn-info" data-toggle="modal" data-target="#approveUnitHead" onClick={() => {
                                        setApprove(tableData[key].currentUserId, tableData[key].incomingUserId, tableData[key].unitId)
                                    }}>Approve</a>
                                    <a className="btn btn-danger" data-toggle="modal" data-target="#rejectUnitHead" onClick={() => {
                                        setApprove(tableData[key].currentUserId, tableData[key].incomingUserId, tableData[key].unitId)
                                    }}>Reject</a>
                                </div>
                            </td>
                        </tr>
                    )
                })
            } else {
                content = <tr><td colSpan = "4"><p align = "center">No data available!</p></td></tr>
            }
        }        
    } 

    function setApprove(current, incoming, unit) {
        currentUser = current
        incomingUser = incoming
        unitId = unit
    }

    return (
        <div>
		    <h2 align = "center"> Unit Head Assignment </h2>
            <div role="alert" id="assignalert" style={{visibility:"hidden"}}></div>
            <br />
            <div>
                { 
                    props.role == 3 && 
                    <table className = "table table-striped table-sm">
                        <tbody>
                            <tr>
                                <th>Unit</th>
                                <th>Current Unit Head</th>
                                <th>Incoming Unit Head</th>
                                <th>Action</th>
                            </tr>
                            {content}
                        </tbody>
                    </table>
                }
                {
                    props.role == 2 && 
                    <div>
                        <p>NOTE: Changing the value on the dropdown will automatically update the value of the incoming unit head and notify the department chair for possible approval</p>
                        <table className = "table table-striped table-sm">
                            <tbody>
                                <tr>
                                    <th>Incoming Unit Head</th>
                                    <th>Approver Remarks</th>
                                </tr>
                                {content}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
	
            <div className="modal fade" id="approveUnitHead" tabIndex="-1" role="dialog" aria-labelledby="approveUnitHeadLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="approveUnitHeadLabel">Approve Unit Head Change</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <hr />
                            <p> Are you sure you want to approve the change in unit head role? </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't approve</button>
                            <button type="button" className="btn btn-danger" onClick = {async () => {
                                let alert = document.getElementById("assignalert")
                                $('#approveUnitHead').modal('toggle');
                                
                                let res = await approveUnitHead(currentUser, incomingUser, unitId, false, props.token)
                                if(res.success == true) { 
                                    alert.className ="alert alert-success"
                                    alert.style = "visibility: visible"
                                    alert.innerHTML = res.message
                                } else {
                                    alert.className = "alert alert-danger"
                                    alert.style = "visibility: visible"
                                    if(res.error) alert.innerHTML = res.error[0].message
                                    else alert.innerHTML = res.message
                                }
                                
                                $("#assignalert").fadeTo(5000, 500).slideUp(500, function(){
                                    $("#assignalert").slideUp(500);
                                });
                                Router.push('/faculty/role-assignment', '/faculty/role-assignment')
                            }}>Yes, approve</button>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="rejectUnitHead" tabIndex="-1" role="dialog" aria-labelledby="rejectUnitHeadLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="rejectUnitHeadLabel">Reject Unit Head Change</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p> Are you sure you want to reject this change in unit head? </p>
                        <div className = "form-row">
                            <div className = "form-group">
                                <label htmlFor = "approverRemarks"> Reason/Remarks for Rejection </label>
                                <input className = "form-control" type = "text" name = "approverRemarks" id = "approverRemarks" placeholder = "Input remarks" required />
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't reject</button>
                            <button type="button" className="btn btn-danger" onClick = {async () => {
                                let alert = document.getElementById("assignalert")
                                $('#rejectUnitHead').modal('toggle');

                                let remarks = document.getElementById('approverRemarks').value
                                
                                let res = await approveUnitHead(currentUser, incomingUser, unitId, remarks, props.token)
                                if(res.success == true) { 
                                    alert.className ="alert alert-success"
                                    alert.style = "visibility: visible"
                                    alert.innerHTML = res.message
                                } else {
                                    alert.className = "alert alert-danger"
                                    alert.style = "visibility: visible"
                                    if(res.error) alert.innerHTML = res.error[0].message
                                    else alert.innerHTML = res.message
                                }
                                
                                $("#assignalert").fadeTo(5000, 500).slideUp(500, function(){
                                    $("#assignalert").slideUp(500);
                                });
                                Router.push('/faculty/role-assignment', '/faculty/role-assignment')
                            }}>Yes, reject</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	
	
    )
  }
  
  export default AssignUnitHead