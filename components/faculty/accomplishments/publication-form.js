import React from 'react'

class PublicationForm extends React.Component{
	constructor(){
		super()
	}
	clone(){
		alert('add')
	}
	remove(){
		alert('remove')
	}
	render(){
		return(
			<form>
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
			<div className = "form-group col-md-2">
				<label htmlFor = "Publication[]"> Publication </label>
				<input className = "form-control" type = "text" name = "Publication[]" placeholder = "Input publication name" />
			</div>
			<div className = "form-group col-md-4">
				<label htmlFor = "PublicationAuthor[]"> Author/s </label>
				<input className = "form-control" type = "text" name = "PublicationAuthor[]" placeholder = "Input publication authors" />
			</div>
			<div className = "form-group col-md-2">
				<label htmlFor = "PublishDate[]"> Date Published </label>
				<input type = "date" className = "form-control" name = "PublishDate[]" />
			</div>

		</div>
		<div id = "Publication">
		</div>
		<br />
		<button type = "submit" className = "btn btn-primary"> Submit </button>
		<hr />
		
	</form>
		)
	}
}

export default PublicationForm