import React from 'react'

class LicensureExamForm extends React.Component{
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
                            <button type = "button" className = "btn btn-primary" id = "AddAccomplishment" onClick = {() => this.clone()}> Add Licensure Exam </button>
                        </div>
                        <div className = "col-auto">
                            <button type = "button" className = "btn btn-danger" id = "RemoveAccomplishment" onClick = {() => this.remove()}> Remove a Row </button>
                        </div>
                    </div>
                    <br />
                    <div className = "form-row">
                        <div className = "form-group col-md-2">
                            <label htmlFor = "LicensureExam[]"> Licensure Exam </label>
                            <input className = "form-control" type = "text" name = "LicensureExam[]" placeholder = "Input licensure exam" />
                        </div>
			<div className = "form-group col-md-2">
                            <label htmlFor = "LicensureExamDate[]"> Date </label>
                            <input type = "date" className = "form-control" name = "LicensureExamDate[]" />
                        </div>
			<div className = "form-group col-md-2">
                            <label htmlFor = "LicensureExamRank[]"> Rank </label>
                            <input className = "form-control" type = "text" name = "LicensureExamRank[]" placeholder = "Input rank" />
                        </div>
                    </div>
                    <div id = "LicensureExam">
                        {/* <!-- Duplicate fields will appear here --> */}
                    </div>
                    <br />
                    <button type = "submit" className = "btn btn-primary"> Submit </button>
                    <hr />
                    
                </form>
		)
	}
}

export default LicensureExamForm