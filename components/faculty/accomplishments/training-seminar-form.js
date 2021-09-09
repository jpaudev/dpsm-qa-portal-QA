import React from 'react'
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addTraining from '../../../services/faculty/accomplishments/addTraining'

class TrainingSeminarForm extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
        let TrainingDetails = {
            title: "",
            role: "",
            dateFrom: "",
            dateTo: "",
            venue: "",
            proof: ""
        }
		return(
            <Formik
                initialValues={TrainingDetails}
                onSubmit={async (values, {resetForm}) => {
                    let form = document.getElementById('tsForm')
                    let formData = new FormData(form)

                    let alert = document.getElementById("trainingseminaralert")
                    let res = await addTraining(formData, this.props.token)
                    if(res.success == true) { 
                        alert.className ="alert alert-success"
                        alert.style = "visibility: visible"
                        alert.innerHTML = res.message
                    } else {
                        alert.className = "alert alert-danger"
                        if(res.error) alert.innerHTML = res.error[0].message
                        else alert.innerHTML = res.message
                    }
                    $("#trainingseminaralert").fadeTo(5000, 500).slideUp(500, function(){
                        $("#trainingseminaralert").slideUp(500);
                    });

                    resetForm()
                    Router.push('/faculty/accomplishment')
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
        			<Form id = "tsForm">
                        <hr />
                        <br />
                        <div className = "form-row">
                            <div className = "form-group col-md-3">
                                <label htmlFor = "TrainingSeminar[]"> Name of Training/Seminar </label>
                                <Field className = "form-control" type = "text" name = "title" id = "title" placeholder = "Input training/seminar" />
                            </div>
                            <div className = "form-group col-md-3">
                                <label htmlFor = "TrainingSeminarRole[]"> Role</label>
                                <Field className = "form-control" type = "text" name = "role" id = "role" placeholder = "Input training/seminar" />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "TrainingSeminarVenue[]"> Venue </label>
                                <Field className = "form-control" type = "text" name = "venue" id = "venue" placeholder = "Input venue" />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "TrainingSeminarStartDate[]"> Start Date </label>
                                <Field type = "date" className = "form-control" name = "dateFrom" id = "dateFrom" />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "TrainingSeminarEndDate[]"> End Date </label>
                                <Field type = "date" className = "form-control" name = "dateTo" id = "dateTo" />
                            </div>
                            <div className = "form-group col-md-8">
                                <label htmlFor = "TrainingSeminarRemarks[]"> Remarks </label>
                                <Field className = "form-control" type = "text" name = "remarks" id = "remarks" placeholder = "Input remarks" />
                            </div>
                            <div className = "form-group col-md-4">
                                <label htmlFor = "TrainingSeminarProof[]"> Proof </label>
                                <Field type = "file" className = "form-control-file" name = "proof" id = "proof" />
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
            </Formik>                        
		)
	}
}

export default TrainingSeminarForm
