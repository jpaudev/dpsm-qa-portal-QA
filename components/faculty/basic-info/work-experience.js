import Link from 'next/link'

function WorkExperience(){
	return(
	<div>
			<table className = "table table-striped table-sm">
			<tbody>
				<tr>
					<th>Employer</th>
					<th>Position</th>
					<th>Start Date</th>
					<th>End Date</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>Professor 2</td>
					<td>University of the Philippines Diliman</td>
					<td>2020-01-26</td>
					<td>Present</td>
					<td>CMSC 127 professor</td>
				</tr>
				<tr>
					<td>Professor 1</td>
					<td>University of the Philippines Diliman</td>
					<td>2017-05-26</td>
					<td>2020-01-25</td>
					<td>Stat 130 professor</td>
				</tr>
				<tr>
					<td>Instructor 1</td>
					<td>University of the Philippines Los Banos</td>
					<td>2010-09-06</td>
					<td>2017-05-25</td>
					<td>Math 121.1 Professor</td>
				</tr>
			</tbody>
		</table>
<div>
	<form>
		<hr />
		<div className = "form-row">
			<div className = "col-auto">
				<button type = "button" className = "btn btn-primary" id = "AddWorkExperience"> Add Work Experience </button>
			</div>
			<div className = "col-auto">
				<button type = "button" className = "btn btn-danger" id = "RemoveWorkExperience"> Remove a Row </button>
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
		</div>
		<div className = "form-row">
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
			<input className = "form-control col-md-6" type = "text" name = "DescriptionWorkExperience[]" placeholder = "Add Description" />
		</div>
		<div id = "WorkExperience">
		</div>
		<br />
		<button type = "submit" className = "btn btn-primary"> Submit </button>
		<hr />
		
	</form>
</div>

</div>
	)
}

export default WorkExperience
