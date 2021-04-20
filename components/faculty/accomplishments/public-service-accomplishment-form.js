import React from 'react'
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addPublicService from '../../../services/faculty/accomplishments/addPublicService'

class PublicServiceAccomplishmentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            duplicateForms: []
        }
    }
    clone(){
        this.state.duplicateForms.push(<div><hr /><div className = "form-row">
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServicePosition[]"> Position/Role </label>
                            <input className = "form-control" type = "text" name = "PublicServicePosition[]" placeholder = "Input position/role" />
                        </div>
			<div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceOrganization[]"> Organization </label>
                            <input className = "form-control" type = "text" name = "PublicServiceOrganization[]" placeholder = "Input organization" />
                        </div>
			<div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentStartDate[]"> Start Date </label>
                            <input type = "date" className = "form-control" name = "PublicServiceAccomplishmentStartDate[]" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentEndDate[]"> End Date </label>
                            <input type = "date" className = "form-control" name = "PublicServiceAccomplishmentEndDate[]" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentProof[]"> Proof </label>
                            <input type = "file" className = "form-control-file" name = "PublicServiceAccomplishmentProof[]" />
                        </div>
                    </div>
                    <div className = "form-row">
            <div className = "form-group col-md-4">
                            <label htmlFor = "PublicServiceAccomplishmentType[]"> Type of Contribution </label>
                            <select className = "form-control" name = "PublicServiceAccomplishmentType" required>
                    <option>Within UPM</option>
                    <option>Contribution to Profession</option>
                    <option>Contribution to Nation</option>
                    <option>Contribution to the World</option>
                </select>
                        </div>
			<div className = "form-group col-md-6">
                            <label htmlFor = "PublicServiceAccomplishmentDescription[]"> Description </label>
                            <input className = "form-control" type = "text" name = "PublicServiceAccomplishmentDescription[]" placeholder = "Input description" />
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
                    await addPublicService(formData, this.props.token)
                    resetForm()
                    Router.push('/faculty/accomplishment#public-service-accomplishment', '/')
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
                <Form id = "psForm">
                    <hr />
                    <div className = "form-row">
                        <div className = "col-auto">
                            <button type = "button" className = "btn btn-primary" id = "AddAccomplishment" onClick = {() => this.clone()}> Add Accomplishment </button>
                        </div>
                        <div className = "col-auto">
                            <button type = "button" className = "btn btn-danger" id = "RemoveAccomplishment" onClick = {() => this.remove()}> Remove a Row </button>
                        </div>
                    </div>
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
                    <div id = "PublicServiceAccomplishment">
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

export default PublicServiceAccomplishmentForm
