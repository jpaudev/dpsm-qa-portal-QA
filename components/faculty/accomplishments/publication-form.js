import React from 'react'
import PublicationFormAuthor from './publication-form-author'
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addPublication from '../../../services/faculty/accomplishments/addPublication'

class PublicationForm extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		let PublicationDetails = {
			title: "",
			citation: "",
			url: "",
			publicationDate: "",
			nonFacultyAuthors: ""
		}
		return(
			<Formik
				initialValues={PublicationDetails}
                onSubmit={async (values, {resetForm}) => {
                	let form = document.getElementById('pubForm')
                	let formData = new FormData(form)

					let alert = document.getElementById("publicationalert")
					let res = await addPublication(formData, this.props.token)
					
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
					<Form id = "pubForm">
						<hr />
						<br />
						<h6>Required</h6>
						<div className = "form-row">
							<div className = "form-group col-md-6">
								<label htmlFor = "Publication[]" className = "required-label"> Publication </label>
								<Field className = "form-control" type = "text" name = "title" placeholder = "Input publication name/title" required />
							</div>
							<div className = "form-group col-md-6">
								<label htmlFor = "PublicationCitation[]" className = "required-label"> Citation </label>
								<Field className = "form-control" type = "text" name = "citation" placeholder = "Input full citation for publication" required />
							</div>
						</div>
						<div className = "form-row">
							<div className = "form-group col-md-3"> 
								<label htmlFor = "PublicationURL[]"> URL </label>
								<Field className = "form-control" type = "text" name = "url" placeholder = "Input publication URL" />
							</div>
							<div className = "form-group col-md-3">
								<label htmlFor = "PublishDate[]" className = "required-label"> Date Published </label>
								<Field type = "date" className = "form-control" name = "publicationDate" required />
							</div>
							<div className = "form-group col-md-3">
	                            <label htmlFor = "PublicationProof[]" className = "required-label"> Proof </label>
	                            <Field type = "file" className = "form-control-file" name = "proof" id = "proof" required />
	                        </div>
						</div>
						<div className = "form-row">
							<div className = "form-group col-md-12">
								<label htmlFor = "PublicationAuthorNonDPSM[]"> Authors (non-DPSM) </label>
								<Field className = "form-control" type = "text" name = "nonFacultyAuthors" placeholder = "Input all authors outside DPSM (separate names with commas)" />
							</div>
						</div>
						<div>
							<PublicationFormAuthor faculty = {this.props.faculty} />
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

export default PublicationForm
