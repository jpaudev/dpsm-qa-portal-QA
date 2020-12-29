import React from 'react'
import PublicationFormAuthor from './publication-form-author'
import { Formik, Form, Field } from "formik"

import addPublication from '../../../services/faculty/accomplishments/addPublication'

class PublicationForm extends React.Component{
	constructor(){
		super()
		this.state = {
			duplicateForms: []
		}
	}
	clone(){
		this.state.duplicateForms.push(<div><hr /><div className = "form-row">
			<div className = "col-auto">
				<button type = "button" className = "btn btn-primary" id = "AddPublication" onClick = {() => this.clone()}> Add Publication </button>
			</div>
			<div className = "col-auto">
				<button type = "button" className = "btn btn-danger" id = "RemovePublication" onClick = {() => this.remove()}> Remove a Row </button>
			</div>
		</div>
		<br />
		<div className = "form-row">
			<div className = "form-group col-md-6">
				<label htmlFor = "Publication[]"> Publication </label>
				<input className = "form-control" type = "text" name = "Publication[]" placeholder = "Input publication name/title" />
			</div>
			<div className = "form-group col-md-6">
				<label htmlFor = "PublicationCitation[]"> Citation </label>
				<input className = "form-control" type = "text" name = "PublicationCitation[]" placeholder = "Input full citation for publication" />
			</div>
		</div>
		<div className = "form-row">
			<div className = "form-group col-md-6"> 
				<label htmlFor = "PublicationURL[]"> URL </label>
				<input className = "form-control" type = "text" name = "PublicationURL[]" placeholder = "Input publication URL" />
			</div>
			<div className = "form-group col-md-3">
				<label htmlFor = "PublishDate[]"> Date Published </label>
				<input type = "date" className = "form-control" name = "PublishDate[]" />
			</div>
			<div className = "form-group col-md-3">
                            <label htmlFor = "PublicationProof[]"> Proof </label>
                            <input type = "file" className = "form-control-file" name = "PublicationProof[]" />
                        </div>
		</div>
		<div className = "form-row">
			<div className = "form-group col-md-12">
				<label htmlFor = "PublicationAuthorNonDPSM[]"> Authors (non-DPSM) </label>
				<input className = "form-control" type = "text" name = "PublicationAuthorNonDPSM[]" placeholder = "Input all authors outside DPSM (separate names with commas)" />
			</div>
		</div>
		<div>
				<PublicationFormAuthor />
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
		let PublicationDetails = {
			title: "",
			journal: "",
			url: "",
			publicationDate: "",
			nonFacultyAuthors: ""
		}
		return(
			<Formik
				initialValues={PublicationDetails}
                onSubmit={async (values) => {await addPublication(values)}}
			>
				{({ values, errors, touched, isSubmitting }) => (
					<Form>
						<h5> Publications </h5>
						<hr />
						<div className = "form-row">
							<div className = "col-auto">
								<button type = "button" className = "btn btn-primary" id = "AddPublication" onClick = {() => this.clone()}> Add Publication </button>
							</div>
							<div className = "col-auto">
								<button type = "button" className = "btn btn-danger" id = "RemovePublication" onClick = {() => this.remove()}> Remove a Row </button>
							</div>
						</div>
						<br />
						<div className = "form-row">
							<div className = "form-group col-md-6">
								<label htmlFor = "Publication[]"> Publication </label>
								<Field className = "form-control" type = "text" name = "title" placeholder = "Input publication name/title" />
							</div>
							<div className = "form-group col-md-6">
								<label htmlFor = "PublicationCitation[]"> Citation </label>
								<Field className = "form-control" type = "text" name = "journal" placeholder = "Input full citation for publication" />
							</div>
						</div>
						<div className = "form-row">
							<div className = "form-group col-md-6"> 
								<label htmlFor = "PublicationURL[]"> URL </label>
								<Field className = "form-control" type = "text" name = "url" placeholder = "Input publication URL" />
							</div>
							<div className = "form-group col-md-3">
								<label htmlFor = "PublishDate[]"> Date Published </label>
								<Field type = "date" className = "form-control" name = "publicationDate" />
							</div>
							<div className = "form-group col-md-3">
				                            <label htmlFor = "PublicationProof[]"> Proof </label>
				                            <input type = "file" className = "form-control-file" name = "PublicationProof[]" />
				                        </div>
						</div>
						<div className = "form-row">
							<div className = "form-group col-md-12">
								<label htmlFor = "PublicationAuthorNonDPSM[]"> Authors (non-DPSM) </label>
								<Field className = "form-control" type = "text" name = "nonFacultyAuthors" placeholder = "Input all authors outside DPSM (separate names with commas)" />
							</div>
						</div>
						<div>
								<PublicationFormAuthor />
							</div>
						<div id = "Publication">
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

export default PublicationForm
