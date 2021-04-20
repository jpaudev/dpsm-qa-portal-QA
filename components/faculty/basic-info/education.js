import Link from 'next/link'
import EducationForm from './education-form'
import NameDisplay from '../../../components/name-display'
import Router from 'next/router'
import React from 'react'

import downloadProof from '../../../services/faculty/downloadProof'
import deleteEducation from '../../../services/faculty/basic-info/deleteEducation'
import updateEducation from '../../../services/faculty/basic-info/updateEducation'

function Education(props) {
    const name = props.children[props.children.length-1].lastName + ', ' + props.children[props.children.length-1].firstName + ' ' + props.children[props.children.length-1].middleName
    let deleteEduc = 0
    let editEduc = 0
    const [currData, setData] = React.useState({
        educInfoId: 0,
        institutionSchool: '',
        degreeType:'',
        degreeCert: '',
        majorSpecialization: '',
        startDate: '',
        endDate: ''
    })
    let content = Object.keys(props.children).map(key => {
        if(props.children[key].educInfoId != null) {
            if(props.children[key].proof) {
                return (
                    <tr key = {props.children.[key].educInfoId}>
                        <td>{props.children[key].institutionSchool}</td>
                        <td>{props.children[key].degreeType}</td>
                        <td>{props.children[key].degreeCert}</td>
                        <td>{props.children[key].majorSpecialization}</td>
                        <td>{props.children[key].startDate}</td>
                        <td>{props.children[key].endDate}</td>
                        <td>
                            <div className = "btn-grp">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick = {() => {
                                        let file = props.children[key].proof
                                        downloadProof(file)
                                    }}
                                >
                                    Download
                                </button>
                                <a
                                    className ="btn btn-info"
                                    href={"http://localhost:3001/" + props.children[key].proof}
                                    style = {{ color: 'white' }}
                                    target="_blank">
                                    Preview
                                </a>
                            </div>
                        </td>
                        <td>{props.children[key].status}</td>
                        <td>
                            <div className = "btn-grp">
                                <a className="btn btn-info" data-toggle="modal" data-target="#editEducation" onClick={() => {
                                    setEdit(props.children.[key].educInfoId)
                                    setKey(editEduc)
                                }}>Edit</a>
                                <a className="btn btn-danger" data-toggle="modal" data-target="#deleteEducation" onClick={() => {
                                    setDelete(props.children.[key].educInfoId)
                                }}>Delete</a>
                            </div>
                        </td>
                    </tr>
                );
            } else {
                return (
                    <tr key = {props.children.[key].educInfoId} >
                        <td>{props.children[key].institutionSchool}</td>
                        <td>{props.children[key].degreeType}</td>
                        <td>{props.children[key].degreeCert}</td>
                        <td>{props.children[key].majorSpecialization}</td>
                        <td>{props.children[key].startDate}</td>
                        <td>{props.children[key].endDate}</td>
                        <td>None</td>
                        <td>{props.children[key].status}</td>
                        <td>
                            <div className = "btn-grp">
                                <a className="btn btn-info" data-toggle="modal" data-target="#editEducation" onClick={() => {
                                    setEdit(props.children.[key].educInfoId)
                                    setKey(editEduc)
                                }}>Edit</a>
                                <a className="btn btn-danger" data-toggle="modal" data-target="#deleteEducation" onClick={() => {
                                    setDelete(props.children.[key].educInfoId)
                                }}>Delete</a>
                            </div>
                        </td>
                    </tr>
                );
            }
        }
    });

    function setEdit(id) {
        editEduc = id
    }

    function setDelete(id) {
        deleteEduc = id
    }

    function setKey(x) {
        Object.keys(props.children).map(key => {
            if(props.children.[key].educInfoId == x) {
                setData(props.children.[key])
            }
        });
    }

    function handleInputChange(id, event) {
        setData({...currData, [id]: event.target.value});
    }

    return (
        <div>
        <h2 align = "center"> Educational History </h2>
        <NameDisplay>{name}</NameDisplay>
            <div>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>Institution/School</th>
                            <th>Degree Type</th>
                            <th>Degree/Certification</th>
                            <th>Major/Specialization</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Proof</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        {content}
                    </tbody>
                </table>
            </div>
            <div>
                <EducationForm token = { props.token }/>
            </div>   

            <div className="modal fade" id="editEducation" tabIndex="-1" role="dialog" aria-labelledby="editEducationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editEducationLabel">Update Education Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "SchoolEducationHistoryUpdate"> School/Institution </label>
                                    <input className = "form-control" type = "text" name = "SchoolEducationHistoryUpdate" placeholder = "Input school" defaultValue = { currData.institutionSchool } onChange = {(e) => handleInputChange("institutionSchool", e)} required />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "DegreeEducationalHistoryUpdate"> Degree Type </label>
                                    <select className = "form-control" name = "DegreeTypeEducationalHistoryUpdate" value = { currData.degreeType } onChange = {(e) => handleInputChange("degreeType", e)} >
                                        <option value = "AA">AA</option>
                                        <option value = "AS">AS</option>
                                        <option value = "BA">BA</option>
                                        <option value = "BS">BS</option>
                                        <option value = "MA">MA</option>
                                        <option value = "MS">MS</option>
                                        <option value = "MD">MD</option>
                                        <option value = "PhD">PhD</option>
                                    </select>
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "DegreeEducationalHistoryUpdate"> Degree/Certification </label>
                                    <input className = "form-control" type = "text" name = "DegreeEducationalHistoryUpdate" placeholder = "Input degree" defaultValue = { currData.degreeCert} onChange = {(e) => handleInputChange("degreeCert", e)} />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "MajorEducationalHistoryUpdate"> Major/Specialization </label>
                                    <input className = "form-control" type = "text" name = "MajorEducationalHistoryUpdate" placeholder = "Input major" defaultValue = { currData.majorSpecialization } onChange = {(e) => handleInputChange("majorSpecialization", e)} />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "StartDateEducationalHistoryUpdate"> Start Date </label>
                                    <input className = "form-control" type = "date" name = "StartDateEducationalHistoryUpdate" defaultValue = { currData.startDate } onChange = {(e) => handleInputChange("startDate", e)} required />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "EndDateEducationalHistoryUpdate"> End Date </label>
                                    <input className = "form-control" type = "date" name = "EndDateEducationalHistoryUpdate" defaultValue = { currData.endDate } onChange = {(e) => handleInputChange("endDate", e)} />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "StartDateEducationalHistoryUpdate"> Add/Edit Proof </label>
                                    <input type = "file" className = "form-control-file" name = "proof" onChange = {(e) => handleInputChange("proof", e)} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick = {() => {
                            updateEducation(currData, props.token)
                            Router.push('/faculty/basic-info#educ', '/')
                        }}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="deleteEducation" tabIndex="-1" role="dialog" aria-labelledby="deleteEducationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteEducationLabel">Delete Education Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to delete this education information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't delete</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick = {() => {
                            deleteEducation(deleteEduc, props.token)
                            Router.push('/faculty/basic-info#educ', '/')
                        }}>Yes, delete</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education