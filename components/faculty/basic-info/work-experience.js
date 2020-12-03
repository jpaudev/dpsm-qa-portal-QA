import Link from 'next/link'
import WorkExpForm from './work-exp-form'
import EmploymentHistory from './employment-history'

function WorkExperience(){
	return(
	<div>
			<h5 align = "center"> Within UP Manila </h5>
			<EmploymentHistory />
			<br />
			<h5 align = "center"> Outside UP Manila </h5>
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
					<td>Systems Analyst</td>
					<td></td>
					<td>2020-01-26</td>
					<td>Present</td>
					<td></td>
				</tr>
				<tr>
					<td>Aeronautics Engineer</td>
					<td></td>
					<td>2017-05-26</td>
					<td>2020-01-25</td>
					<td></td>
				</tr>
				<tr>
					<td>Interior Designer</td>
					<td></td>
					<td>2010-09-06</td>
					<td>2017-05-25</td>
					<td></td>
				</tr>
			</tbody>
		</table>
<div>
	<WorkExpForm />
</div>

</div>
	)
}

export default WorkExperience
