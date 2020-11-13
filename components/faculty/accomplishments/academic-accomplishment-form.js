import React from 'react'

class AcadAccomplishmentForm extends React.Component{
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
                            <label htmlFor = "AcademicAccomplishment[]"> Accomplishment </label>
                            <input className = "form-control" type = "text" name = "AcademicAccomplishment[]" placeholder = "Input accomplishment" />
                        </div>
			<div className = "form-group col-md-4">
                            <label htmlFor = "AcademicAccomplishmentDescription[]"> Description </label>
                            <input className = "form-control" type = "text" name = "AcademicAccomplishmentDescription[]" placeholder = "Input description" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "AcademicAccomplishmentDate[]"> Date </label>
                            <input type = "date" className = "form-control" name = "AcademicAccomplishmentDate[]" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "AcademicAccomplishmentProof[]"> Proof </label>
                            <input type = "file" className = "form-control-file" name = "AcademicAccomplishmentProof[]" />
                        </div>
                    </div>
                    <div id = "AcademicAccomplishment">
                        {/* <!-- Duplicate fields will appear here --> */}
                    </div>
                    <br />
                    <button type = "submit" className = "btn btn-primary"> Submit </button>
                    <hr />
                    
                </form>
		)
	}
}

export default AcadAccomplishmentForm