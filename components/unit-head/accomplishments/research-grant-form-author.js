import React from 'react'

class ResearchGrantFormAuthor extends React.Component{
	constructor(){
		super()
		this.state = {
			duplicateAuthors: []
		}
	}
	clone(){
		this.state.duplicateAuthors.push(<div><div className = "form-row">
			<div className = "form-group col-md-6">
				<label htmlFor = "ResearchAuthorDPSM[]"> Author (from DPSM) </label>
				<input className = "form-control" type = "text" name = "ResearchAuthorDPSM[]" placeholder = "Input author (must be part of DPSM)" />
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
		return(<div>
			<div className = "btn-group btn-group-sm col-md-2">
				<button type = "button" className = "btn btn-primary" id = "AddAuthor" onClick = {() => this.clone()}> Add Author </button>
				<button type = "button" className = "btn btn-danger" id = "RemoveAuthor" onClick = {() => this.remove()}> Remove a Row </button>
			</div>
			<div className = "form-row">
			<div className = "form-group col-md-6">
				<label htmlFor = "ResearchAuthorDPSM[]"> Author (from DPSM) </label>
				<input className = "form-control" type = "text" name = "ResearchAuthorDPSM[]" placeholder = "Input author (must be part of DPSM)" />
			</div>
		</div>
		<div>
				{this.state.duplicateAuthors}
		</div>
		</div>
		)
	}
}

export default ResearchGrantFormAuthor