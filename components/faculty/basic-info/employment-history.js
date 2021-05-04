import Link from 'next/link'
function EmploymentHistory(props){
	let content = Object.keys(props.children.faculty_employment_infos).map(key => {
		if(props.children.faculty_employment_infos[key].faculty_employment_position.employmentType == 'ftt') {
			return (
				<tr key = {props.children.faculty_employment_infos[key].employmentInfoId}>
					<td>{props.children.faculty_employment_infos[key].faculty_employment_position.position}</td>
					<td>Full-time (Temporary)</td>
					<td>{props.children.faculty_employment_infos[key].startDate}</td>
					<td>{props.children.faculty_employment_infos[key].endDate}</td>
				</tr>
			);
		} else if(props.children.faculty_employment_infos[key].faculty_employment_position.employmentType == 'ftp') {
			return (
				<tr key = {props.children.faculty_employment_infos[key].employmentInfoId}>
					<td>{props.children.faculty_employment_infos[key].faculty_employment_position.position}</td>
					<td>Full-time (Permanent)</td>
					<td>{props.children.faculty_employment_infos[key].startDate}</td>
					<td>{props.children.faculty_employment_infos[key].endDate}</td>
				</tr>
			);
		} else if(props.children.faculty_employment_infos[key].faculty_employment_position.employmentType == 'pt') {
			return (
				<tr key = {props.children.faculty_employment_infos[key].employmentInfoId}>
					<td>{props.children.faculty_employment_infos[key].faculty_employment_position.position}</td>
					<td>Part-time</td>
					<td>{props.children.faculty_employment_infos[key].startDate}</td>
					<td>{props.children.faculty_employment_infos[key].endDate}</td>
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
