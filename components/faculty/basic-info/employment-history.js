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

</div>
	)
}

export default EmploymentHistory
