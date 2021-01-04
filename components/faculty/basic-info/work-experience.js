import Link from 'next/link'
import WorkExpForm from './work-exp-form'
import EmploymentHistory from './employment-history'

function WorkExperience(props){
	const len = props.children.length - 1;
	let content = Object.keys(props.children).map(key => {
		if(key != len) {
			return (
				<tr>
					<td>{props.children[key].employerName}</td>
					<td>{props.children[key].position}</td>
					<td>{props.children[key].startDate}</td>
					<td>{props.children[key].endDate}</td>
					<td>{props.children[key].description}</td>
				</tr>
			);	
		}
	});
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
					<td>ON Semiconductor</td>
					<td>Systems Analyst</td>
					<td>2020-01-26</td>
					<td>Present</td>
					<td>Developer of Genesis program</td>
				</tr>
				<tr>
					<td>NASA</td>
					<td>Aeronautics Engineer</td>
					<td>2017-05-26</td>
					<td>2020-01-25</td>
					<td>Principal contributor in Jet Propulsion Lab</td>
				</tr>
				<tr>
					<td>Ubisoft</td>
					<td>Creative Director</td>
					<td>2010-09-06</td>
					<td>2017-05-25</td>
					<td>Lead in creative development of games</td>
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
