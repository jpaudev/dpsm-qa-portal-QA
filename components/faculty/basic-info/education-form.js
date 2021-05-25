import React from 'react'
import { Formik, Form, Field } from 'formik'
import Router from 'next/router'

import addEducation from '../../../services/faculty/basic-info/addEducation'

class EducationForm extends React.Component{
    constructor(props){
        super(props)
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
                    let alert = document.getElementById("educalert")

                    let form = document.getElementById('educForm')
                    let formData = new FormData(form)

                    let res = await addEducation(formData, this.props.token)
                    if(res.success == true) { 
                        alert.className ="alert alert-success"
                        alert.style = "visibility: visible"
                        alert.innerHTML = res.message
                    } else {
                        alert.className = "alert alert-danger"
                        if(res.error) alert.innerHTML = res.error[0].message
                        else alert.innerHTML = res.message
                    }
                    
                    alert.setAttribute("style", "visibility: visible");
                    $("#educalert").fadeTo(5000, 500).slideUp(500, function(){
                        $("#educalert").slideUp(500);
                    });

                    resetForm()
                    Router.push('/faculty/basic-info')
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form id = "educForm">
                        <hr />
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
                        <br />
                        <button
                            type = "submit"
                            className = "btn btn-primary"
                            disabled = {isSubmitting}
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        )
    }
}

export default EducationForm