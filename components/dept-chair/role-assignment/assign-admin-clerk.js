import Link from 'next/link'

function AssignAdminClerk() {
    return (
        <div>
		<h2 align = "center"> Admin Clerk Assignment </h2>
            <div>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
			    <th>Unit</th>
		   	    <th>Action</th>
                        </tr>
                        <tr>
                            <td>Bob</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-danger" data-toggle="modal" data-target="#DeleteClerk">Delete</a>
				</div>
			    </td>
                        </tr>
                        <tr>
                            <td>Bob</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-danger" data-toggle="modal" data-target="#DeleteClerk">Delete</a>
				</div>
			    </td>
                        </tr>
                        <tr>
                            <td>Bob</td>
			    <td>
				<div className = "btn-group">
					<a className="btn btn-danger" data-toggle="modal" data-target="#DeleteClerk">Delete</a>
				</div>
			    </td>
                        </tr>
                    </tbody>
                </table>
            </div>
		
		<form>
		<div className = "form-row">
			<div className = "form-group col-md-6">
                            <label htmlFor = "LicensureExam[]"> Name </label>
                            <input className = "form-control" type = "text" name = "AdminClerkName" placeholder = "Input name" />
                        </div>
			<div className = "form-group col-md-6">
                            <label htmlFor = "LicensureExamRank[]"> UP Email Address </label>
                            <input className = "form-control" type = "email" name = "AdminClerkEmail" placeholder = "Input UP Email" />
                        </div>
		</div>
		<button className = "btn btn-primary">Add Clerk</button>
		</form>

            <div className="modal fade" id="DeleteClerk" tabIndex="-1" role="dialog" aria-labelledby="DeleteClerkLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="DeleteClerkLabel">Delete Admin Clerk</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to delete this admin clerk? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't delete</button>
			<button type="button" className="btn btn-danger">Yes, delete</button>
                    </div>
                    </div>
                </div>
            </div>
            
        
        </div>
	
	
    )
  }
  
  export default AssignAdminClerk