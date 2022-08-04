import React from 'react'
import Select from 'react-select'

class PublicationFormAuthor extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			duplicateAuthors: []
		}
	}
	// clone(){
	// 	let authors = Object.keys(this.props.faculty).map(key => {
	// 		return (
	// 			<option value = {this.props.faculty[key].facultyId}>{this.props.faculty[key].lastName + ', ' + this.props.faculty[key].firstName}</option> 
	// 		);
	// 	});
	// 	this.state.duplicateAuthors.push(<div><div className = "form-row">
	// 		<div className = "form-group col-md-6">
	// 			<label htmlFor = "PublicationAuthorDPSM[]"> Author (from DPSM) </label>
	// 			<select className = "form-control col-md-6" name = "PublicationAuthorDPSM[]" required>
	// 				{authors}
	// 			</select>
	// 		</div>
	// 	</div></div>)
	// 	this.setState({

	// 	})
	// }
	// remove(){
	// 	this.state.duplicateAuthors.pop()
	// 	this.setState({

	// 	})
	// }

	render(){
		let authors = Object.keys(this.props.faculty).map(key => {
			return(
				{value: this.props.faculty[key].facultyId, label: this.props.faculty[key].lastName + ', ' + this.props.faculty[key].firstName}
			);
		});
		return(
		<div>
			<div className = "form-row">
				<div className = "form-group col-md-12">
					<label htmlFor = "PublicationAuthorDPSM[]" style={{fontSize:"16px"}}> DPSM Co-Authors </label>
					<Select className = "col-md-12" name = "PublicationAuthorDPSM[]" isMulti options = {authors} />
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
