import NameDisplay from '../../../components/name-display'
import React from 'react'
import { Formik, Form, Field } from 'formik'
import Router from 'next/router'

import FacultyLoadForm from './faculty-load-form'
import updateFacultyLoad from '../../../services/admin/updateFacultyLoad'
import deleteFacultyLoad from '../../../services/admin/deleteFacultyLoad'

function FacultyLoadTable(props) {
    let year = []
    let currYear = new Date().getFullYear()
    for(let i = currYear; i >= 1970; i--) {
        year.push(i)
    }
    
    let options = Object.keys(year).map((i) => {
        return(
            <option value={year[i]}>{year[i]-1}-{year[i]}</option>
        )
    })

    let deleteClass = 0
    let editClass = 0

    const [currData, setData] = React.useState({
        recordId: 0,
        subject: '',
        section: '',
        semester: '',
        academicYear: '',
        syllabus: ''
    })
    const name = props.name
    let content 

    if(props.children != null) {
        content = Object.keys(props.children).map(key => {
            if(props.children[key].recordId != null) {
                return (
                    <tr key = {props.children[key].recordId}>
                    <td>{props.children[key].subject}</td>
                    <td>{props.children[key].section}</td>
                    <td>{props.children[key].semester}</td>
                    <td>{props.children[key].academicYear - 1 + ' - ' + props.children[key].academicYear}</td>
                    <td>
                        {
                            props.children[key].syllabus &&
                            <div className = "btn-grp">
                                <a
                                    className ="btn btn-info"
                                    href={process.env.UPLOADS_URL + props.children[key].syllabus}
                                    style = {{ color: 'white' }}
                                    target="_blank">
                                    View
                                </a>
                                {(props.editClass) && 
                                    <a className="btn btn-warning" data-toggle="modal" data-target="#addSyllabus" onClick={() => {
                                        setEdit(props.children[key].recordId)
                                        setKey(editClass)
                                    }}>Edit</a>
                                }
                            </div>
                        }
                        {
                            (props.editClass) && !props.children[key].syllabus &&
                            <a className="btn btn-warning" data-toggle="modal" data-target="#addSyllabus" onClick={() => {
                                setEdit(props.children[key].recordId)
                                setKey(editClass)
                            }}>Add Syllabus</a>
                        }
                        {
                            !props.editClass && !props.children[key].syllabus &&
                            <div>None</div>
                        }
                    </td>
                    {props.role==5 && <td>
                        <div className = "btn-group">
                            <a className="btn btn-info" data-toggle="modal" data-target="#editClass" onClick={() => {
                                setEdit(props.children[key].recordId)
                                setKey(editClass)
                            }}>Edit</a>
                            <a className="btn btn-danger" data-toggle="modal" data-target="#deleteClass" onClick={() => {
                                setDelete(props.children[key].recordId)
                            }}>Delete</a>
                        </div>
                    </td>}
                </tr>
                );
            }
        })
    }
    else{
        content = <td colSpan = "7"><p align = "center">No data available!</p></td>
    }

    function setEdit(id) {
        editClass = id
    }

    function setDelete(id) {
        deleteClass = id
    }

    function setKey(x) {
        Object.keys(props.children).map(key => {
            if(props.children[key].recordId == x) {
                setData(props.children[key])
                if(props.children[key].syllabus) {
                    setData(currData => ({...currData, syllabus: props.children[key].syllabus}))
                } else {
                    setData(currData => ({...currData, syllabus: 'None'}))
                }
            }
        });
    }

    return (
        <div>
            <h2 align = "center"> Faculty Load </h2>
            <NameDisplay unit = {props.unit} position={props.position}>{props.name}</NameDisplay>
            <div role="alert" id="loadalert" style={{visibility:"hidden"}}></div>
            <div className = "table-responsive">
                <table className = "table table-striped table-sm">
                    <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Section</th>
                        <th>Semester</th>
                        <th>Academic Year</th>
                        <th>Syllabus</th>
                        {props.role==5 && <th>Action</th>}
                    </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>

            { props.role==5 && 
                <div>
                    <FacultyLoadForm token = { props.token } facultyId = { props.facultyId } role={ props.role } />
                </div>   
            }
	
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
                            let form = document.getElementById('editClassForm')
                            let formData = new FormData(form)
                            formData.append('recordId', currData.recordId)

                            let alert = document.getElementById("loadalert")
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
                                <hr />
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "subject"> Subject </label>
                                        <Field className = "form-control" type = "text" name = "subject" id = "subject" placeholder = "Input subject" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "section"> Section </label>
                                        <Field className = "form-control" type = "text" name = "section" id= "section" placeholder = "Input section" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "semester"> Semester </label>
                                        <Field as = "select" className = "form-control" name = "semester" id = "semester" required>
                                            <option value = "1st">1st Semester</option>
                                            <option value = "2nd">2nd Semester</option>
                                            <option value = "Midyear">Mid-Year</option>
                                        </Field>
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "Year"> Academic Year </label>
                                        <Field as = "select" className = "form-control" name = "academicYear" id = "academicYear" required>
                                            {options}
                                        </Field>
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
        
            <div className="modal fade" id="deleteClass" tabIndex="-1" role="dialog" aria-labelledby="deleteClassLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteClassLabel">Delete Class Record</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <hr />
                            <p> Are you sure you want to delete this faculty load information? </p>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't delete</button>
                        <button type="button" className="btn btn-danger" onClick = {async () => {
                            let alert = document.getElementById("loadalert")
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
                            
                            console.log(props)
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
                                        <label htmlFor = "syllabus"> Add/Edit Syllabus [Uploaded: {currData.syllabus}] </label>
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

        </div>


    )
  }
  
  export default FacultyLoadTable
