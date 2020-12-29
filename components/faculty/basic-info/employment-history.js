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
	<table className = "table table-striped table-sm">
		<tbody>
			<tr>
				<th>Position</th>
				<th>Type</th>
				<th>Start Date</th>
				<th>End Date</th>
			</tr>
      {content}
			<tr>
				<td>Professor 2</td>
				<td>Full-time (Permanent)</td>
				<td>2020-01-26</td>
				<td>Present</td>
			</tr>
			<tr>
				<td>Professor 1</td>
				<td>Full-time (Temporary)</td>
				<td>2017-05-26</td>
				<td>2020-01-25</td>
			</tr>
			<tr>
				<td>Instructor 1</td>
				<td>Part-time</td>
				<td>2010-09-06</td>
				<td>2017-05-25</td>
			</tr>
		</tbody>
	</table>
	)
}

export default EmploymentHistory
