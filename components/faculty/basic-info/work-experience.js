import Link from 'next/link'

function WorkExperience(){
	return(
	<div>
			<table class = "table table-striped table-sm">
			<tbody>
				<tr>
					<th>Employer</th>
					<th>Address</th>
					<th>Position</th>
					<th>Contact Number</th>
					<th>Supervisor</th>
					<th>Start Date</th>
					<th>End Date</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>Professor 2</td>
					<td>University of the Philippines Diliman</td>
					<td>2020-01-26</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>Professor 1</td>
					<td>University of the Philippines Diliman</td>
					<td>2017-05-26</td>
					<td>2020-01-25</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>Instructor 1</td>
					<td>University of the Philippines Los Banos</td>
					<td>2010-09-06</td>
					<td>2017-05-25</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
<div>
	<form>
		<hr />
		<div class = "form-row">
			<div class = "col-auto">
				<button type = "button" class = "btn btn-primary" id = "AddWorkExperience"> Add Work Experience </button>
			</div>
			<div class = "col-auto">
				<button type = "button" class = "btn btn-danger" id = "RemoveWorkExperience"> Remove a Row </button>
			</div>
		</div>
		<br />
		<div class = "form-row">
			<div class = "form-group col-md-2">
				<label for = "EmployerWorkExperience[]"> Employer </label>
				<input class = "form-control" type = "text" name = "EmployerWorkExperience[]" placeholder = "Input name of employer" />
			</div>
			<div class = "form-group col-md-4">
				<label for = "AddressWorkExperience[]"> Address </label>
				<input class = "form-control" type = "text" name = "AddressWorkExperience[]" placeholder = "Input address of employer" />
			</div>
			<div class = "form-group col-md-2">
				<label for = "PositionWorkExperience[]"> Title/Position </label>
				<input class = "form-control" type = "text" name = "PositionWorkExperience[]" placeholder = "Input position" />
			</div>
			<div class = "form-group col-md-2">
				<label for = "ContactNumberWorkExperience[]"> Contact Number </label>
				<input class = "form-control" type = "text" name = "ContactNumberWorkExperience[]" placeholder = "Input contact number" />
			</div>
			<div class = "form-group col-md-2">
				<label for = "SupervisorWorkExperience[]"> Supervisor </label>
				<input class = "form-control" type = "text" name = "SupervisorWorkExperience[]" placeholder = "Input name of supervisor" />
			</div>
		</div>
		<div class = "form-row">
			<div class = "form-group col-md-2">
					<label for = "StartDateWorkExperience[]"> Start Date </label>
					<input type = "date" class = "form-control" name = "StartDateWorkExperience[]" />
				</div>
				<div class = "form-group col-md-2">
					<label for = "EndDateWorkExperience[]"> End Date </label>
					<input type = "date" class = "form-control" name = "EndDateWorkExperience[]" />
			</div>
		</div>
		<div class = "form-group">
			<label for = "DescriptionWorkExperience[]"> Description </label>
			<input class = "form-control" type = "textarea" name = "DescriptionWorkExperience[]" placeholder = "Add Description" />
		</div>
		<div id = "WorkExperience">
		</div>
		<br />
		<button type = "submit" class = "btn btn-primary"> Submit </button>
		<hr />
		
	</form>
</div>

</div>
	)
}

export default WorkExperience