import React from 'react'

class PublicServiceAccomplishmentForm extends React.Component{
	constructor(){
		super()
		this.state = {
			duplicateForms: []
		}
	}
	clone(){
		this.state.duplicateForms.push(<div className = "form-row">
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishment[]"> Accomplishment </label>
                            <input className = "form-control" type = "text" name = "PublicServiceAccomplishment[]" placeholder = "Input accomplishment" />
                        </div>
			<div className = "form-group col-md-4">
                            <label htmlFor = "PublicServiceAccomplishmentDescription[]"> Description </label>
                            <input className = "form-control" type = "text" name = "PublicServiceAccomplishmentDescription[]" placeholder = "Input description" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentDate[]"> Date </label>
                            <input type = "date" className = "form-control" name = "PublicServiceAccomplishmentDate[]" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentProof[]"> Proof </label>
                            <input type = "file" className = "form-control-file" name = "PublicServiceAccomplishmentProof[]" />
                        </div>
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
		return(
			<form>
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
                            <label htmlFor = "PublicServiceAccomplishment[]"> Accomplishment </label>
                            <input className = "form-control" type = "text" name = "PublicServiceAccomplishment[]" placeholder = "Input accomplishment" />
                        </div>
			<div className = "form-group col-md-4">
                            <label htmlFor = "PublicServiceAccomplishmentDescription[]"> Description </label>
                            <input className = "form-control" type = "text" name = "PublicServiceAccomplishmentDescription[]" placeholder = "Input description" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentDate[]"> Date </label>
                            <input type = "date" className = "form-control" name = "PublicServiceAccomplishmentDate[]" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentProof[]"> Proof </label>
                            <input type = "file" className = "form-control-file" name = "PublicServiceAccomplishmentProof[]" />
                        </div>
                    </div>
                    <div id = "PublicServiceAccomplishment">
                        {this.state.duplicateForms}
                    </div>
                    <br />
                    <button type = "submit" className = "btn btn-primary"> Submit </button>
                    <hr />
                    
                </form>
		)
	}
}

export default PublicServiceAccomplishmentForm
