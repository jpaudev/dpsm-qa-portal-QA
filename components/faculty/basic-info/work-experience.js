import Link from 'next/link'
import WorkExpForm from './work-exp-form'
import EmploymentHistory from './employment-history'

function WorkExperience(props){
	const len = props.children.length - 1;
	let content = Object.keys(props.children).map(key => {
		if(key != len) {
			return (
				<tr key = {props.children.[key].workExpId}>
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
			<EmploymentHistory>{props.children[len]}</EmploymentHistory>
			<br />
			<h5 align = "center"> Outside UP Manila </h5>
			<table className = "table table-striped table-sm">
			<tbody>
				<tr key = "headers">
					<th>Employer</th>
					<th>Position</th>
					<th>Start Date</th>
					<th>End Date</th>
					<th>Description</th>
				</tr>
				{content}
				{/*<tr>
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
				</tr>*/}
			</tbody>
			</table>
			<div>
				<WorkExpForm />
			</div>
		</div>
	)
}

export default WorkExperience
