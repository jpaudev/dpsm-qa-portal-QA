import Link from 'next/link'
import PublicationForm from './publication-form'

function Publication(){
	return(
		<div>
			<div>
	<table className = "table table-striped table-sm">
		<tbody>
			<tr>
				<th>Publication</th>
				<th>Author/s</th>
				<th>Publication Date</th>
			</tr>
			<tr>
				<td>Principles of Programming Languages</td>
				<td>2020-01-26</td>
				<td></td>
			</tr>
			<tr>
				<td>Advanced Computer Systems</td>
				<td></td>
				<td>2017-05-26</td>
			</tr>
			<tr>
				<td>Algorithms and Advanced Data Structures I</td>
				<td></td>
				<td>2010-09-06</td>
			</tr>
		</tbody>
	</table>	
	</div>
	<div>
		<PublicationForm />
	</div>
		</div>
	)
}

export default Publication
