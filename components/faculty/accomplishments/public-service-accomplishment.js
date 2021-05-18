import Link from 'next/link'
import PublicServiceAccomplishmentForm from './public-service-accomplishment-form'
import NameDisplay from '../../../components/name-display'
import Router from 'next/router'
import React from 'react'
import { Formik, Form, Field } from 'formik'

import downloadProof from '../../../services/faculty/downloadProof'
import deletePublicService from '../../../services/faculty/accomplishments/deletePublicService'
import updatePublicService from '../../../services/faculty/accomplishments/updatePublicService'

function PublicServiceAccomplishment(props){
    const name = props.name
    let deletePS = 0
    let editPS = 0
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
                    <tr key = {props.children.[key].publicServiceId}>
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
                            }
                            { 
                                !props.children[key].proof && 
                                <div>None</div>
                            }
                        </td>
                        <td>{props.children[key].status}</td>
                        <td>
                            {
                                props.facultyFlag &&
                                <div className = "btn-group">
                                    <a className="btn btn-info" data-toggle="modal" data-target="#editPublicService" onClick={() => {
                                        setEdit(props.children.[key].publicServiceId)
                                        setKey(editPS)
                                    }}>Edit</a>
                                    <a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService" onClick={() => {
                                        setDelete(props.children.[key].publicServiceId)
                                    }}>Delete</a>
                                </div>
                            }
                            {
                                !props.facultyFlag &&
                                <div className = "btn-grp">
                                    <a className="btn btn-info" data-toggle="modal" data-target="#" onClick={() => {
                                        
                                    }}>Approve</a>
                                    <a className="btn btn-danger" data-toggle="modal" data-target="#" onClick={() => {
                                        
                                    }}>Reject</a>
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
                    <tr key = {props.children.[key].publicServiceId}>
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
                        }
                        { 
                            !props.children[key].proof && 
                            <div>None</div>
                        }
                        </td>
                        <td>{props.children[key].status}</td>
                        <td>
                        {
                            props.facultyFlag &&
                            <div className = "btn-group">
                                <a className="btn btn-info" data-toggle="modal" data-target="#editPublicService" onClick={() => {
                                    setEdit(props.children.[key].publicServiceId)
                                    setKey(editPS)
                                }}>Edit</a>
                                <a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService" onClick={() => {
                                    setDelete(props.children.[key].publicServiceId)
                                }}>Delete</a>
                            </div>
                        }
                        {
                            !props.facultyFlag &&
                            <div className = "btn-grp">
                                <a className="btn btn-info" data-toggle="modal" data-target="#" onClick={() => {
                                    
                                }}>Approve</a>
                                <a className="btn btn-danger" data-toggle="modal" data-target="#" onClick={() => {
                                    
                                }}>Reject</a>
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
                    <tr key = {props.children.[key].publicServiceId}>
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
                        }
                        { 
                            !props.children[key].proof && 
                            <div>None</div>
                        }
                        </td>
                        <td>{props.children[key].status}</td>
                        <td>
                        {
                            props.facultyFlag &&
                            <div className = "btn-group">
                                <a className="btn btn-info" data-toggle="modal" data-target="#editPublicService" onClick={() => {
                                    setEdit(props.children.[key].publicServiceId)
                                    setKey(editPS)
                                }}>Edit</a>
                                <a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService" onClick={() => {
                                    setDelete(props.children.[key].publicServiceId)
                                }}>Delete</a>
                            </div>
                        }
                        {
                            !props.facultyFlag &&
                            <div className = "btn-grp">
                                <a className="btn btn-info" data-toggle="modal" data-target="#" onClick={() => {
                                    
                                }}>Approve</a>
                                <a className="btn btn-danger" data-toggle="modal" data-target="#" onClick={() => {
                                    
                                }}>Reject</a>
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
                    <tr key = {props.children.[key].publicServiceId}>
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
                        }
                        { 
                            !props.children[key].proof && 
                            <div>None</div>
                        }
                        </td>
                        <td>{props.children[key].status}</td>
                        <td>
                        {
                            props.facultyFlag &&
                            <div className = "btn-group">
                                <a className="btn btn-info" data-toggle="modal" data-target="#editPublicService" onClick={() => {
                                    setEdit(props.children.[key].publicServiceId)
                                    setKey(editPS)
                                }}>Edit</a>
                                <a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService" onClick={() => {
                                    setDelete(props.children.[key].publicServiceId)
                                }}>Delete</a>
                            </div>
                        }
                        {
                            !props.facultyFlag &&
                            <div className = "btn-grp">
                                <a className="btn btn-info" data-toggle="modal" data-target="#" onClick={() => {
                                    
                                }}>Approve</a>
                                <a className="btn btn-danger" data-toggle="modal" data-target="#" onClick={() => {
                                    
                                }}>Reject</a>
                            </div>
                        }
                        </td>
                    </tr>
                );
            }
        });
    }
    else{
        return(
            <td colspan = "8">No data available!</td>
        )
    }

    function setEdit(id) {
        editPS = id
    }

    function setDelete(id) {
        deletePS = id
    }

    function setKey(x) {
        Object.keys(props.children).map(key => {
            if(props.children.[key].publicServiceId == x) {
                setData(props.children.[key])
                if(props.children.[key].endDate == "" || props.children.[key].endDate == null) {
                    setData(currData => ({...currData, endDate: ''}))
                }
            }
        });
    }

	return(
	<div>
		<h2 align = "center"> Public Service Accomplishments </h2>
        <NameDisplay unit = {props.unit} position={props.position} employmentType={props.employmentType}>{props.name}</NameDisplay>
        <div role="alert" id="publicservicealert" style={{visibility:"hidden"}}></div>
		<div>
		<h5 align = "center">Within UP Manila </h5>
            <table className = "table table-striped table-sm">
                <tbody>
                    <tr>
                        <th>Position/Role</th>
        			    <th>Organization</th>
		          	    <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Proof</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {upm ? upm : 'Empty'} 
                </tbody>
            </table>
            </div>
            <div>
		<br />
		<h5 align = "center"> Contributions to Profession </h5>
            <table className = "table table-striped table-sm">
                <tbody>
                    <tr>
                        <th>Position/Role</th>
                        <th>Organization</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Proof</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {pro ? pro : 'Empty'}
                </tbody>
            </table>
		<br />
		<h5 align = "center"> Contributions to the Nation </h5>
            <table className = "table table-striped table-sm">
                <tbody>
                    <tr>
                        <th>Position/Role</th>
                        <th>Organization</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Proof</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {nat}
                </tbody>
            </table>
		<br />
		<h5 align = "center"> Contributions to the World </h5>
            <table className = "table table-striped table-sm">
                <tbody>
                    <tr>
                        <th>Position/Role</th>
                        <th>Organization</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Proof</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {wor}
                </tbody>
            </table>
            </div>

            {
                props.facultyFlag &&
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
                            		<label htmlFor = "PublicServiceAccomplishmentProofUpdate"> Proof </label>
                            		<Field type = "file" className = "form-control-file" name = "proof" id = "proof" value={undefined} />
                            	</div>
                        	    </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                    $('#editPublicService').modal('toggle');
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
            			<button type="button" className="btn btn-danger" data-dismiss="modal" onClick = {async () => {
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

            </div>
    )
}

export default PublicServiceAccomplishment
