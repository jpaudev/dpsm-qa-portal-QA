import Link from 'next/link'
import WorkExpForm from './work-exp-form'

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
	<WorkExpForm />
</div>

</div>
	)
}

export default WorkExperience
