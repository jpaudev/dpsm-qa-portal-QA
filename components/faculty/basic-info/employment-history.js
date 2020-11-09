import Link from 'next/link'
function EmploymentHistory(){
	return(
<div>
		<div>
	<table className = "table table-striped table-sm">
		<tbody>
			<tr>
				<th>Position</th>
				<th>Start Date</th>
				<th>End Date</th>
			</tr>
			<tr>
				<td>Professor 2</td>
				<td>2020-01-26</td>
				<td></td>
			</tr>
			<tr>
				<td>Professor 1</td>
				<td>2017-05-26</td>
				<td>2020-01-25</td>
			</tr>
			<tr>
				<td>Instructor 1</td>
				<td>2010-09-06</td>
				<td>2017-05-25</td>
			</tr>
		</tbody>
	</table>
</div>	

<div>
	<form>
		<hr />
		<div className = "form-row">
			<div className = "col-auto">
				<button type = "button" className = "btn btn-primary" id = "AddEmploymentHistory"> Add Employment History </button>
			</div>
			<div className = "col-auto">
				<button type = "button" className = "btn btn-danger" id = "RemoveEmploymentHistory"> Remove a Row </button>
			</div>
		</div>
		<br />
		<div className = "form-row">
			<div className = "form-group col-md-2">
				<label htmlFor = "PositionEmploymentHistory[]"> Position </label>
				<input className = "form-control" type = "text" name = "PositionEmploymentHistory[]" placeholder = "Input position" />
			</div>
			<div className = "form-group col-md-2">
				<label htmlFor = "StartDateEmploymentHistory[]"> Start Date </label>
				<input type = "date" className = "form-control" name = "StartDateEmploymentHistory[]" />
			</div>
			<div className = "form-group col-md-2">
				<label htmlFor = "EndDateEmploymentHistory[]"> End Date </label>
				<input type = "date" className = "form-control" name = "EndDateEmploymentHistory[]" />
			</div>

		</div>
		<div id = "EmploymentHistory">
			
		</div>
		<br />
		<button type = "submit" className = "btn btn-primary"> Submit </button>
		<hr />
	</form>
</div>	

</div>
	)
}

export default EmploymentHistory
