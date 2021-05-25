import Link from 'next/link'
import PublicationForm from './publication-form'
import NameDisplay from '../../../components/name-display'
import Router from 'next/router'
import React from 'react'
import { Formik, Form, Field } from 'formik'

import downloadProof from '../../../services/faculty/downloadProof'
import deletePublication from '../../../services/faculty/accomplishments/deletePublication'
import updatePublication from '../../../services/faculty/accomplishments/updatePublication'

function Publication(props){  
    let content 
    let deletePub = 0
    let editPub = 0
    const [currData, setData] = React.useState({
        publicationId: 0,
        title: '',
        publicationDate:'',
        citation: '',
        url: '',
        nonFacultyAuthors: ''
    })
    if(props.children != null) {
        content = Object.keys(props.children).map(key => {
            let pub = props.children[key].faculty_publishers;
            return (
                <tr key = {props.children.[key].publicationId}>
                    <td>{props.children[key].title}</td>
                    <td>
                        {Object.keys(pub).map(auth => {
                            let link = "/faculty/basic-info/" + pub[auth].facultyId
                            return (
                                <a href = {link}>{pub[auth].faculty_personal_info.firstName + ' ' + pub[auth].faculty_personal_info.lastName + ', '}</a>
                            );
                        })}
                        {props.children[key].nonFacultyAuthors}
                    </td>
                    <td>{props.children[key].publicationDate}</td>
                    <td>{props.children[key].url}</td>
                    <td>{props.children[key].citation}</td>
                    <td>
                        {Object.keys(pub).map(auth => {
                            if(pub[auth].facultyId == props.facultyId) {
                                if(pub[auth].proof) {
                                    return (
                                        <div className = "btn-grp">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick = {() => {
                                                    let file = pub[auth].proof
                                                    downloadProof(file)
                                                }}
                                            >
                                                Download
                                            </button>
                                            <a
                                                className ="btn btn-info"
                                                href={"http://localhost:3001/" + pub[auth].proof}
                                                style = {{ color: 'white' }}
                                                target="_blank">
                                                Preview
                                            </a>
                                        </div>
                                    );
                                } else {
                                    return(<div>None</div>)
                                }
                            }
                        })}
                    </td>
                    <td>
                        {Object.keys(pub).map(auth => {
                            if(pub[auth].facultyId == props.facultyId) {
                                return (
                                    pub[auth].status
                                );
                            }
                        })}
                    </td>
                    <td>
                    {
                        props.facultyFlag && !props.viewFlag &&
                        <div className = "btn-group">
                            <a className="btn btn-info" data-toggle="modal" data-target="#editPublication" onClick={() => {
                                setEdit(props.children.[key].publicationId)
                                setKey(editPub)
                            }}>Edit</a>
                            <a className="btn btn-danger" data-toggle="modal" data-target="#deletePublication" onClick={() => {
                                setDelete(props.children.[key].publicationId)
                            }}>Delete</a>
                        </div>
                    }
                    {
                        !props.facultyFlag && !props.viewFlag &&
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
        });
    }
    else{
        content = <td colspan = "7"><p align = "center">No data available!</p></td>
    }

    function setEdit(id) {
        editPub = id
    }

    function setDelete(id) {
        deletePub = id
    }

    function setKey(x) {
        Object.keys(props.children).map(key => {
            if(props.children.[key].publicationId == x) {
                setData(props.children.[key])
            }
        });
    }

	return(
		<div>
            <h2 align = "center"> Publications </h2>
            <NameDisplay unit = {props.unit} position={props.position} employmentType={props.employmentType}>{props.name}</NameDisplay>
            <div className ="alert alert-success" role="alert" id="publicationalert" style={{visibility:"hidden"}}></div>
			<div>
	<table className = "table table-striped table-sm">
		<tbody>
			<tr>
				<th>Publication</th>
				<th>Author/s</th>
				<th>Publication Date</th>
				<th>URL</th>
				<th>Citation</th>
				<th>Proof</th>
				<th>Status</th>
                {!props.viewFlag && <th>Action</th>}
			</tr>
            {content}
		</tbody>
	</table>	
	</div>
    { 
        props.facultyFlag && 
        <div>
            <PublicationForm faculty = {props.faculty} token = {props.token} />
        </div>
    }

	       <div className="modal fade" id="editPublication" tabIndex="-1" role="dialog" aria-labelledby="editPublicationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editPublicationLabel">Update Publication Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={currData}
                        onSubmit={async (values) => {
                            let form = document.getElementById('editPubForm')
                            let formData = new FormData(form)
                            formData.append('publicationId', currData.publicationId)
                            let alert = document.getElementById("publicationalert")
                            let res = await updatePublication(formData, props.token)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            $("#publicationalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#publicationalert").slideUp(500);
                            });

                            Router.push('/faculty/accomplishment')
                        }}
                    >
                    {({ values, errors, touched, isSubmitting }) => (
                        <Form id = "editPubForm">
                            <div className="modal-body">
                                <hr />
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "PublicationUpdate"> Publication </label>
                                        <Field className = "form-control" type = "text" name = "title" placeholder = "Input publication name/title" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "PublicationCitationUpdate"> Citation </label>
                                        <Field className = "form-control" type = "text" name = "citation" placeholder = "Input full citation for publication" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "PublicationURLUpdate"> URL </label>
                                        <Field className = "form-control" type = "text" name = "url" placeholder = "Input publication URL" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "PublishDateUpdate"> Date Published </label>
                                        <Field type = "date" className = "form-control" name = "publicationDate" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "PublicationAuthorNonDPSMUpdate"> Authors (non-DPSM) </label>
                                        <Field className = "form-control" type = "text" name = "nonFacultyAuthors" placeholder = "Input all authors outside DPSM (separate names with commas)" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "PublicationAuthorDPSMUpdate"> Authors (DPSM) </label>
                                        <input className = "form-control" type = "text" name = "PublicationAuthorDPSMUpdate" placeholder = "Input author (must be part of DPSM)" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "PublicationProofUpdate"> Proof </label>
                                        <Field type = "file" className = "form-control-file" name = "proof" value={undefined} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                    $('#editPublication').modal('toggle');
                                }}>Save changes</button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="deletePublication" tabIndex="-1" role="dialog" aria-labelledby="deletePublicationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deletePublicationLabel">Delete Publication Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to delete this publication information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't delete</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick = {async () => {
                            $('#deletePublication').modal('toggle');
                            
                            let alert = document.getElementById("publicationalert")
                            let res = await deletePublication(deletePub, props.token)
                            console.log('res', res);
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) values.message = res.error[0].message
                                else values.message = res.message
                            }
                            
                            $("#publicationalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#publicationalert").slideUp(500);
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

export default Publication
