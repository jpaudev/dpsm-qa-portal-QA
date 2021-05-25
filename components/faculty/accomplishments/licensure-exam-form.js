import React from 'react'
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addLicensure from '../../../services/faculty/accomplishments/addLicensure'

class LicensureExamForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			duplicateForms: []
		}
	}
	
	render(){
        let LicensureDetails = {
            examName: "",
            examDate: "",
            licenseNumber: "",
            rank: "",
            proof: ""
        }
		return(
            <Formik
                initialValues={LicensureDetails}
                onSubmit={async (values, {resetForm}) => {
                    let form = document.getElementById('licenseForm')
                    let formData = new FormData(form)

                    let alert = document.getElementById("licensureexamalert")
                    let res = await addLicensure(formData, this.props.token)
                    if(res.success == true) { 
                        alert.className ="alert alert-success"
                        alert.style = "visibility: visible"
                        alert.innerHTML = res.message
                    } else {
                        alert.className = "alert alert-danger"
                        if(res.error) alert.innerHTML = res.error[0].message
                        else alert.innerHTML = res.message
                    }
                    $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function(){
                        $("#licensureexamalert").slideUp(500);
                    });

                    resetForm()
                    Router.push('/faculty/accomplishment')                    
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form id = "licenseForm">
                        <hr />
                        <br />
                        <div className = "form-row">
                            <div className = "form-group col-md-2">
                                <label htmlFor = "LicensureExam[]"> Licensure Exam </label>
                                <Field className = "form-control" type = "text" name = "examName" placeholder = "Input licensure exam" />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "LicensureExamDate[]"> Date </label>
                                <Field type = "date" className = "form-control" name = "examDate" />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "LicensureExamRank[]"> Rank </label>
                                <Field className = "form-control" type = "text" name = "rank" placeholder = "Input rank" />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "LicenseNumber[]"> License Number </label>
                                <Field className = "form-control" type = "text" name = "licenseNumber" placeholder = "Input licensure number" />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "LicensureExamProof[]"> Proof </label>
                                <Field type = "file" className = "form-control-file" name = "proof" />
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

export default LicensureExamForm
