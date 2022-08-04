import ResearchGrantForm from './research-grant-form'
import NameDisplay from '../../../components/name-display'
import Router from 'next/router'
import React from 'react'
import { Formik, Form, Field } from 'formik'
import Select from 'react-select'

import downloadProof from '../../../services/faculty/downloadProof'
import deleteResearch from '../../../services/faculty/accomplishments/deleteResearch'
import updateResearch from '../../../services/faculty/accomplishments/updateResearch'
import approveResearchGrant from '../../../services/faculty/accomplishments/approveResearchGrant'

function ResearchGrant(props){
    let content 
    let deleteRes = 0
    let editRes = 0
    let approveRG = 0
    const [currData, setData] = React.useState({
        researchId: 0,
        researchName: '',
        granter:'',
        amount: '',
        projectedStart: '',
        projectedEnd: '',
        actualStart: '',
        actualEnd: '',
        researchProgress: '',
        nonFacultyResearchers: '',
        faculty_researchers: [],
        og_auth: []
    })
    let authors
    if(props.faculty) {
        authors = Object.keys(props.faculty).map(key => {
            return(
                {value: props.faculty[key].facultyId, label: props.faculty[key].lastName + ', ' + props.faculty[key].firstName}
            );
        });
    }
    let faculty_researchers = []

    if(props.children != null) {
        content = Object.keys(props.children).map(key => { 
            let res = props.children[key].faculty_researchers;
            let dpsmauth = []

            res.forEach((auth) => {
                let link
                let name = auth.faculty_personal_info.firstName + ' ' + auth.faculty_personal_info.lastName + ', '
                if(auth.facultyId == props.facultyId || props.role == 1) {
                    dpsmauth.push(name)
                } else if(props.role == 5) {
                    link = "/admin/" + auth.facultyId
                    dpsmauth.push(<a href = {link}>{name}</a>)
                } else if(props.role == 2 || props.role == 3) {
                    link = "/faculty/view/" + auth.facultyId
                    dpsmauth.push(<a href = {link}>{name}</a>)
                } 
            })

            if(props.children[key].researchId != null) {
                
                return (
                    <tr>
                        <td>{props.children[key].researchName}</td>
                        <td>
                            { dpsmauth } 
                            {props.children[key].nonFacultyResearchers}
                        </td>
                        <td>{props.children[key].granter}</td>
                        <td>{props.children[key].amount}</td>
                        <td>{props.children[key].projectedStart} to {props.children[key].projectedEnd}</td>
                        <td>{props.children[key].actualStart}</td>
                        <td>{props.children[key].actualEnd}</td>
                        <td>{props.children[key].researchProgress}</td>
                        <td>{
                                props.children[key].proof && 
                                <div className = "center">
                                    <button
                                        type="button"
                                        className="btn customButton-icon-only blue"
                                        onClick = {() => {
                                            let file = props.children[key].proof
                                            downloadProof(file, props.token)
                                        }}
                                    >
                                        <span className="material-icons-sharp">file_download</span>
                                    </button>
                                    <a
                                        className ="btn customButton-icon-only blue"
                                        href={process.env.UPLOADS_URL + props.children[key].proof}
                                        style = {{ color: 'white' }}
                                        target="_blank">
                                        <span className="material-icons-sharp">visibility</span>
                                    </a>
                                </div>
                            }
                            {
                                !props.children[key].proof && <div>None</div>
                            }
                        </td>
                        <td>{props.children[key].status}</td>
                        <td>{props.children[key].approverRemarks || 'None'}</td>
                        <td>
                        { props.editable &&
                            <div>
                                <button className="btn customButton-icon-only yellow" data-bs-toggle="modal" data-bs-target="#editResearchGrant" onClick={() => {
                                    setEdit(props.children[key].researchId)
                                    setKey(editRes)
                                }}>
                                    <span class="material-icons-sharp">edit</span>
                                </button>
                                <button className="btn customButton-icon-only maroon" data-bs-toggle="modal" data-bs-target="#deleteResearchGrant" onClick={() => {
                                    setDelete(props.children[key].researchId)
                                }}>
                                    <span class="material-icons-sharp">delete</span>
                                </button>
                            </div>
                        }
                        { props.approver &&
                            <div className = "center">
                                <button className="btn customButton-icon-only green" data-bs-toggle="modal" data-bs-target="#approveResearchGrant" onClick={() => {
                                    setApprove(props.children[key].researchId)
                                }}>
                                    <span className="material-icons-sharp">check</span>
                                </button>
                                <button className="btn customButton-icon-only maroon" data-bs-toggle="modal" data-bs-target="#rejectResearchGrant" onClick={() => {
                                    setApprove(props.children[key].researchId)
                                }}>
                                    <span className="material-icons-sharp">close</span>
                                </button>
                            </div>
                        }
                        </td>
                    </tr>
                );
            }
        });
    }
    else{
        content = <td colSpan = "10"><br/><p align = "center">No data available.</p></td>
    }

    function setEdit(id) {
        editRes = id
    }

    function setDelete(id) {
        deleteRes = id
    }

    function setApprove(id) {
        approveRG = id
    }

    async function setKey(x) {
        await Object.keys(props.children).map(async key => {
            if(props.children[key].researchId == x) {
                let tempProof = props.children[key].proof
                await props.children[key].faculty_researchers.forEach(async (e) => {
                    await authors.forEach(async (fp, index) => {
                        if(fp.value == e.facultyId) {
                            await faculty_researchers.push(fp)
                        }
                    })
                })
                let temp = {
                    researchId: props.children[key].researchId,
                        researchName: props.children[key].researchName,
                        granter: props.children[key].granter,
                        amount: props.children[key].amount,
                        projectedStart: props.children[key].projectedStart,
                        projectedEnd: props.children[key].projectedEnd,
                        actualStart: props.children[key].actualStart,
                        actualEnd: props.children[key].actualEnd,
                        researchProgress: props.children[key].researchProgress,
                        nonFacultyResearchers: props.children[key].nonFacultyResearchers,
                        faculty_researchers: faculty_researchers,
                        og_auth: faculty_researchers
                }
                temp.proof = tempProof ? tempProof : 'None'
                
                await setData(temp)
            }
        });

        return faculty_researchers
    }

    const handleChange = (e) => {
        setData(currData => ({...currData, faculty_researchers: e}))
    }

	return(
		<div>
            <div className="center">
                <h2 align = "center" style={{display: "inline-block"}}> Research Grants </h2>
                {/* Add Button Trigger */}
                { props.editable &&
                <button type="button" className="btn customButton-icon-only maroon" data-bs-toggle="collapse" data-bs-target="#addResearch" aria-expanded="false" aria-controls="addResearch" style={{left: "1rem", position: "relative"}}>
                    <span className="material-icons-sharp">add</span>
                </button>
                }
            </div>


            <br></br><br></br>    
            <NameDisplay unit = {props.unit} position={props.position}>{props.name}</NameDisplay>
			<div className ="alert alert-success" role="alert" id="researchalert" style={{visibility:"hidden"}}></div>
            
            { props.editable &&
                <div className="card collapse" id="addResearch">
                    <ResearchGrantForm faculty = {props.faculty} token = {props.token} />
                </div>
            }
            <br></br><br></br>
            
            
            <div className = "table-title">
                <table>
                    <thead>
                        <tr>
                            <th>Research Project</th>
                            <th>Researcher/s</th>
                            <th>Sponsor</th>
                            <th>Amount</th>
                            <th>Projected Duration</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Research Progress</th>
                            <th>Proof</th>
                            <th>Status</th>
                            <th>Approver Remarks</th>
                            { (props.editable || props.approver) && <th>Action</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>	
	        </div>
            <br/><br/>

        <div className="modal fade" id="editResearchGrant" tabIndex="-1" role="dialog" aria-labelledby="editResearchGrantLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="editResearchGrantLabel">Update Research Grant Information</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <Formik
                    enableReinitialize
                    initialValues={currData}
                    onSubmit={async (values) => {
                        let form = document.getElementById('editResForm')
                        let formData = new FormData(form)
                        formData.append('researchId', currData.researchId)
                        let alert = document.getElementById("researchalert")
                        let existing = []
                        currData.og_auth.forEach(x => {
                            existing.push(x.value)
                        })
                        
                        let temp_res = formData.getAll('faculty_researchers').map(x => Number(x))
                        let rem_og = await existing.filter(x => !temp_res.includes(x))
                        let add_res = await temp_res.filter(x => !existing.includes(x))

                        if(add_res.length > 0) {
                            add_res.forEach((x) => {
                                formData.append('add_res', x)
                            })
                        }

                        if(rem_og.length > 0) {
                            rem_og.forEach((x) => {
                                formData.append('rem_res', x)
                            })
                        }

                        let res = await updateResearch(formData, props.token)
                        if(res.success == true) { 
                            alert.className ="alert alert-success"
                            alert.style = "visibility: visible"
                            alert.innerHTML = res.message
                        } else {
                            alert.className = "alert alert-danger"
                            if(res.error) alert.innerHTML = res.error[0].message
                            else alert.innerHTML = res.message
                        }
                        $("#researchalert").fadeTo(5000, 500).slideUp(500, function(){
                            $("#researchalert").slideUp(500);
                        });

                        Router.push('/faculty/accomplishment')
                    }}
                >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form id = "editResForm">
                        <div className="modal-body">
                            <hr />
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchUpdate"> Research Project </label>
                                    <Field className = "form-control" type = "text" name = "researchName" placeholder = "Input research name" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchSponsorUpdate"> Sponsor </label>
                                    <Field className = "form-control" type = "text" name = "granter" placeholder = "Input sponsor" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchAmountUpdate"> Amount </label>
                                    <Field className = "form-control" type = "text" name = "amount" placeholder = "Input amount" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchStartDateUpdate"> Start Date (Actual) </label>
                                    <Field type = "date" className = "form-control" name = "actualStart" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchEndDateUpdate"> End Date (Actual) </label>
                                    <Field type = "date" className = "form-control" name = "actualEnd" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchProjectedStartDateUpdate"> Start Date (Projected) </label>
                                    <Field type = "date" className = "form-control" name = "projectedStart" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchProjectedEndDateUpdate"> End Date (Projected) </label>
                                    <Field type = "date" className = "form-control" name = "projectedEnd" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchProgressUpdate"> Progress </label>
                                    <Field className = "form-control" type = "text" name = "researchProgress" placeholder = "Input progress" />
                                </div>
                            </div>
                            <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "ResearchAuthorDPSMUpdate"> Authors (DPSM) </label>
                                        <Select
                                            name = "faculty_researchers"
                                            isMulti
                                            options = {authors}
                                            value = {currData.faculty_researchers}
                                            onChange = {event => handleChange(event)}
                                        />
                                    </div>
                                </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchAuthorNonDPSMUpdate"> Authors (non-DPSM) </label>
                                    <Field className = "form-control" type = "text" name = "nonFacultyResearchers" placeholder = "Input all authors outside DPSM (separate names with commas)" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchProofUpdate"> Add/Edit Proof [Uploaded: {currData.proof}] </label>
                                    <Field type = "file" className = "form-control-file" name = "proof"  value={undefined} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                $('#editResearchGrant').modal('toggle');
                            }}>Save changes</button>
                        </div>
                    </Form>
                )}
                </Formik>
                </div>
            </div>
        </div>
        
        <div className="modal fade" id="deleteResearchGrant" tabIndex="-1" role="dialog" aria-labelledby="deleteResearchGrantLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="deleteResearchGrantLabel">Delete Research Grant Information</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <hr />
                    <p> Are you sure you want to delete this research grant information? </p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't delete</button>
                    <button type="button" className="btn btn-danger" onClick = {async () => {
                        let alert = document.getElementById("researchalert")
                        let res = await deleteResearch(deleteRes, props.token)
                        
                        if(res.success == true) { 
                            alert.className ="alert alert-success"
                            alert.style = "visibility: visible"
                            alert.innerHTML = res.message
                        } else {
                            alert.className = "alert alert-danger"
                            if(res.error) values.message = res.error[0].message
                            else values.message = res.message
                        }
                        
                        $("#researchalert").fadeTo(5000, 500).slideUp(500, function(){
                            $("#researchalert").slideUp(500);
                        });
                        
                        Router.push('/faculty/accomplishment')
                    }}>Yes, delete</button>
                </div>
                </div>
            </div>
        </div>		

        <div className="modal fade" id="approveResearchGrant" tabIndex="-1" role="dialog" aria-labelledby="approveResearchGrantLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="approveResearchGrantLabel">Approve Research Grant Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to approve this research grant information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't approve</button>
                        <button type="button" className="btn btn-danger" onClick = {async () => {
                            let alert = document.getElementById("researchalert")
                            $('#approveResearchGrant').modal('toggle');
                            
                            let formData = new FormData()
                            formData.append('researchId', approveRG)
                            
                            let res = await approveResearchGrant(formData, true, props.facultyId, props.token)
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
                            
                            $("#researchalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#researchalert").slideUp(500);
                            });
                            Router.push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId)
                        }}>Yes, approve</button>
                    </div>
                    </div>
                </div>
            </div> 

            <div className="modal fade" id="rejectResearchGrant" tabIndex="-1" role="dialog" aria-labelledby="rejectResearchGrantLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="rejectResearchGrantLabel">Reject Research Grant Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={currData}
                        onSubmit={async (values) => {
                            let alert = document.getElementById("researchalert")
                            $('#rejectResearchGrant').modal('toggle');
                            
                            let form = document.getElementById('rejectRGForm')
                            let formData = new FormData(form)
                            formData.append('researchId', approveRG)
                            
                            let res = await approveResearchGrant(formData, false, props.facultyId, props.token)
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
                            
                            $("#researchalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#researchalert").slideUp(500);
                            });
                            Router.push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId)
                        }}
                    >
                    {({ values, errors, touched, isSubmitting }) => (
                        <Form id = "rejectRGForm">
                            <div className="modal-body">
                                <hr />
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "RejectionRemarks"> Reason/Remarks for Rejection </label>
                                        <Field className = "form-control" type = "text" name = "approverRemarks" placeholder = "Input remarks" required />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                    $('#rejectResearchGrant').modal('toggle');
                                }}>Save changes</button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                    </div>
                </div>
            </div>
            <br/><br/>
		</div>
	)
}

export default ResearchGrant
