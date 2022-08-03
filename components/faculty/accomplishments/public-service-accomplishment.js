import Link from 'next/link'
import PublicServiceAccomplishmentForm from './public-service-accomplishment-form'
import NameDisplay from '../../../components/name-display'
import Router from 'next/router'
import React from 'react'
import { Formik, Form, Field } from 'formik'

import downloadProof from '../../../services/faculty/downloadProof'
import deletePublicService from '../../../services/faculty/accomplishments/deletePublicService'
import updatePublicService from '../../../services/faculty/accomplishments/updatePublicService'
import approvePublicService from '../../../services/faculty/accomplishments/approvePublicService'

function PublicServiceAccomplishment(props){
    const name = props.name
    let deletePS = 0
    let editPS = 0
    let approvePSA = 0

    const [currData, setData] = React.useState({
        publicServiceId: 0,
        position: '',
        organization:'',
        description: '',
        type: '',
        startDate: '',
        endDate: ''
    })
    let upm = null
    let pro = null
    let nat
    let wor
    if(props.children != null) {
        upm = Object.keys(props.children).map(key => {
            if (props.children[key].type == 'Within UPM'){
                return(
                    <tr key = {props.children[key].publicServiceId}>
                        <td>{props.children[key].position}</td>
                        <td>{props.children[key].organization}</td>
                        <td>{props.children[key].description}</td>
                        <td>{props.children[key].startDate}</td>
                        <td>{props.children[key].endDate}</td>
                        <td>
                            {
                                props.children[key].proof &&
                                <div className = "btn-grp">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick = {() => {
                                            let file = props.children[key].proof
                                            downloadProof(file, props.token)
                                        }}
                                    >
                                        Download
                                    </button>
                                    <a
                                        className ="btn btn-info"
                                        href={process.env.UPLOADS_URL + props.children[key].proof}
                                        style = {{ color: 'white' }}
                                        target="_blank">
                                        Preview
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
                                    <button className="btn customButton-icon-only yellow" data-toggle="modal" data-target="#editPublicService" onClick={() => {
                                        setEdit(props.children[key].publicServiceId)
                                        setKey(editPS)
                                    }}>
                                        <span className="material-icons-sharp">edit</span>
                                    </button>
                                    <button className="btn customButton-icon-only maroon" data-toggle="modal" data-target="#deletePublicService" onClick={() => {
                                        setDelete(props.children[key].publicServiceId)
                                    }}>
                                        <span className="material-icons-sharp">delete</span>
                                    </button>
                                </div>
                            }
                            { props.approver &&
                                <div className="center">
                                    <button className="btn customButton-icon-only green" data-toggle="modal" data-target="#approvePublicService" onClick={() => {
                                        setApprove(props.children[key].publicServiceId)
                                    }}>
                                        <span className="material-icons-sharp">check</span>
                                    </button>
                                    <button className="btn customButton-icon-only maroon" data-toggle="modal" data-target="#rejectPublicService" onClick={() => {
                                        setApprove(props.children[key].publicServiceId)
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
        pro = Object.keys(props.children).map(key => {
            if (props.children[key].type == 'Within Pro'){
                return(
                    <tr key = {props.children[key].publicServiceId}>
                        <td>{props.children[key].position}</td>
                        <td>{props.children[key].organization}</td>
                        <td>{props.children[key].description}</td>
                        <td>{props.children[key].startDate}</td>
                        <td>{props.children[key].endDate}</td>
                        <td>
                        {
                            props.children[key].proof &&
                            <div className = "btn-grp">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick = {() => {
                                        let file = props.children[key].proof
                                        downloadProof(file, props.token)
                                    }}
                                >
                                    Download
                                </button>
                                <a
                                    className ="btn btn-info"
                                    href={process.env.UPLOADS_URL + props.children[key].proof}
                                    style = {{ color: 'white' }}
                                    target="_blank">
                                    Preview
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
                                    <button className="btn customButton-icon-only yellow" data-toggle="modal" data-target="#editPublicService" onClick={() => {
                                        setEdit(props.children[key].publicServiceId)
                                        setKey(editPS)
                                    }}>
                                        <span className="material-icons-sharp">edit</span>
                                    </button>
                                    <button className="btn customButton-icon-only maroon" data-toggle="modal" data-target="#deletePublicService" onClick={() => {
                                        setDelete(props.children[key].publicServiceId)
                                    }}>
                                        <span className="material-icons-sharp">delete</span>
                                    </button>
                                </div>
                            }
                            { props.approver &&
                                <div className = "center">
                                    <button className="btn customButton-icon-only green" data-toggle="modal" data-target="#approvePublicService" onClick={() => {
                                        setApprove(props.children[key].publicServiceId)
                                    }}>
                                       <span className="material-icons-sharp">check</span>
                                    </button>
                                    <button className="btn customButton-icon-only maroon" data-toggle="modal" data-target="#rejectPublicService" onClick={() => {
                                        setApprove(props.children[key].publicServiceId)
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
        nat = Object.keys(props.children).map(key => {
            if (props.children[key].type == 'Within Nat'){
                return(
                    <tr key = {props.children[key].publicServiceId}>
                        <td>{props.children[key].position}</td>
                        <td>{props.children[key].organization}</td>
                        <td>{props.children[key].description}</td>
                        <td>{props.children[key].startDate}</td>
                        <td>{props.children[key].endDate}</td>
                        <td>
                        {
                            props.children[key].proof &&
                            <div className = "btn-grp">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick = {() => {
                                        let file = props.children[key].proof
                                        downloadProof(file, props.token)
                                    }}
                                >
                                    Download
                                </button>
                                <a
                                    className ="btn btn-info"
                                    href={process.env.UPLOADS_URL + props.children[key].proof}
                                    style = {{ color: 'white' }}
                                    target="_blank">
                                    Preview
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
                                <button className="btn customButton-icon-only yellow" data-toggle="modal" data-target="#editPublicService" onClick={() => {
                                    setEdit(props.children[key].publicServiceId)
                                    setKey(editPS)
                                }}>
                                    <span className="material-icons-sharp">edit</span>
                                </button>
                                <button className="btn customButton-icon-only maroon" data-toggle="modal" data-target="#deletePublicService" onClick={() => {
                                    setDelete(props.children[key].publicServiceId)
                                }}>
                                    <span className="material-icons-sharp">delete</span>
                                </button>
                            </div>
                        }
                        { props.approver &&
                            <div className = "center">
                                <button className="btn customButton-icon-only green" data-toggle="modal" data-target="#approvePublicService" onClick={() => {
                                    setApprove(props.children[key].publicServiceId)
                                }}>
                                    <span className="material-icons-sharp">check</span>
                                </button>
                                <button className="btn customButton-icon-only maroon" data-toggle="modal" data-target="#rejectPublicService" onClick={() => {
                                    setApprove(props.children[key].publicServiceId)
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
        wor = Object.keys(props.children).map(key => {
            if (props.children[key].type == 'Within Wor'){
                return(
                    <tr key = {props.children[key].publicServiceId}>
                        <td>{props.children[key].position}</td>
                        <td>{props.children[key].organization}</td>
                        <td>{props.children[key].description}</td>
                        <td>{props.children[key].startDate}</td>
                        <td>{props.children[key].endDate}</td>
                        <td>
                        {
                            props.children[key].proof &&
                            <div className = "btn-grp">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick = {() => {
                                        let file = props.children[key].proof
                                        downloadProof(file, props.token)
                                    }}
                                >
                                    Download
                                </button>
                                <a
                                    className ="btn btn-info"
                                    href={process.env.UPLOADS_URL + props.children[key].proof}
                                    style = {{ color: 'white' }}
                                    target="_blank">
                                    Preview
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
                                <button className="btn customButton-icon-only yellow" data-toggle="modal" data-target="#editPublicService" onClick={() => {
                                    setEdit(props.children[key].publicServiceId)
                                    setKey(editPS)
                                }}>
                                    <span className="material-icons-sharp">edit</span>
                                </button>
                                <button className="btn customButton-icon-only maroon" data-toggle="modal" data-target="#deletePublicService" onClick={() => {
                                    setDelete(props.children[key].publicServiceId)
                                }}>
                                    <span className="material-icons-sharp">delete</span>
                                </button>
                            </div>
                        }
                        { props.approver &&
                            <div className = "center">
                                <button className="btn customButton-icon-only green" data-toggle="modal" data-target="#approvePublicService" onClick={() => {
                                    setApprove(props.children[key].publicServiceId)
                                }}>
                                    <span className="material-icons-sharp">check</span>
                                </button>
                                <button className="btn customButton-icon-only maroon" data-toggle="modal" data-target="#rejectPublicService" onClick={() => {
                                    setApprove(props.children[key].publicServiceId)
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

    function setEdit(id) {
        editPS = id
    }

    function setDelete(id) {
        deletePS = id
    }

    function setApprove(id) {
        approvePSA = id
    }

    function setKey(x) {
        Object.keys(props.children).map(key => {
            if(props.children[key].publicServiceId == x) {
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

	return(
	<div>
		<h2 align = "center"> Public Service Accomplishments</h2>
        <NameDisplay unit = {props.unit} position={props.position}>{props.name}</NameDisplay>
        <div role="alert" id="publicservicealert" style={{visibility:"hidden"}}></div>
		<div>
		
        <div className = "table-title">
            <h5 align = "center">Within UP Manila </h5>
            <table>
                <thead>
                    <tr>
                        <th>Position/Role</th>
                        <th>Organization</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Proof</th>
                        <th>Status</th>
                        <th>Approver Remarks</th>
                        { (props.editable || props.approver) && <th>Action</th>}
                    </tr>
                </thead>
                <tbody>
                    {upm ? upm : <td colSpan = "8"><br/><p align = "center">No data available.</p></td>} 
                </tbody>
            </table>
        </div>


            </div>
            <div>
		<br />
		
        <div className = "table-title">
            <h5 align = "center"> Contributions to Profession </h5>
            <table>
                <thead>
                    <tr>
                        <th>Position/Role</th>
                        <th>Organization</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Proof</th>
                        <th>Status</th>
                        <th>Approver Remarks</th>
                        { (props.editable || props.approver) && <th>Action</th>}
                    </tr>
                </thead>
                <tbody>

                    {pro ? pro : <td colSpan = "8"><br/><p align = "center">No data available.</p></td>}
                </tbody>
            </table>
        </div>


		<br />
		
	<div className = "table-title">
        <h5 align = "center"> Contributions to the Nation </h5>
        <table>
            <thead>
                <tr>
                    <th>Position/Role</th>
                    <th>Organization</th>
                    <th>Description</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Proof</th>
                    <th>Status</th>
                    <th>Approver Remarks</th>
                    { (props.editable || props.approver) && <th>Action</th>}
                </tr>
            </thead>
            <tbody>
                {nat ? nat : <td colSpan = "8"><br/><p align = "center">No data available.</p></td>}
            </tbody>
        </table>
	</div>
		<br />


		
	<div className = "table-title">
        <h5 align = "center"> Contributions to the World </h5>
        <table>
            <thead>
                <tr>
                    <th>Position/Role</th>
                    <th>Organization</th>
                    <th>Description</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Proof</th>
                    <th>Status</th>
                    <th>Approver Remarks</th>
                    { (props.editable || props.approver) && <th>Action</th>}
                </tr>
            </thead>
            <tbody>
                {wor ? wor : <td colSpan = "8"><br/><p align = "center">No data available.</p></td>}
            </tbody>
        </table>
	</div>
            </div>

            { props.editable &&
                <div>
                    <PublicServiceAccomplishmentForm token = { props.token } />
                </div>  
            } 
		
		<div className="modal fade" id="editPublicService" tabIndex="-1" role="dialog" aria-labelledby="editPublicServiceLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="editPublicServiceLabel">Update Public Service Accomplishment Information</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <Formik
                    enableReinitialize
                    initialValues={currData}
                    onSubmit={async (values) => {
                        let form = document.getElementById('editPSForm')
                        let formData = new FormData(form)
                        formData.append('publicServiceId', currData.publicServiceId)
                        formData.append('type', currData.type)
                        let alert = document.getElementById("publicservicealert")
                        let res = await updatePublicService(formData, props.token)
                        if(res.success == true) { 
                            alert.className ="alert alert-success"
                            alert.style = "visibility: visible"
                            alert.innerHTML = res.message
                        } else {
                            alert.className = "alert alert-danger"
                            if(res.error) alert.innerHTML = res.error[0].message
                            else alert.innerHTML = res.message
                        }
                        $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function(){
                            $("#publicservicealert").slideUp(500);
                        });

                        Router.push('/faculty/accomplishment')
                    }}
                >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form id = "editPSForm">
                        <div className="modal-body">
                            <hr />
                            <div className = "form-row">
                            <div className = "form-group">
                                <label htmlFor = "PublicServicePositionUpdate"> Position/Role </label>
                                <Field className = "form-control" type = "text" name = "position" id = "position" placeholder = "Input position/role" />
                            </div>
                            </div>
                            <div className = "form-row">
                            <div className = "form-group">
                                <label htmlFor = "PublicServiceOrganizationUpdate"> Organization </label>
                                <Field className = "form-control" type = "text" name = "organization" id = "organization" placeholder = "Input organization" />
                            </div>
                            </div>
                            <div className = "form-row">
                            <div className = "form-group">
                                <label htmlFor = "PublicServiceAccomplishmentStartDateUpdate"> Start Date </label>
                                <Field type = "date" className = "form-control" name = "startDate" id = "startDate" />
                            </div>
                            </div>
                            <div className = "form-row">
                            <div className = "form-group">
                                <label htmlFor = "PublicServiceAccomplishmentEndDateUpdate"> End Date </label>
                                <Field type = "date" className = "form-control" name = "endDate" id = "endDate" />
                            </div>
                            </div>
                            <div className = "form-row">
                            <div className = "form-group col-md-12">
                                <label htmlFor = "PublicServiceAccomplishmentDescriptionUpdate"> Description </label>
                                <Field className = "form-control" type = "text" name = "description" id = "description" placeholder = "Input description" />
                            </div>
                            </div>
                            <div className = "form-row">
                            <div className = "form-group">
                                <label htmlFor = "PublicServiceAccomplishmentProofUpdate"> Add/Edit Proof [Uploaded: {currData.proof}] </label>
                                <Field type = "file" className = "form-control-file" name = "proof" id = "proof" value={undefined} />
                            </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                $('#editPublicService').modal('hide');
                            }}>Save changes</button>
                        </div>
                    </Form>
                )}
                </Formik>
                </div>
            </div>
        </div>
        
        <div className="modal fade" id="deletePublicService" tabIndex="-1" role="dialog" aria-labelledby="deletePublicServiceLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="deletePublicServiceLabel">Delete Public Service Accomplishment Information</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <hr />
                    <p> Are you sure you want to delete this public service accomplishment information? </p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't delete</button>
                    <button type="button" className="btn btn-danger" onClick = {async () => {
                        let alert = document.getElementById("publicservicealert")
                        let res = await deletePublicService(deletePS, props.token)
                        if(res.success == true) { 
                            alert.className ="alert alert-success"
                            alert.style = "visibility: visible"
                            alert.innerHTML = res.message
                        } else {
                            alert.className = "alert alert-danger"
                            if(res.error) alert.innerHTML = res.error[0].message
                            else alert.innerHTML = res.message
                        }
                        $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function(){
                            $("#publicservicealert").slideUp(500);
                        });

                        Router.push('/faculty/accomplishment')
                        
                    }}>Yes, delete</button>
                </div>
                </div>
            </div>
    
    </div>

        <div className="modal fade" id="approvePublicService" tabIndex="-1" role="dialog" aria-labelledby="approvePublicServiceLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="approvePublicServiceLabel">Approve Public Service Information</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <hr />
                    <p> Are you sure you want to approve this public service information? </p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't approve</button>
                    <button type="button" className="btn btn-danger" onClick = {async () => {
                        let alert = document.getElementById("publicservicealert")
                        $('#approvePublicService').modal('toggle');
                        
                        let formData = new FormData()
                        formData.append('publicServiceId', approvePSA)
                        
                        let res = await approvePublicService(formData, true, props.facultyId, props.token)
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
                        
                        $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function(){
                            $("#publicservicealert").slideUp(500);
                        });
                        Router.push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId)
                    }}>Yes, approve</button>
                </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="rejectPublicService" tabIndex="-1" role="dialog" aria-labelledby="rejectPublicServiceLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="rejectPublicServiceLabel">Reject Public Service Information</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <Formik
                    enableReinitialize
                    initialValues={currData}
                    onSubmit={async (values) => {
                        let alert = document.getElementById("publicservicealert")
                        $('#rejectPublicService').modal('toggle');
                        
                        let form = document.getElementById('rejectPublicServiceForm')
                        let formData = new FormData(form)
                        formData.append('publicServiceId', approvePSA)
                        
                        let res = await approvePublicService(formData, false, props.facultyId, props.token)
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
                        
                        $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function(){
                            $("#publicservicealert").slideUp(500);
                        });
                        Router.push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId)
                    }}
                >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form id = "rejectPublicServiceForm">
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
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                $('#rejectPublicService').modal('toggle');
                            }}>Save changes</button>
                        </div>
                    </Form>
                )}
                </Formik>
                </div>
            </div>
        </div>
    
        </div>
    )
}

export default PublicServiceAccomplishment
