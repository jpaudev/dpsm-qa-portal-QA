import Link from 'next/link'
import PublicServiceAccomplishmentForm from './public-service-accomplishment-form'
import NameDisplay from '../../../components/name-display'
import Router from 'next/router'
import React from 'react'

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
        endDate: '',
        proof: ''
    })
    let upm = null
    let pro = null
    let nat
    let wor
    if(props.children != null) {
        upm = Object.keys(props.children).map(key => {
            if (props.children[key].type == 'Within UPM'){
                if(props.children[key].proof) {
                    return(
                        <tr key = {props.children.[key].publicServiceId}>
                            <td>{props.children[key].position}</td>
                            <td>{props.children[key].organization}</td>
                            <td>{props.children[key].description}</td>
                            <td>{props.children[key].startDate}</td>
                            <td>{props.children[key].endDate}</td>
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
                                    <a className="btn btn-info" data-toggle="modal" data-target="#editPublicService" onClick={() => {
                                        setEdit(props.children.[key].publicServiceId)
                                        setKey(editPS)
                                    }}>Edit</a>
                                    <a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService" onClick={() => {
                                        setDelete(props.children.[key].publicServiceId)
                                    }}>Delete</a>
                                </div>
                            </td>
                        </tr>
                    );
                } else {
                    return(
                        <tr key = {props.children.[key].publicServiceId}>
                            <td>{props.children[key].position}</td>
                            <td>{props.children[key].organization}</td>
                            <td>{props.children[key].description}</td>
                            <td>{props.children[key].startDate}</td>
                            <td>{props.children[key].endDate}</td>
                            <td>None</td>
                            <td>{props.children[key].status}</td>
                            <td>
                                <div className = "btn-group">
                                    <a className="btn btn-info" data-toggle="modal" data-target="#editPublicService" onClick={() => {
                                        setEdit(props.children.[key].publicServiceId)
                                        setKey(editPS)
                                    }}>Edit</a>
                                    <a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService" onClick={() => {
                                        setDelete(props.children.[key].publicServiceId)
                                    }}>Delete</a>
                                </div>
                            </td>
                        </tr>
                    );
                }
            }
        });
        pro = Object.keys(props.children).map(key => {
            if (props.children[key].type == 'Within Pro'){
                if(props.children[key].proof) {
                    return(
                        <tr key = {props.children.[key].publicServiceId}>
                            <td>{props.children[key].position}</td>
                            <td>{props.children[key].organization}</td>
                            <td>{props.children[key].description}</td>
                            <td>{props.children[key].startDate}</td>
                            <td>{props.children[key].endDate}</td>
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
                                    <a className="btn btn-info" data-toggle="modal" data-target="#editPublicService" onClick={() => {
                                        setEdit(props.children.[key].publicServiceId)
                                        setKey(editPS)
                                    }}>Edit</a>
                                    <a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService" onClick={() => {
                                        setDelete(props.children.[key].publicServiceId)
                                    }}>Delete</a>
                                </div>
                            </td>
                        </tr>
                    );
                } else {
                    return(
                        <tr key = {props.children.[key].publicServiceId}>
                            <td>{props.children[key].position}</td>
                            <td>{props.children[key].organization}</td>
                            <td>{props.children[key].description}</td>
                            <td>{props.children[key].startDate}</td>
                            <td>{props.children[key].endDate}</td>
                            <td>None</td>
                            <td>{props.children[key].status}</td>
                            <td>
                                <div className = "btn-group">
                                    <a className="btn btn-info" data-toggle="modal" data-target="#editPublicService" onClick={() => {
                                        setEdit(props.children.[key].publicServiceId)
                                        setKey(editPS)
                                    }}>Edit</a>
                                    <a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService" onClick={() => {
                                        setDelete(props.children.[key].publicServiceId)
                                    }}>Delete</a>
                                </div>
                            </td>
                        </tr>
                    );
                }
            }
        });
        nat = Object.keys(props.children).map(key => {
            if (props.children[key].type == 'Within Nat'){
                if(props.children[key].proof) {
                    return(
                        <tr key = {props.children.[key].publicServiceId}>
                            <td>{props.children[key].position}</td>
                            <td>{props.children[key].organization}</td>
                            <td>{props.children[key].description}</td>
                            <td>{props.children[key].startDate}</td>
                            <td>{props.children[key].endDate}</td>
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
                                    <a className="btn btn-info" data-toggle="modal" data-target="#editPublicService" onClick={() => {
                                        setEdit(props.children.[key].publicServiceId)
                                        setKey(editPS)
                                    }}>Edit</a>
                                    <a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService" onClick={() => {
                                        setDelete(props.children.[key].publicServiceId)
                                    }}>Delete</a>
                                </div>
                            </td>
                        </tr>
                    );
                } else {
                    return(
                        <tr key = {props.children.[key].publicServiceId}>
                            <td>{props.children[key].position}</td>
                            <td>{props.children[key].organization}</td>
                            <td>{props.children[key].description}</td>
                            <td>{props.children[key].startDate}</td>
                            <td>{props.children[key].endDate}</td>
                            <td>None</td>
                            <td>{props.children[key].status}</td>
                            <td>
                                <div className = "btn-group">
                                    <a className="btn btn-info" data-toggle="modal" data-target="#editPublicService" onClick={() => {
                                        setEdit(props.children.[key].publicServiceId)
                                        setKey(editPS)
                                    }}>Edit</a>
                                    <a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService" onClick={() => {
                                        setDelete(props.children.[key].publicServiceId)
                                    }}>Delete</a>
                                </div>
                            </td>
                        </tr>
                    );
                }
            }
        });
        wor = Object.keys(props.children).map(key => {
            if (props.children[key].type == 'Within Wor'){
                if(props.children[key].proof) {
                    return(
                        <tr key = {props.children.[key].publicServiceId}>
                            <td>{props.children[key].position}</td>
                            <td>{props.children[key].organization}</td>
                            <td>{props.children[key].description}</td>
                            <td>{props.children[key].startDate}</td>
                            <td>{props.children[key].endDate}</td>
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
                                    <a className="btn btn-info" data-toggle="modal" data-target="#editPublicService" onClick={() => {
                                        setEdit(props.children.[key].publicServiceId)
                                        setKey(editPS)
                                    }}>Edit</a>
                                    <a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService" onClick={() => {
                                        setDelete(props.children.[key].publicServiceId)
                                    }}>Delete</a>
                                </div>
                            </td>
                        </tr>
                    );
                } else {
                    return(
                        <tr key = {props.children.[key].publicServiceId}>
                            <td>{props.children[key].position}</td>
                            <td>{props.children[key].organization}</td>
                            <td>{props.children[key].description}</td>
                            <td>{props.children[key].startDate}</td>
                            <td>{props.children[key].endDate}</td>
                            <td>None</td>
                            <td>{props.children[key].status}</td>
                            <td>
                                <div className = "btn-group">
                                    <a className="btn btn-info" data-toggle="modal" data-target="#editPublicService" onClick={() => {
                                        setEdit(props.children.[key].publicServiceId)
                                        setKey(editPS)
                                    }}>Edit</a>
                                    <a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService" onClick={() => {
                                        setDelete(props.children.[key].publicServiceId)
                                    }}>Delete</a>
                                </div>
                            </td>
                        </tr>
                    );
                }
            }
        });
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
            }
        });
    }

    function handleInputChange(id, event) {
        setData({...currData, [id]: event.target.value});
    }

	return(
	<div>
		<h2 align = "center"> Public Service Accomplishments </h2>
        <NameDisplay unit = {props.unit} position={props.position} employmentType={props.employmentType}>{name}</NameDisplay>
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

            <div>
                <PublicServiceAccomplishmentForm token = { props.token } />
            </div>   
		
		<div className="modal fade" id="editPublicService" tabIndex="-1" role="dialog" aria-labelledby="editPublicServiceLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editPublicServiceLabel">Update Public Service Accomplishment Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "PublicServicePositionUpdate"> Position/Role </label>
                            		<input className = "form-control" type = "text" name = "PublicServicePositionUpdate" defaultValue = { currData.position } onChange = {(e) => handleInputChange("position", e)} placeholder = "Input position/role" />
                        	</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "PublicServiceOrganizationUpdate"> Organization </label>
                            		<input className = "form-control" type = "text" name = "PublicServiceOrganizationUpdate" defaultValue = { currData.organization } onChange = {(e) => handleInputChange("organization", e)} placeholder = "Input organization" />
                       		</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "PublicServiceAccomplishmentStartDateUpdate"> Start Date </label>
                            		<input type = "date" className = "form-control" name = "PublicServiceAccomplishmentStartDateUpdate" defaultValue = { currData.startDate } onChange = {(e) => handleInputChange("startDate", e)} />
                        	</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "PublicServiceAccomplishmentEndDateUpdate"> End Date </label>
                            		<input type = "date" className = "form-control" name = "PublicServiceAccomplishmentEndDateUpdate" defaultValue = { currData.endDate } onChange = {(e) => handleInputChange("endDate", e)} />
                        	</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group col-md-12">
                            		<label htmlFor = "PublicServiceAccomplishmentDescriptionUpdate"> Description </label>
                            		<input className = "form-control" type = "text" name = "PublicServiceAccomplishmentDescriptionUpdate" defaultValue = { currData.description } onChange = {(e) => handleInputChange("description", e)} placeholder = "Input description" />
                        	</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "PublicServiceAccomplishmentProofUpdate"> Proof </label>
                            		<input type = "file" className = "form-control-file" name = "PublicServiceAccomplishmentProofUpdate" defaultValue = { currData.proof } onChange = {(e) => handleInputChange("proof", e)} />
                        	</div>
                    	    </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick = {() => {
                            updatePublicService(currData, props.token)
                            Router.push('/faculty/accomplishment#public-service-accomplishment', '/')
                        }}>Save changes</button>
                    </div>
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
            			<button type="button" className="btn btn-danger" data-dismiss="modal" onClick = {() => {
                            deletePublicService(deletePS, props.token)
                            Router.push('/faculty/accomplishment#public-service-accomplishment', '/')
                        }}>Yes, delete</button>
                    </div>
                    </div>
                </div>
        
        </div>

            </div>
    )
}

export default PublicServiceAccomplishment
