import Link from 'next/link'

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
	<form>
		<h5> Publications </h5>
		<hr />
		<div className = "form-row">
			<div className = "col-auto">
				<button type = "button" className = "btn btn-primary" id = "AddPublication"> Add Publication </button>
			</div>
			<div className = "col-auto">
				<button type = "button" className = "btn btn-danger" id = "RemovePublication"> Remove a Row </button>
			</div>
		</div>
		<br />
		<div className = "form-row">
			<div className = "form-group col-md-2">
				<label htmlFor = "Publication[]"> Publication </label>
				<input className = "form-control" type = "text" name = "Publication[]" placeholder = "Input publication name" />
			</div>
			<div className = "form-group col-md-4">
				<label htmlFor = "PublicationAuthor[]"> Author/s </label>
				<input className = "form-control" type = "text" name = "PublicationAuthor[]" placeholder = "Input publication authors" />
			</div>
			<div className = "form-group col-md-2">
				<label htmlFor = "PublishDate[]"> Date Published </label>
				<input type = "date" className = "form-control" name = "PublishDate[]" />
			</div>

		</div>
		<div id = "Publication">
		</div>
		<br />
		<button type = "submit" className = "btn btn-primary"> Submit </button>
		<hr />
		
	</form>
</div>
		</div>
	)
}

export default Publication
