import Link from 'next/link'

function Publication(){
	return(
		<div>
			<div>
	<table class = "table table-striped table-sm">
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
		<div class = "form-row">
			<div class = "col-auto">
				<button type = "button" class = "btn btn-primary" id = "AddPublication"> Add Publication </button>
			</div>
			<div class = "col-auto">
				<button type = "button" class = "btn btn-danger" id = "RemovePublication"> Remove a Row </button>
			</div>
		</div>
		<br />
		<div class = "form-row">
			<div class = "form-group col-md-2">
				<label for = "Publication[]"> Publication </label>
				<input class = "form-control" type = "text" name = "Publication[]" placeholder = "Input publication name" />
			</div>
			<div class = "form-group col-md-4">
				<label for = "PublicationAuthor[]"> Author/s </label>
				<input class = "form-control" type = "text" name = "PublicationAuthor[]" placeholder = "Input publication authors" />
			</div>
			<div class = "form-group col-md-2">
				<label for = "PublishDate[]"> Date Published </label>
				<input type = "date" class = "form-control" name = "PublishDate[]" />
			</div>

		</div>
		<div id = "Publication">
		</div>
		<br />
		<button type = "submit" class = "btn btn-primary"> Submit </button>
		<hr />
		
	</form>
</div>
		</div>
	)
}

export default Publication