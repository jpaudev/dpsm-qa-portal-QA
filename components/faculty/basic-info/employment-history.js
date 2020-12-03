import Link from 'next/link'
function EmploymentHistory(props){
	let content = Object.keys(props.children).map(key => {
		if(props.children[key].faculty_employment_position.employmentType == 'ftt') {
			return (
				<tr>
					<td>{props.children[key].faculty_employment_position.position}</td>
					<td>Full-time (Temporary)</td>
					<td>{props.children[key].startDate}</td>
					<td>{props.children[key].endDate}</td>
				</tr>
			);
		} else if(props.children[key].faculty_employment_position.employmentType == 'ftp') {
			return (
				<tr>
					<td>{props.children[key].faculty_employment_position.position}</td>
					<td>Full-time (Permanent)</td>
					<td>{props.children[key].startDate}</td>
					<td>{props.children[key].endDate}</td>
				</tr>
			);
		} else if(props.children[key].faculty_employment_position.employmentType == 'pt') {
			return (
				<tr>
					<td>{props.children[key].faculty_employment_position.position}</td>
					<td>Part-time</td>
					<td>{props.children[key].startDate}</td>
					<td>{props.children[key].endDate}</td>
				</tr>
			);
		}
	});

	return(
		<div>
			<div>
			<table className = "table table-striped table-sm">
				<tbody>
					<tr>
						<th>Position</th>
						<th>Type</th>
						<th>Start Date</th>
						<th>End Date</th>
					</tr>
					{content}
				</tbody>
			</table>
			</div>
		</div>
	)
}

export default EmploymentHistory
