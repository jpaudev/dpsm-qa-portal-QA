function FacultyLoadSemester() {
	return(
		<table className = "table table-sm">
			<thead>
				<tr>
					<th>Subject</th>
					<th>Section</th>
					<th>Number of Units</th>
					<th>Grades</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>CMSC 127</td>
					<td>MHI</td>
					<td>3</td>
					<td><a href = "#">View spreadsheet</a></td>
				</tr>
				<tr>
					<td>CMSC 128</td>
					<td>TFK</td>
					<td>3</td>
					<td><a href = "#">View spreadsheet</a></td>
				</tr>
			</tbody>
		</table>
	)
}

export default FacultyLoadSemester