function EvaluationSemester() {
	return(
		<div>
		<table className = "table table-sm">
			<thead>
				<tr>
					<th>Name</th>
					<th>Section</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Cabalo, Francis</td>
					<td>
						<select class = "custom-select">
							<option value = "1.00">1.00</option>
							<option value = "1.25">1.25</option>
							<option value = "1.50">1.50</option>
							<option value = "1.75">1.75</option>
							<option value = "2.00">2.00</option>
							<option value = "2.25">2.25</option>
							<option value = "2.50">2.50</option>
							<option value = "2.75">2.75</option>
							<option value = "3.00">3.00</option>
							<option value = "5.00">5.00</option>
						</select>
					</td>
				</tr>
				<tr>
					<td>Chua, Richard Bryann</td>
					<td>1.75</td>
				</tr>
				<tr>
					<td>Yu, Berwin</td>
					<td>
						<select class = "custom-select">
							<option value = "1.00">1.00</option>
							<option value = "1.25">1.25</option>
							<option value = "1.50">1.50</option>
							<option value = "1.75">1.75</option>
							<option value = "2.00">2.00</option>
							<option value = "2.25">2.25</option>
							<option value = "2.50">2.50</option>
							<option value = "2.75">2.75</option>
							<option value = "3.00">3.00</option>
							<option value = "5.00">5.00</option>
						</select>
					</td>
				</tr>
			</tbody>
		</table>
		<button type = "submit" class = "btn btn-primary">Update</button>
		</div>
	)
}

export default EvaluationSemester