import Link from 'next/link'
function EmploymentHistory(props){
	let content = Object.keys(props.children).map(key => {
		return (
			<tr>
				<td>{props.children[key].position}</td>
				<td>{props.children[key].startDate}</td>
				<td>{props.children[key].endDate}</td>
			</tr>
		);
	});
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
					{content}
				</tbody>
			</table>
			</div>
		</div>
	)
}

export default EmploymentHistory
