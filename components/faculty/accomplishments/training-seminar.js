import Link from 'next/link'
import TrainingSeminarForm from './training-seminar-form'
import NameDisplay from '../../../components/name-display'
import Router from 'next/router'
import React from 'react'
import { Formik, Form, Field } from 'formik'

import downloadProof from '../../../services/faculty/downloadProof'
import deleteTraining from '../../../services/faculty/accomplishments/deleteTraining'
import updateTraining from '../../../services/faculty/accomplishments/updateTraining'
import approveTraining from '../../../services/faculty/accomplishments/approveTraining'

function TrainingSeminar(props) {
    const name = props.name
    let deleteTS = 0
    let editTS = 0
    let approveTS = 0

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
    let content 
    if(props.children != null) {
        content = Object.keys(props.children).map(key => {
            if(props.children[key].tsId != null) {
                return (
                    <tr key = {props.children[key].tsId}>
                        <td>{props.children[key].title}</td>
                        <td>{props.children[key].role}</td>
                        <td>{props.children[key].venue}</td>
                        <td>{props.children[key].dateFrom}</td>
                        <td>{props.children[key].dateTo}</td>
                        <td>{props.children[key].remarks}</td>
                        <td>
                            {
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
                                !props.children[key].proof && 
                                <div>None</div>
                            }
                        </td>
                        <td>{props.children[key].status}</td>
                        <td>{props.children[key].approverRemarks || 'None'}</td>
                        <td>
                        { props.editable &&
                            <div>
                                <button className="btn customButton-icon-only yellow" data-bs-toggle="modal" data-bs-target="#editTrainingSeminar" onClick={() => {
                                        setEdit(props.children[key].tsId)
                                        setKey(editTS)
                                    }}>
                                        <span className="material-icons-sharp">edit</span>
                                    </button>
                                <button className="btn customButton-icon-only maroon" data-bs-toggle="modal" data-bs-target="#deleteTrainingSeminar" onClick={() => {
                                    setDelete(props.children[key].tsId)
                                }}>
                                    <span className="material-icons-sharp">delete</span>
                                </button>
                            </div>
                        }
                        { props.approver &&
                            <div className = "center">
                                <button className="btn customButton-icon-only green" data-bs-toggle="modal" data-bs-target="#approveTrainingSeminar" onClick={() => {
                                    setApprove(props.children[key].tsId)
                                }}>
                                    <span className="material-icons-sharp">check</span>
                                </button>
                                <button className="btn customButton-icon-only maroon" data-bs-toggle="modal" data-bs-target="#rejectTrainingSeminar" onClick={() => {
                                    setApprove(props.children[key].tsId)
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
        content = <td colSpan = "9"><br/><p align = "center">No data available.</p></td>
    }

    function setEdit(id) {
        editTS = id
    }

    function setDelete(id) {
        deleteTS = id
    }

    function setApprove(id) {
        approveTS = id
    }

    function setKey(x) {
        Object.keys(props.children).map(key => {
            if(props.children[key].tsId == x) {
                setData(props.children[key])
                if(props.children[key].endDate == "" || props.children[key].endDate == null) {
                    setData(currData => ({...currData, endDate: ''}))
                }
                if(props.children[key].proof) {
                    setData(currData => ({...currData, proof: props.children[key].proof}))
                } else {
                    setData(currData => ({...currData, proof: 'None'}))
                }
            }
        });
    }

    return (
        <div>
            <div className="center">
                <h2 align = "center" style={{display: "inline-block"}}> Training/Seminars </h2>
                {/* Add Button Trigger */}
                { props.editable &&
                <button type="button" className="btn customButton-icon-only maroon" data-bs-toggle="collapse" data-bs-target="#addTraining" aria-expanded="false" aria-controls="addTraining" style={{left: "1rem", position: "relative"}}>
                    <span className="material-icons-sharp">add</span>
                </button>
                }
            </div>

            <br></br><br></br>
            <NameDisplay unit = {props.unit} position={props.position}>{props.name}</NameDisplay>
            <div role="alert" id="trainingseminaralert" style={{visibility:"hidden"}}></div>
            

            { props.editable && 
                <div className="card collapse" id="addTraining">
                    <TrainingSeminarForm token = { props.token } />
                </div>  
            } 	
            <br></br><br></br>


            <div className = "table-title">
                <table>
                    <thead>
                        <tr>
                            <th>Name of Training/Seminar</th>
                            <th>Role</th>
                            <th>Venue</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Remarks</th>
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


            <div className="modal fade" id="editTrainingSeminar" tabIndex="-1" role="dialog" aria-labelledby="editTrainingSeminarLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editTrainingSeminarLabel">Update Training/Seminar Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <Formik
                        enableReinitialize
                        initialValues={currData}
                        onSubmit={async (values) => {
                            let form = document.getElementById('editTSForm')
                            let formData = new FormData(form)
                            formData.append('tsId', currData.tsId)
                            
                            let alert = document.getElementById("trainingseminaralert")
                            let res = await updateTraining(formData, props.token)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            $("#trainingseminaralert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#trainingseminaralert").slideUp(500);
                            });

                            Router.push('/faculty/accomplishment')
                        }}
                    >
                    {({ values, errors, touched, isSubmitting }) => (
                        <Form id = "editTSForm">
                            <div className="modal-body">
                                <hr />
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "TrainingSeminarUpdate"> Name of Training/Seminar </label>
                                        <Field className = "form-control" type = "text" name = "title" id = "title" placeholder = "Input training/seminar" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "TrainingSeminarRoleUpdate"> Role </label>
                                        <Field className = "form-control" type = "text" name = "role" id = "role" placeholder = "Input role" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "TrainingSeminarVenueUpdate"> Venue </label>
                                        <Field className = "form-control" type = "text" name = "venue" id = "venue" placeholder = "Input venue" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "TrainingSeminarStartDateUpdate"> Start Date </label>
                                        <Field type = "date" className = "form-control" name = "dateFrom" id = "dateFrom" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "TrainingSeminarEndDateUpdate"> End Date </label>
                                        <Field type = "date" className = "form-control" name = "dateTo" id = "dateTo" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "TrainingSeminarVenueUpdate"> Remarks </label>
                                        <Field className = "form-control" type = "text" name = "remarks" id = "remarks" placeholder = "Input remarks" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "TrainingSeminarProofUpdate"> Add/Edit Proof [Uploaded: {currData.proof}] </label>
                                        <Field type = "file" className = "form-control-file" name = "proof" id = "proof" value={undefined} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                    $('#editTrainingSeminar').modal('toggle');
                                }}>Save changes</button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="deleteTrainingSeminar" tabIndex="-1" role="dialog" aria-labelledby="deleteTrainingSeminarLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteTrainingSeminarLabel">Delete Training/Seminar Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to delete this training/seminar information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't delete</button>
                        <button type="button" className="btn btn-danger" onClick = {async () => {
                            $('#deleteTrainingSeminar').modal('toggle');

                            let alert = document.getElementById("trainingseminaralert")
                            let res = await deleteTraining(deleteTS, props.token)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            $("#trainingseminaralert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#trainingseminaralert").slideUp(500);
                            });

                            Router.push('/faculty/accomplishment')
                        }}>Yes, delete</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="approveTrainingSeminar" tabIndex="-1" role="dialog" aria-labelledby="approveTrainingSeminarLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="approveTrainingSeminarLabel">Approve Training/Seminar Information</h5>

                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to approve this training/seminar information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't approve</button>
                        <button type="button" className="btn btn-danger" onClick = {async () => {
                            let alert = document.getElementById("trainingseminaralert")
                            $('#approveTrainingSeminar').modal('toggle');
                            
                            let formData = new FormData()
                            formData.append('tsId', approveTS)
                            
                            let res = await approveTraining(formData, true, props.facultyId, props.token)
                            
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
                            
                            $("#trainingseminaralert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#trainingseminaralert").slideUp(500);
                            });
                            Router.push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId)
                        }}>Yes, approve</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="rejectTrainingSeminar" tabIndex="-1" role="dialog" aria-labelledby="rejectTrainingSeminarLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="rejectTrainingSeminarLabel">Reject Training/Seminar Information</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <Formik
                    enableReinitialize
                    initialValues={currData}
                    onSubmit={async (values) => {
                        let alert = document.getElementById("trainingseminaralert")
                        $('#rejectTrainingSeminar').modal('toggle');
                        
                        let form = document.getElementById('rejectTrainingSeminarForm')
                        let formData = new FormData(form)
                        formData.append('tsId', approveTS)
                        
                        let res = await approveTraining(formData, false, props.facultyId, props.token)
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
                        
                        $("#trainingseminaralert").fadeTo(5000, 500).slideUp(500, function(){
                            $("#trainingseminaralert").slideUp(500);
                        });
                        Router.push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId)
                    }}
                >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form id = "rejectTrainingSeminarForm">
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
                                $('#rejectTrainingSeminar').modal('toggle');
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

export default TrainingSeminar
