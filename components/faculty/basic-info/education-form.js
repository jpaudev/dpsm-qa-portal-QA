import React from 'react'
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addEducation from '../../../services/faculty/basic-info/addEducation'

class EducationForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            duplicateForms: []
        }
    }

    clone(){
        this.state.duplicateForms.push(<div><hr />
            <div className = "form-row">
                <div className = "form-group col-md-2">
                    <label htmlFor = "SchoolEducationalHistory[]"> School/Institution </label>
                    <input className = "form-control" type = "text" name = "SchoolEducationalHistory[]" placeholder = "Input school" />
                </div>
                <div className = "form-group col-md-4">
                    <label htmlFor = "DegreeEducationalHistory[]"> Degree/Certification </label>
                    <input className = "form-control" type = "text" name = "DegreeEducationalHistory[]" placeholder = "Input degree" />
                </div>
                <div className = "form-group col-md-4">
                    <label htmlFor = "MajorEducationalHistory[]"> Major/Specialization </label>
                    <input className = "form-control" type = "text" name = "MajorEducationalHistory[]" placeholder = "Input major" />
                </div>
                <div className = "form-group col-md-2 required">
                    <label className = "control-label" htmlFor ="DegreeType"> Degree Type </label>
                    <select className = "form-control" name = "DegreeType" required>
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
                <div className = "form-group col-md-2">
                    <label htmlFor = "StartDateEducationalHistory[]"> Start Date </label>
                    <input type = "date" className = "form-control" name = "StartDateEducationalHistory[]" />
                </div>
                <div className = "form-group col-md-2">
                    <label htmlFor = "EndDateEducationalHistory[]"> End Date </label>
                    <input type = "date" className = "form-control" name = "EndDateEducationalHistory[]" />
                </div>
                <div className = "form-group col-md-2">
                    <label htmlFor = "ProofEducationalHistory[]"> Proof </label>
                    <input type = "file" className = "form-control-file" name = "ProofEducationalHistory[]" />
                </div>
            </div>
            <style jsx>{`
            hr{
                border: 1px solid black;
            }
        `}</style>
            </div>)
        this.setState({
            
        })
    }
    remove(){
        this.state.duplicateForms.pop()
        this.setState({
            
        })
    }
    render(){
        let EducationDetails = {
            institutionSchool: "",
            degreeType: "",
            degreeCert: "",
            majorSpecialization: "",
            startDate: "",
            endDate: "",
            proof: ""
        }

        return(
            <Formik
                initialValues={EducationDetails}
                onSubmit={async (values, {resetForm}) => {
                    let form = document.getElementById('educForm')
                    let formData = new FormData(form)
                    await addEducation(formData, this.props.token)
                    resetForm()
                    Router.push('/faculty/basic-info#educ', '/')
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form id = "educForm">
                        <hr />
                        <div className = "form-row">
                            <div className = "col-auto">
                                <button type = "button" className = "btn btn-primary" id = "AddEducationalHistory" onClick = {() => this.clone()}> Add Educational History </button>
                            </div>
                            <div className = "col-auto">
                                <button type = "button" className = "btn btn-danger" id = "RemoveEducationalHistory" onClick = {() => this.remove()}> Remove a Row </button>
                            </div>
                        </div>
                        <br />
                        <div className = "form-row">
                            <div className = "form-group col-md-2">
                                <label htmlFor = "SchoolEducationalHistory[]"> School/Institution </label>
                                <Field className = "form-control" type = "text" name = "institutionSchool" id ="institutionSchool" placeholder = "Input school" />
                            </div>
                            <div className = "form-group col-md-4">
                                <label htmlFor = "DegreeEducationalHistory[]"> Degree/Certification </label>
                                <Field className = "form-control" type = "text" name = "degreeCert" id = "degreeCert" placeholder = "Input degree" />
                            </div>

                            <div className = "form-group col-md-4">
                                <label htmlFor = "MajorEducationalHistory[]"> Major/Specialization </label>
                                <Field className = "form-control" type = "text" name = "majorSpecialization" id = "majorSpecialization" placeholder = "Input major" />
                            </div>
                            <div className = "form-group col-md-2 required">
                                <label className = "control-label" htmlFor ="DegreeType"> Degree Type </label>
                                    <Field as = "select" className = "form-control" name = "degreeType" id = "degreeType" required>
                                        <option value = "AA">AA</option>
                                        <option value = "AS">AS</option>
                                        <option value = "BA">BA</option>
                                        <option value = "BS">BS</option>
                                        <option value = "MA">MA</option>
                                        <option value = "MS">MS</option>
                                        <option value = "MD">MD</option>
                                        <option value = "PhD">PhD</option>
                                    </Field>
                            </div>
                            </div>
                            <div className = "form-row">
                            <div className = "form-group col-md-2">
                                <label htmlFor = "StartDateEducationalHistory[]"> Start Date </label>
                                <Field type = "date" className = "form-control" name = "startDate" id = "startDate" />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "EndDateEducationalHistory[]"> End Date </label>
                                <Field type = "date" className = "form-control" name = "endDate" id = "endDate" />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "ProofEducationalHistory[]"> Proof </label>
                                <Field type = "file" className = "form-control-file" name = "proof" id = "proof" />
                            </div>
                        </div>
                        <div id = "EducationalHistory">
                            {this.state.duplicateForms}
                        </div>
                        <br />
                        <button
                            type = "submit"
                            className = "btn btn-primary"
                            disabled = {isSubmitting}
                        >
                            Submit
                        </button>
                        <hr />
                    </Form>
                )}
            </Formik>
        )
    }
}

export default EducationForm
