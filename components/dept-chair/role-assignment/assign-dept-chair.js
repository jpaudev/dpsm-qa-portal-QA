import Link from 'next/link'

function AssignDeptChair() {
    return (
        <div>
		<h2 align = "center"> Admin Clerk Assignment </h2>
            <div className = "jumbotron">
		<form>
                <div className = "form-group col-md-6">
                            <label htmlFor = "DeptChair"> Select New Department Chair </label>
                            <select className = "form-control" name = "DeptChair" required>
					<option>Cabalo, Francis</option>
					<option>Yu, Berwin</option>
			    </select>
                </div>
		</form>
		<button className = "btn btn-danger" data-toggle="modal" data-target="#AssignDeptChair">Assign New Department Chair</button>
            </div>
		

            <div className="modal fade" id="AssignDeptChair" tabIndex="-1" role="dialog" aria-labelledby="AssignDeptChairLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="AssignDeptChairLabel">Assign New Department Chair</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> 
				Are you sure you want to assign this user as the new department chair?
				You will lose access to all department chair-specific functionalities, and the user you assigned will gain access to said functionalities.
				Once you finalize this decision, you will be logged out immediately, and your account will be reverted to a standard faculty account when you
				log in again.
			</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't assign</button>
			<button type="button" className="btn btn-danger">Yes, assign</button>
                    </div>
                    </div>
                </div>
            </div>
            
        
        </div>
	
	
    )
  }
  
  export default AssignDeptChair