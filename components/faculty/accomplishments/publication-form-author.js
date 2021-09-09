import React from 'react'
import Select from 'react-select'

class PublicationFormAuthor extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			duplicateAuthors: []
		}
	}
	clone(){
		let authors = Object.keys(this.props.faculty).map(key => {
			return (
				<option value = {this.props.faculty[key].facultyId}>{this.props.faculty[key].lastName + ', ' + this.props.faculty[key].firstName}</option> 
			);
		});
		this.state.duplicateAuthors.push(<div><div className = "form-row">
			<div className = "form-group col-md-6">
				<label htmlFor = "PublicationAuthorDPSM[]"> Author (from DPSM) </label>
				<select className = "form-control col-md-6" name = "PublicationAuthorDPSM[]" required>
					{authors}
				</select>
			</div>
		</div></div>)
		this.setState({

		})
	}
	remove(){
		this.state.duplicateAuthors.pop()
		this.setState({

		})
	}

	render(){
		let authors = Object.keys(this.props.faculty).map(key => {
			return (
				<option value = {this.props.faculty[key].facultyId}>{this.props.faculty[key].lastName + ', ' + this.props.faculty[key].firstName}</option> 
			);
		});
		return(<div>
		       {/*<div className = "btn-group btn-group-sm col-md-2">
				<button type = "button" className = "btn btn-primary" id = "AddAuthor" onClick = {() => this.clone()}> Add DPSM Author </button>
				<button type = "button" className = "btn btn-danger" id = "RemoveAuthor" onClick = {() => this.remove()}> Remove a Row </button>
			</div>*/}
			<div className = "form-row">
				<div className = "form-group col-md-12">
					<label htmlFor = "PublicationAuthorDPSM[]"> Authors (from DPSM) </label>
					<Select className = "col-md-12" name = "PublicationAuthorDPSM[]" isMulti options = {authors} required />
					{/*<select className = "form-control col-md-6" name = "PublicationAuthorDPSM[]" required>
						{authors}
					</select>*/}
				</div>
			</div>
		<div>
				{this.state.duplicateAuthors}
		</div>
		</div>
		)
	}
}

export default PublicationFormAuthor
