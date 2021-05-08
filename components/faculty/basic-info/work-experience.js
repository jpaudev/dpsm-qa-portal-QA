import Link from 'next/link'
import WorkExpForm from './work-exp-form'
import EmploymentHistory from './employment-history'
import NameDisplay from '../../../components/name-display'
import Router from 'next/router'
import React from 'react'

import updateWorkExp from '../../../services/faculty/basic-info/updateWorkExp'
import deleteWorkExp from '../../../services/faculty/basic-info/deleteWorkExp'

function WorkExperience(props){
    const name = props.name
    let deleteWork = 0
    let editWork = 0
    const [currData, setData] = React.useState({
        workExpId: 0,
        employerName: '',
        position:'',
        startDate: '',
        endDate: '',
        description: ''
    })
    let content 
    if(props.children != null) {
        content = Object.keys(props.children).map(key => {
            if(props.children[key].workExpId != null) {
                return (
                    <tr key = {props.children.[key].workExpId}>
                        <td>{props.children[key].employerName}</td>
                        <td>{props.children[key].position}</td>
                        <td>{props.children[key].startDate}</td>
                        <td>{props.children[key].endDate}</td>
                        <td>{props.children[key].description}</td>
                        <td>
                            <div className = "btn-grp">
                                <a className="btn btn-info" data-toggle="modal" data-target="#editWorkExperience" onClick={() => {
                                    setEdit(props.children.[key].workExpId)
                                    setKey(editWork)
                                }}>Edit</a>
                                <a className="btn btn-danger" data-toggle="modal" data-target="#deleteWorkExperience" onClick={() => {
                                    setDelete(props.children.[key].workExpId)
                                }}>Delete</a>
                            </div>
                        </td>
                    </tr>
                );  
            }
        });
    }

    function setEdit(id) {
        editWork = id
    }

    function setDelete(id) {
        deleteWork = id
    }

    function setKey(x) {
        Object.keys(props.children).map(key => {
            if(props.children.[key].workExpId == x) {
                setData(props.children.[key])
            }
        });
    }

    function handleInputChange(id, event) {
        setData({...currData, [id]: event.target.value});
    }

    return(
        <div>
            <h2 align = "center"> Work Experience </h2>
            <NameDisplay unit = {props.unit} position={props.position} employmentType={props.employmentType}>{name}</NameDisplay>
            <div role="alert" id="workexpalert" style={{visibility:"hidden"}}></div>
            <h5 align = "center"> Within UP Manila </h5>
            <EmploymentHistory>{props.employment}</EmploymentHistory>
            <br />
            <h5 align = "center"> Outside UP Manila </h5>
            <table className = "table table-striped table-sm">
            <tbody>
                <tr key = "headers">
                    <th>Employer</th>
                    <th>Position</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                {content}
            </tbody>
            </table>
            <div>
                <WorkExpForm token = { props.token }/>
            </div>

            <div className="modal fade" id="editWorkExperience" tabIndex="-1" role="dialog" aria-labelledby="editWorkExperienceLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editWorkExperienceLabel">Update Work Experience Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                            <div className = "form-group">
                    <label htmlFor = "EmployerWorkExperienceUpdate"> Employer </label>
                    <input className = "form-control" type = "text" name = "EmployerWorkExperienceUpdate" placeholder = "Input name of employer" defaultValue = { currData.employerName } onChange = {(e) => handleInputChange("employerName", e)} />
                    </div>
                </div>
                            <div className = "form-row">
                            <div className = "form-group">
                    <label htmlFor = "PositionWorkExperienceUpdate"> Title/Position </label>
                    <input className = "form-control" type = "text" name = "PositionWorkExperienceUpdate" placeholder = "Input position" defaultValue = { currData.position } onChange = {(e) => handleInputChange("position", e)}/>
                </div>
                            </div>
                            <div className = "form-row">
                            <div className = "form-group">
                    <label htmlFor = "StartDateWorkExperienceUpdate"> Start Date </label>
                    <input type = "date" className = "form-control" name = "StartDateWorkExperienceUpdate" defaultValue = { currData.startDate } onChange = {(e) => handleInputChange("startDate", e)} />
                </div>
                            </div>
                            <div className = "form-row">
                            <div className = "form-group">
                    <label htmlFor = "EndDateWorkExperienceUpdate"> End Date </label>
                    <input type = "date" className = "form-control" name = "EndDateWorkExperienceUpdate" defaultValue = { currData.endDate } onChange = {(e) => handleInputChange("endDate", e)} />
                </div>
                            </div>
                            <div className = "form-row">
                            <div className = "form-group">
                    <label htmlFor = "DescriptionWorkExperienceUpdate"> Description </label>
                    <input className = "form-control" type = "text" name = "DescriptionWorkExperienceUpdate" placeholder = "Add Description" defaultValue = { currData.description } onChange = {(e) => handleInputChange("description", e)} />
                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick = {async () => {
                            $('#editWorkExperience').modal('toggle');
                            let alert = document.getElementById("workexpalert")
                            let res = await updateWorkExp(currData, props.token)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            $("#workexpalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#workexpalert").slideUp(500);
                            });

                            Router.push('/faculty/basic-info')
                        }}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="deleteWorkExperience" tabIndex="-1" role="dialog" aria-labelledby="deleteWorkExperienceLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteWorkExperienceLabel">Delete Work Experience Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to delete this work experience information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't delete</button>
                        <button type="button" className="btn btn-danger" onClick = {async () => {
                            $('#deleteWorkExperience').modal('toggle');
                            let alert = document.getElementById("workexpalert")
                            let res = await deleteWorkExp(deleteWork, props.token)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            $("#workexpalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#workexpalert").slideUp(500);
                            });
                            
                            Router.push('/faculty/basic-info')
                        }}>Yes, delete</button>
                    </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default WorkExperience