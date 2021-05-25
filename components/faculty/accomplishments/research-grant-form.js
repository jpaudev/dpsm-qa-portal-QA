import React from 'react'
import ResearchGrantFormAuthor from './research-grant-form-author'
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addResearch from '../../../services/faculty/accomplishments/addResearch'

class ResearchGrantForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			duplicateForms: []
		}
	}
	clone(){
		this.state.duplicateForms.push(<div><hr /><div className = "form-row">
			<div className = "form-group col-md-2">
				<label htmlFor = "Research[]"> Research Project </label>
				<input className = "form-control" type = "text" name = "Research[]" placeholder = "Input research name" />
			</div>
			<div className = "form-group col-md-2"> 
				<label htmlFor = "ResearchSponsor[]"> Sponsor </label>
				<input className = "form-control" type = "text" name = "ResearchSponsor[]" placeholder = "Input sponsor" />
			</div>
			<div className = "form-group col-md-2"> 
				<label htmlFor = "ResearchAmount[]"> Amount </label>
				<input className = "form-control" type = "text" name = "ResearchAmount[]" placeholder = "Input amount" />
			</div>
			<div className = "form-group col-md-2">
				<label htmlFor = "ResearchStartDate[]"> Start Date (Actual) </label>
				<input type = "date" className = "form-control" name = "ResearchStartDate[]" />
			</div>
			<div className = "form-group col-md-2">
				<label htmlFor = "ResearchEndDate[]"> End Date (Actual) </label>
				<input type = "date" className = "form-control" name = "ResearchEndDate[]" />
			</div>
			<div className = "form-group col-md-2">
                <label htmlFor = "ResearchProof[]"> Proof </label>
                <input type = "file" className = "form-control-file" name = "ResearchProof[]" />
            </div>
		</div>
		<div className = "form-row">
			<div className = "form-group col-md-12">
				<label htmlFor = "ResearchAuthorNonDPSM[]"> Researchers (non-DPSM) </label>
				<input className = "form-control" type = "text" name = "ResearchAuthorNonDPSM[]" placeholder = "Input all authors outside DPSM (separate names with commas)" />
			</div>
		</div>
		<div className = "form-row">
			<div className = "form-group col-md-2">
				<label htmlFor = "ResearchProjectedStartDate[]"> Start Date (Projected) </label>
				<input type = "date" className = "form-control" name = "ResearchProjectedStartDate[]" />
			</div>
			<div className = "form-group col-md-2">
				<label htmlFor = "ResearchProjectedEndDate[]"> End Date (Projected) </label>
				<input type = "date" className = "form-control" name = "ResearchProjectedEndDate[]" />
			</div>
			<div className = "form-group col-md-4"> 
				<label htmlFor = "ResearchProgress[]"> Research Progress </label>
				<select className = "form-control" name = "ResearchProgress[]" required>
					<option>Ongoing</option>
					<option>Completed</option>
				</select>
			</div>
		</div>
		<div>
			<ResearchGrantFormAuthor faculty = {this.props.faculty} />
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
		let ResearchDetails = {
			researchName: "",
			granter: "",
			amount: "",
			projectedStart: "",
			projectedEnd: "",
			actualStart: "",
			actualEnd: "",
			researchProgress: "",
			nonFacultyResearchers: ""
		}
		return(
			<Formik
				initialValues={ResearchDetails}
                onSubmit={async (values, {resetForm}) => {
                	let form = document.getElementById('resForm')
                	let formData = new FormData(form)

                	let alert = document.getElementById("researchalert")
					let res = await addResearch(formData, this.props.token)
					console.log('res', res);
					if(res.success == true) { 
						alert.className ="alert alert-success"
						alert.style = "visibility: visible"
						alert.innerHTML = res.message
					} else {
						alert.className = "alert alert-danger"
						if(res.error) values.message = res.error[0].message
						else values.message = res.message
					}
					
					$("#publicationalert").fadeTo(5000, 500).slideUp(500, function(){
						$("#publicationalert").slideUp(500);
					});

                	resetForm()
                	Router.push('/faculty/accomplishment')
                }}
			>
				{({ values, errors, touched, isSubmitting }) => (
					<Form id = "resForm">
						<div className = "form-row">
							<div className = "col-auto">
								<button type = "button" className = "btn btn-primary" id = "AddResearchGrant" onClick = {() => this.clone()}> Add Research </button>
							</div>
							<div className = "col-auto">
								<button type = "button" className = "btn btn-danger" id = "RemoveResearchGrant" onClick = {() => this.remove()}> Remove a Row </button>
							</div>
						</div>
						<br />
						<div className = "form-row">
							<div className = "form-group col-md-2">
								<label htmlFor = "Research[]"> Research Project </label>
								<Field className = "form-control" type = "text" name = "researchName" placeholder = "Input research name" />
							</div>
							<div className = "form-group col-md-2"> 
								<label htmlFor = "ResearchSponsor[]"> Sponsor </label>
								<Field className = "form-control" type = "text" name = "granter" placeholder = "Input sponsor" />
							</div>
							<div className = "form-group col-md-2"> 
								<label htmlFor = "ResearchAmount[]"> Amount </label>
								<Field className = "form-control" type = "text" name = "amount" placeholder = "Input amount" />
							</div>
							<div className = "form-group col-md-2">
								<label htmlFor = "ResearchStartDate[]"> Start Date (Actual) </label>
								<Field type = "date" className = "form-control" name = "actualStart" />
							</div>
							<div className = "form-group col-md-2">
								<label htmlFor = "ResearchEndDate[]"> End Date (Actual) </label>
								<Field type = "date" className = "form-control" name = "actualEnd" />
							</div>
							<div className = "form-group col-md-2">
	                            <label htmlFor = "ResearchProof[]"> Proof </label>
	                            <Field type = "file" className = "form-control-file" name = "proof" id = "proof" />
	                        </div>
						</div>
						<div className = "form-row">
							<div className = "form-group col-md-12">
								<label htmlFor = "ResearchAuthorNonDPSM[]"> Researchers (non-DPSM) </label>
								<Field className = "form-control" type = "text" name = "nonFacultyResearchers" placeholder = "Input all authors outside DPSM (separate names with commas)" />
							</div>
						</div>
						<div className = "form-row">
							<div className = "form-group col-md-2">
								<label htmlFor = "ResearchProjectedStartDate[]"> Start Date (Projected) </label>
								<Field type = "date" className = "form-control" name = "projectedStart" />
							</div>
							<div className = "form-group col-md-2">
								<label htmlFor = "ResearchProjectedEndDate[]"> End Date (Projected) </label>
								<Field type = "date" className = "form-control" name = "projectedEnd" />
							</div>
							<div className = "form-group col-md-4"> 
								<label htmlFor = "ResearchProgress[]"> Research Progress </label>
								<Field as = "select" className = "form-control" name = "researchProgress" required>
	                                <option value = "Ongoing">Ongoing</option>
	                                <option value = "Completed">Completed</option>
	                            </Field>
							</div>
						</div>
						<div>
							<ResearchGrantFormAuthor faculty = {this.props.faculty} />
						</div>
						<div id = "Research">
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
					</Form>
				)}
			</Formik>
		)
	}
}

export default ResearchGrantForm
