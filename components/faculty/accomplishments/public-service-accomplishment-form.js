import React from 'react'
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addPublicService from '../../../services/faculty/accomplishments/addPublicService'

class PublicServiceAccomplishmentForm extends React.Component{
    constructor(props){
        super(props)
    }
    
	render(){
        let PublicServiceDetails = {
            type: "",
            position: "",
            organization: "",
            description: "",
            startDate: "",
            endDate: "",
            proof: ""
        }

		return(
            <Formik
                initialValues={PublicServiceDetails}
                onSubmit={async (values, {resetForm}) => {
                    let form = document.getElementById('psForm')
                    let formData = new FormData(form)
                    let alert = document.getElementById("publicservicealert")
                    let res = await addPublicService(formData, this.props.token)
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

                    resetForm()
                    Router.push('/faculty/accomplishment')
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
                <Form id = "psForm">
                    <hr />
                    <br />
                    <div className = "form-row">
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServicePosition[]"> Position/Role </label>
                            <Field className = "form-control" type = "text" name = "position" id = "position" placeholder = "Input position/role" />
                        </div>
                    <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceOrganization[]"> Organization </label>
                            <Field className = "form-control" type = "text" name = "organization" id = "organization" placeholder = "Input organization" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentStartDate[]"> Start Date </label>
                            <Field type = "date" className = "form-control" name = "startDate" id = "startDate" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentEndDate[]"> End Date </label>
                            <Field type = "date" className = "form-control" name = "endDate" id = "endDate" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentProof[]"> Proof </label>
                            <Field type = "file" className = "form-control-file" name = "proof" id = "proof" />
                        </div>
                    </div>
                    <div className = "form-row">
                    <div className = "form-group col-md-4">
                        <label htmlFor = "PublicServiceAccomplishmentType[]"> Type of Contribution </label>
                        <Field as = "select" className = "form-control" name = "type" id = "type" required>
                            <option value = "Within UPM">Within UPM</option>
                            <option value = "Within Pro">Contribution to the Profession</option>
                            <option value = "Within Nat">Contribution to the Nation</option>
                            <option value = "Within Wor">Contribution to the World</option>
                        </Field>
                    </div>
                    <div className = "form-group col-md-6">
                            <label htmlFor = "PublicServiceAccomplishmentDescription[]"> Description </label>
                            <Field className = "form-control" type = "text" name = "description" id = "description" placeholder = "Input description" />
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
                    <hr />
                </Form>
                )}
            </Formik>
        )
    }
}

export default PublicServiceAccomplishmentForm
