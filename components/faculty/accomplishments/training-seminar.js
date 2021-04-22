import Link from 'next/link'
import TrainingSeminarForm from './training-seminar-form'
import NameDisplay from '../../../components/name-display'
import Router from 'next/router'
import React from 'react'

import downloadProof from '../../../services/faculty/downloadProof'
import deleteTraining from '../../../services/faculty/accomplishments/deleteTraining'
import updateTraining from '../../../services/faculty/accomplishments/updateTraining'

function TrainingSeminar(props) {
    const name = props.children[props.children.length-1].lastName + ', ' + props.children[props.children.length-1].firstName + ' ' + props.children[props.children.length-1].middleName
    let deleteTS = 0
    let editTS = 0
    const [currData, setData] = React.useState({
        tsId: 0,
        role: '',
        title:'',
        dateFrom: '',
        dateTo: '',
        venue: '',
        remarks: '',
        proof: ''
    })
    let content = Object.keys(props.children).map(key => {
        if(props.children[key].tsId != null) {
            return (
                <tr key = {props.children[key].tsId}>
                    <td>{props.children[key].title}</td>
                    <td>{props.children[key].role}</td>
                    <td>{props.children[key].venue}</td>
                    <td>{props.children[key].dateFrom}</td>
                    <td>{props.children[key].dateTo}</td>
                    <td></td>
                    <td>
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
                    </td>
                    <td>{props.children[key].status}</td>
                    <td>
                        <div className = "btn-group">
                            <a className="btn btn-info" data-toggle="modal" data-target="#editTrainingSeminar" onClick={() => {
                                    setEdit(props.children.[key].tsId)
                                    setKey(editTS)
                                }}>Edit</a>
                            <a className="btn btn-danger" data-toggle="modal" data-target="#deleteTrainingSeminar" onClick={() => {
                                setDelete(props.children.[key].tsId)
                            }}>Delete</a>
                        </div>
                    </td>
                </tr>
            );
        }
    });

    function setEdit(id) {
        editTS = id
    }

    function setDelete(id) {
        deleteTS = id
    }

    function setKey(x) {
        Object.keys(props.children).map(key => {
            if(props.children.[key].tsId == x) {
                setData(props.children.[key])
            }
        });
    }

    function handleInputChange(id, event) {
        setData({...currData, [id]: event.target.value});
    }

    return (
        <div>
            <h2 align = "center"> Training/Seminars </h2>
            <NameDisplay>{name}</NameDisplay>
            <div>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>Name of Training/Seminar</th>
                            <th>Role</th>
                            <th>Venue</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Remarks</th>
                            <th>Proof</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        {content}
                    </tbody>
                </table>
            </div>

            <div>
                <TrainingSeminarForm token = { props.token } />
            </div>   
	
            <div className="modal fade" id="editTrainingSeminar" tabIndex="-1" role="dialog" aria-labelledby="editTrainingSeminarLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editTrainingSeminarLabel">Update Training/Seminar Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "TrainingSeminarUpdate"> Name of Training/Seminar </label>
                                    <input className = "form-control" type = "text" name = "TrainingSeminarUpdate" defaultValue = { currData.title } onChange = {(e) => handleInputChange("title", e)} placeholder = "Input training/seminar" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "TrainingSeminarRoleUpdate"> Role </label>
                                    <input className = "form-control" type = "text" name = "TrainingSeminarRoleUpdate" defaultValue = { currData.role } onChange = {(e) => handleInputChange("role", e)} placeholder = "Input role" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "TrainingSeminarVenueUpdate"> Venue </label>
                                    <input className = "form-control" type = "text" name = "TrainingSeminarVenueUpdate" defaultValue = { currData.venue } onChange = {(e) => handleInputChange("venue", e)} placeholder = "Input venue" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "TrainingSeminarStartDateUpdate"> Start Date </label>
                                    <input type = "date" className = "form-control" name = "TrainingSeminarStartDateUpdate" defaultValue = { currData.dateFrom } onChange = {(e) => handleInputChange("dateFrom", e)} />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "TrainingSeminarEndDateUpdate"> End Date </label>
                                    <input type = "date" className = "form-control" name = "TrainingSeminarEndDateUpdate" defaultValue = { currData.dateTo } onChange = {(e) => handleInputChange("dateTo", e)} />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "TrainingSeminarVenueUpdate"> Remarks </label>
                                    <input className = "form-control" type = "text" name = "TrainingSeminarRemarksUpdate" defaultValue = { currData.remarks } onChange = {(e) => handleInputChange("remarks", e)} placeholder = "Input remarks" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "TrainingSeminarProofUpdate"> Proof </label>
                                    <input type = "file" className = "form-control-file" name = "TrainingSeminarProofUpdate" defaultValue = { currData.proof } onChange = {(e) => handleInputChange("proof", e)} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick = {() => {
                            updateTraining(currData, props.token)
                            Router.push('/faculty/accomplishment#public-service-accomplishment', '/')
                        }}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="deleteTrainingSeminar" tabIndex="-1" role="dialog" aria-labelledby="deleteTrainingSeminarLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteTrainingSeminarLabel">Delete Training/Seminar Information</h5>
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
                            deleteTraining(deleteTS, props.token)
                            Router.push('/faculty/accomplishment#training-seminar', '/')
                        }}>Yes, delete</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>	
    )
}  

export default TrainingSeminar