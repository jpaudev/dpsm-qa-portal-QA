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
			<h6>Required</h6>
                        <div className = "form-row">
                            <div className = "form-group col-md-2">
                                <label htmlFor = "LicensureExam[]" className = "required-label"> Licensure Exam </label>
                                <Field className = "form-control" type = "text" name = "examName" placeholder = "Input licensure exam" required />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "LicensureExamDate[]" className = "required-label"> Date </label>
                                <Field type = "date" className = "form-control" name = "examDate" required />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "LicensureExamRank[]"> Rank </label>
                                <Field className = "form-control" type = "text" name = "rank" placeholder = "Input rank" />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "LicenseNumber[]" className = "required-label"> License Number </label>
                                <Field className = "form-control" type = "text" name = "licenseNumber" placeholder = "Input licensure number" required />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "LicensureExamProof[]" className = "required-label"> Proof </label>
                                <Field type = "file" className = "form-control-file" name = "proof" required />
                            </div>
                        </div>
                        <br />
                        <button
                            type = "submit"
                            className = "btn btn-primary col-md-12"
                            disabled = {isSubmitting}
                        >
                            Submit
                        </button>
                    </Form>
                )}
		<style jsx>{`
		label.required-label:after{
			content: "*";
			color: #f00;
		}
		h6:before{
			content: "* ";
			color: #f00;
		}
	`}</style>
            </Formik>
		)
	}
}

export default LicensureExamForm
