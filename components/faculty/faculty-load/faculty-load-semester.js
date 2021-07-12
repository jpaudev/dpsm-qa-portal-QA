import Router from 'next/router'
import React from 'react'
import { Formik, Form, Field } from 'formik'

import updateFacultyLoad from '../../../services/admin/updateFacultyLoad'
import deleteFacultyLoad from '../../../services/admin/deleteFacultyLoad'

function FacultyLoadSemester(props) {
	let deleteClass = 0
	let editClass = 0
	function setDelete(id) {
        deleteClass = id
    }
    function setEdit(id) {
        editClass = id
    }
    function setKey(x) {
        Object.keys(props.records).map(key => {
            if(props.records[key].recordId == x) {
                setData(props.records[key])
            }
        });
    }
    let ctr = 0
    const [currData, setData] = React.useState({
        recordId: 0,
        subject: '',
        section: '',
        setResults: '',
        syllabus: ''
    })

	let content = Object.keys(props.records).map(key => {
		ctr++
		return (
			<tr key = {props.records[key].recordId}>
				<td>{props.records[key].subject}</td>
				<td>{props.records[key].section}</td>
				{props.facultyFlag && <td>
					{
						props.records[key].syllabus &&
                        <div className = "btn-grp">
                            <a
                                className ="btn btn-info"
                                href={"http://localhost:3001/" + props.records[key].syllabus}
                                style = {{ color: 'white' }}
                                target="_blank">
                                View
                            </a>
                            <a className="btn btn-warning" data-toggle="modal" data-target="#addSyllabus" onClick={() => {
	                        	setEdit(props.records[key].recordId)
	                            setKey(editClass)
	                        }}>Edit</a>
                        </div>
					}
					{
						!props.records[key].syllabus &&
						<a className="btn btn-warning" data-toggle="modal" data-target="#addSyllabus" onClick={() => {
                        	setEdit(props.records[key].recordId)
                            setKey(editClass)
                        }}>Add Syllabus</a>
					}
				</td>}
				{props.facultyFlag && <td>
					{
                        props.records[key].setResults &&
                        <div className = "btn-grp">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick = {() => {
                                    let file = props.records[key].setResults
                                    downloadProof(file, props.token)
                                }}
                            >
                                Download
                            </button>
                            <a
                                className ="btn btn-info"
                                href={"http://localhost:3001/" + props.records[key].setResults}
                                style = {{ color: 'white' }}
                                target="_blank">
                                Preview
                            </a>
                        </div>
                    }
                    { 
                        !props.records[key].setResults && 
                        <div>None</div>
                    }
				</td>}
				{props.clerkFlag && <td>
					{
                        props.records[key].setResults &&
                        <div className = "btn-grp">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick = {() => {
                                    let file = props.records[key].setResults
                                    downloadProof(file, props.token)
                                }}
                            >
                                Download
                            </button>
                            <a
                                className ="btn btn-info"
                                href={"http://localhost:3001/" + props.records[key].setResults}
                                style = {{ color: 'white' }}
                                target="_blank">
                                Preview
                            </a>
                        </div>
                    }
                    { 
                        !props.records[key].setResults && 
                        <div>None</div>
                    }
				</td>}
				{props.clerkFlag && <td>
					<div className = "btn-group">
                        <a className="btn btn-info" data-toggle="modal" data-target="#editClass" onClick={() => {
                        	setEdit(props.records[key].recordId)
                            setKey(editClass)
                        }}>Edit</a>
                        <a className="btn btn-danger" data-toggle="modal" data-target="#deleteClass" onClick={() => {
                            setDelete(props.records[key].recordId)
                        }}>Delete</a>
                    </div>
				</td>}
			</tr>
		)
	});
	return(
		<div>
			<table className = "table table-sm">
				<thead>
					<tr>
						<th>Subject</th>
						<th>Section</th>
						{!props.clerkFlag && <th>Syllabus</th>}
						<th>SET</th>
						{props.clerkFlag && <th>Action</th>}
					</tr>
				</thead>
				<tbody>
					{content}
				</tbody>
				{/*<tfoot>
					<tr>
						<td></td>
						<td></td>
						{!props.clerkFlag && <td></td>}
						<td></td>
						<th>Total Units: {ctr*3}</th>
					</tr>
				</tfoot>*/}
			</table>

			<div className="modal fade" id="editClass" tabIndex="-1" role="dialog" aria-labelledby="editClassLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editClassLabel">Update Class Record</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={currData}
                        onSubmit={async (values) => {
                            let alert = document.getElementById("loadalert")
                            
                            let form = document.getElementById('editClassForm')
                            let formData = new FormData(form)
                            formData.append('recordId', currData.recordId)
                            
                            let res = await updateFacultyLoad(formData, props.token, props.facultyId)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            
                            $("#loadalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#loadalert").slideUp(500);
                            });
                            Router.push('/admin/' + props.facultyId, '/admin/' + props.facultyId)
                        }}
                    >
                    {({ values, errors, touched, isSubmitting }) => (
                        <Form id = "editClassForm">
                            <div className="modal-body">
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "subject"> Subject </label>
                                        <Field className = "form-control" type = "text" name = "subject" placeholder = "Input subject" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "section"> Section </label>
                                        <Field className = "form-control" type = "text" name = "section" placeholder = "Input section" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "setResults"> Add SET Results </label>
                                        <Field type = "file" className = "form-control-file" name = "setResults" id = "setResults" value={undefined} />
                                        <Field type = "hidden" className = "form-control" name = "syllabus" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                    $('#editClass').modal('toggle');
                                }}>Save changes</button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="addSyllabus" tabIndex="-1" role="dialog" aria-labelledby="addSyllabusLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addSyllabusLabel">Update Class Records</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={currData}
                        onSubmit={async (values) => {
                            let alert = document.getElementById("loadalert")
                            
                            let form = document.getElementById('addSyllForm')
                            let formData = new FormData(form)
                            formData.append('recordId', currData.recordId)
                            
                            let res = await updateFacultyLoad(formData, props.token, props.facultyId)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            
                            $("#loadalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#loadalert").slideUp(500);
                            });
                            Router.push('/faculty/faculty-load', '/faculty/faculty-load')
                        }}
                    >
                    {({ values, errors, touched, isSubmitting }) => (
                        <Form id = "addSyllForm">
                            <div className="modal-body">
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "syllabus"> Add Syllabus </label>
                                        <Field type = "file" className = "form-control-file" name = "syllabus" id = "syllabus" value={undefined} />
                                        <Field type = "hidden" className = "form-control" name = "subject" />
                                        <Field type = "hidden" className = "form-control" name = "section" />
                                        <Field type = "hidden" className = "form-control" name = "setResults" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                    $('#addSyllabus').modal('toggle');
                                }}>Save changes</button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                    </div>
                </div>
            </div>

			<div className="modal fade" id="deleteClass" tabIndex="-1" role="dialog" aria-labelledby="deleteClassLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteClassLabel">Delete Class Record Information</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <hr />
                            <p> Are you sure you want to delete this class record? </p>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't delete</button>
                        <button type="button" className="btn btn-danger" onClick ={async () => {
                            let alert = document.getElementById("loadalert")
                            $('#deleteClass').modal('toggle');

                            let res = await deleteFacultyLoad(deleteClass, props.token, props.facultyId)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            
                            $("#loadalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#loadalert").slideUp(500);
                            });
                            Router.push('/admin/' + props.facultyId, '/admin/' + props.facultyId)
                        }}>Yes, delete</button>
                    </div>
                    </div>
                </div>
            </div>
		</div>
	)
}

export default FacultyLoadSemester
