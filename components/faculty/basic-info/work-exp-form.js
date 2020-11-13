import React from 'react';

class WorkExpForm extends React.Component{
	constructor(){
		super()
		this.state = {
			duplicateForms: []
		}
	}

	clone(){
		this.state.duplicateForms.push(<div><div className = "form-row">
				<div className = "form-group col-md-3">
					<label htmlFor = "EmployerWorkExperience[]"> Employer </label>
					<input className = "form-control" type = "text" name = "EmployerWorkExperience[]" placeholder = "Input name of employer" />
				</div>
				<div className = "form-group col-md-3">
					<label htmlFor = "PositionWorkExperience[]"> Title/Position </label>
					<input className = "form-control" type = "text" name = "PositionWorkExperience[]" placeholder = "Input position" />
				</div>
				<div className = "form-group col-md-3">
					<label htmlFor = "StartDateWorkExperience[]"> Start Date </label>
					<input type = "date" className = "form-control" name = "StartDateWorkExperience[]" />
				</div>
				<div className = "form-group col-md-3">
					<label htmlFor = "EndDateWorkExperience[]"> End Date </label>
					<input type = "date" className = "form-control" name = "EndDateWorkExperience[]" />
				</div>
			</div>
			<div className = "form-group">
				<label htmlFor = "DescriptionWorkExperience[]"> Description </label>
				<input className = "form-control" type = "text" name = "DescriptionWorkExperience[]" placeholder = "Add Description" />
			</div></div>)
		this.setState({
			
		})
	}
	remove(){
		this.state.duplicateForms.pop()
		this.setState({
			
		})
	}

	render(){
		return(
			<form>
			<hr />
			<div className = "form-row">
				<div className = "col-auto">
					<button type = "button" className = "btn btn-primary" id = "AddWorkExperience" onClick = {() => this.clone()}> Add Work Experience </button>
				</div>
				<div className = "col-auto">
					<button type = "button" className = "btn btn-danger" id = "RemoveWorkExperience" onClick = {() => this.remove()}> Remove a Row </button>
				</div>
			</div>
			<br />
			<div className = "form-row">
				<div className = "form-group col-md-3">
					<label htmlFor = "EmployerWorkExperience[]"> Employer </label>
					<input className = "form-control" type = "text" name = "EmployerWorkExperience[]" placeholder = "Input name of employer" />
				</div>
				<div className = "form-group col-md-3">
					<label htmlFor = "PositionWorkExperience[]"> Title/Position </label>
					<input className = "form-control" type = "text" name = "PositionWorkExperience[]" placeholder = "Input position" />
				</div>
				<div className = "form-group col-md-3">
					<label htmlFor = "StartDateWorkExperience[]"> Start Date </label>
					<input type = "date" className = "form-control" name = "StartDateWorkExperience[]" />
				</div>
				<div className = "form-group col-md-3">
					<label htmlFor = "EndDateWorkExperience[]"> End Date </label>
					<input type = "date" className = "form-control" name = "EndDateWorkExperience[]" />
				</div>
			</div>
			<div className = "form-group">
				<label htmlFor = "DescriptionWorkExperience[]"> Description </label>
				<input className = "form-control" type = "text" name = "DescriptionWorkExperience[]" placeholder = "Add Description" />
			</div>
			<div id = "WorkExperience">
				{this.state.duplicateForms}
			</div>
			<br />
			<button type = "submit" className = "btn btn-primary"> Submit </button>
			<hr />
		
			</form>
		)
	}

}

export default WorkExpForm;
