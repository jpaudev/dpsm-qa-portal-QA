import React from 'react'
import { Formik, Form, Field } from "formik"

import addTraining from '../../../services/faculty/accomplishments/addTraining'

class TrainingSeminarForm extends React.Component{
	constructor(){
		super()
		this.state = {
			duplicateForms: []
		}
	}
	clone(){
		this.state.duplicateForms.push(<div><hr /><div className = "form-row">
			<div className = "form-group col-md-3">
                <label htmlFor = "TrainingSeminar[]"> Name of Training/Seminar </label>
                <input className = "form-control" type = "text" name = "TrainingSeminar[]" placeholder = "Input training/seminar" />
            </div>
			<div className = "form-group col-md-3">
                <label htmlFor = "TrainingSeminarRole[]"> Role</label>
                <input className = "form-control" type = "text" name = "TrainingSeminarRole[]" placeholder = "Input training/seminar" />
            </div>
			<div className = "form-group col-md-3">
                <label htmlFor = "TrainingSeminarVenue[]"> Venue </label>
                <input className = "form-control" type = "text" name = "TrainingSeminarVenue[]" placeholder = "Input venue" />
            </div>
			<div className = "form-group col-md-2">
                <label htmlFor = "TrainingSeminarStartDate[]"> Start Date </label>
                <input type = "date" className = "form-control" name = "TrainingSeminarStartDate[]" />
            </div>
			<div className = "form-group col-md-2">
                <label htmlFor = "TrainingSeminarEndDate[]"> End Date </label>
                <input type = "date" className = "form-control" name = "TrainingSeminarEndDate[]" />
            </div>
            <div className = "form-group col-md-8">
                <label htmlFor = "TrainingSeminarRemarks[]"> Remarks </label>
                <input className = "form-control" type = "text" name = "TrainingSeminarRemarks[]" placeholder = "Input remarks" />
            </div>
			<div className = "form-group col-md-2">
                    <label htmlFor = "TrainingSeminarProof[]"> Proof </label>
                    <input type = "file" className = "form-control-file" name = "TrainingSeminarProof[]" />
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
                onSubmit={async (values) => {await addTraining(values)}}
            >
                {({ values, errors, touched, isSubmitting }) => (
        			<Form>
                        <hr />
                        <div className = "form-row">
                            <div className = "col-auto">
                                <button type = "button" className = "btn btn-primary" id = "AddAccomplishment" onClick = {() => this.clone()}> Add Training/Seminar </button>
                            </div>
                            <div className = "col-auto">
                                <button type = "button" className = "btn btn-danger" id = "RemoveAccomplishment" onClick = {() => this.remove()}> Remove a Row </button>
                            </div>
                        </div>
                        <br />
                        <div className = "form-row">
                            <div className = "form-group col-md-3">
                                <label htmlFor = "TrainingSeminar[]"> Name of Training/Seminar </label>
                                <Field className = "form-control" type = "text" name = "title" placeholder = "Input training/seminar" />
                            </div>
                            <div className = "form-group col-md-3">
                                <label htmlFor = "TrainingSeminarRole[]"> Role</label>
                                <Field className = "form-control" type = "text" name = "role" placeholder = "Input training/seminar" />
                            </div>
                            <div className = "form-group col-md-3">
                                <label htmlFor = "TrainingSeminarVenue[]"> Venue </label>
                                <Field className = "form-control" type = "text" name = "venue" placeholder = "Input venue" />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "TrainingSeminarStartDate[]"> Start Date </label>
                                <Field type = "date" className = "form-control" name = "dateFrom" />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "TrainingSeminarEndDate[]"> End Date </label>
                                <Field type = "date" className = "form-control" name = "dateTo" />
                            </div>
                            <div className = "form-group col-md-8">
                                <label htmlFor = "TrainingSeminarRemarks[]"> Venue </label>
                                <Field className = "form-control" type = "text" name = "venue" placeholder = "Input remarks" />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "TrainingSeminarProof[]"> Proof </label>
                                <Field type = "file" className = "form-control-file" name = "proof" />
                            </div>
                        </div>
                        <div id = "TrainingSeminar">
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

export default TrainingSeminarForm
