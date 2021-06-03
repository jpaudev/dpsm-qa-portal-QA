import Link from 'next/link'

function AssignUnitHead() {
    return (
        <div>
		<h2 align = "center"> Unit Head Assignment </h2>
            <div>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
			    <th>Unit</th>
                            <th>Current Unit Head</th>
                            <th>Incoming Unit Head</th>
		   	    <th>Action</th>
                        </tr>
                        <tr>
			    <td>MCSU</td>
                            <td>Steve</td>
                            <td>Bob</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#ApproveUnitHead">Approve</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#RejectUnitHead">Reject</a>
				</div>
			    </td>
                        </tr>
                        <tr>
			    <td>Chem</td>
                            <td>Steve</td>
                            <td>Bob</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#ApproveUnitHead">Approve</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#RejectUnitHead">Reject</a>
				</div>
			    </td>
                        </tr>
                        <tr>
			    <td>Physics/Geology</td>
                            <td>Steve</td>
                            <td>Bob</td>
			    <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#ApproveUnitHead">Approve</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#RejectUnitHead">Reject</a>
				</div>
			    </td>
                        </tr>
                    </tbody>
                </table>
            </div>
	
<div className="modal fade" id="ApproveUnitHead" tabIndex="-1" role="dialog" aria-labelledby="ApproveUnitHeadLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ApproveUnitHeadLabel">Approve Unit Head Change</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to approve the change in unit head role? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't approve</button>
			<button type="button" className="btn btn-danger">Yes, approve</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="RejectUnitHead" tabIndex="-1" role="dialog" aria-labelledby="RejectUnitHeadLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="RejectUnitHeadLabel">Reject Unit Head Change</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to reject this change in unit head? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't reject</button>
			<button type="button" className="btn btn-danger">Yes, reject</button>
                    </div>
                    </div>
                </div>
            </div>
            
        
        </div>
	
	
    )
  }
  
  export default AssignUnitHead