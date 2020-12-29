import Link from 'next/link'

function PublicServiceAccomplishment(){
	return(
	<div>
		<div>
		<h5 align = "center">Within UP Manila </h5>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>Position/Role</th>
			    <th>Organization</th>
			    <th>Description</th>
                            <th>Start Date</th>
			    <th>End Date</th>
                            <th>Proof</th>
			    <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
			    <td></td>
                            <td></td>
                            <td></td>
			    <td>2020-02-29</td>
			    <td></td>
                            <td></td>
			    <td>Pending Approval</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#approvePublicService">Approve</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#rejectPublicService">Reject</a>
				</div>
			    </td>
                        </tr>
                        <tr>
			    <td></td>
                            <td></td>
                            <td></td>
			    <td>2020-03-20</td>
			    <td></td>
                            <td></td>
			    <td>Verified</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#approvePublicService">Approve</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#rejectPublicService">Reject</a>
				</div>
			    </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
		<br />
		<h5 align = "center"> Contributions to Profession </h5>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>Position/Role</th>
			    <th>Organization</th>
			    <th>Description</th>
                            <th>Start Date</th>
			    <th>End Date</th>
                            <th>Proof</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
			    <td></td>
                            <td></td>
                            <td></td>
			    <td>2020-02-29</td>
                            <td></td>
			    <td></td>
			    <td>Pending Approval</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#approvePublicService">Approve</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#rejectPublicService">Reject</a>
				</div>
			    </td>
                        </tr>
                        <tr>
			    <td></td>
                            <td></td>
                            <td></td>
			    <td>2020-03-20</td>
                            <td></td>
			    <td></td>
			    <td>Verified</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#approvePublicService">Approve</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#rejectPublicService">Reject</a>
				</div>
			    </td>
                        </tr>
                    </tbody>
                </table>
		<br />
		<h5 align = "center"> Contributions to the Nation </h5>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>Position/Role</th>
			    <th>Organization</th>
			    <th>Description</th>
                            <th>Start Date</th>
			    <th>End Date</th>
                            <th>Proof</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
			    <td></td>
                            <td></td>
                            <td></td>
			    <td>2020-02-29</td>
                            <td></td>
			    <td></td>
			    <td>Pending Approval</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#approvePublicService">Approve</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#rejectPublicService">Reject</a>
				</div>
			    </td>
                        </tr>
                        <tr>
			    <td></td>
                            <td></td>
                            <td></td>
			    <td>2020-03-20</td>
                            <td></td>
			    <td></td>
			    <td>Verified</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#approvePublicService">Approve</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#rejectPublicService">Reject</a>
				</div>
			    </td>
                        </tr>
                    </tbody>
                </table>
		<br />
		<h5 align = "center"> Contributions to the World </h5>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>Position/Role</th>
			    <th>Organization</th>
			    <th>Description</th>
                            <th>Start Date</th>
			    <th>End Date</th>
                            <th>Proof</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
			    <td></td>
                            <td></td>
                            <td></td>
			    <td>2020-02-29</td>
                            <td></td>
			    <td></td>
			    <td>Pending Approval</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#approvePublicService">Approve</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#rejectPublicService">Reject</a>
				</div>
			    </td>
                        </tr>
                        <tr>
			    <td></td>
                            <td></td>
                            <td></td>
			    <td>2020-03-20</td>
                            <td></td>
			    <td></td>
			    <td>Verified</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#approvePublicService">Approve</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#rejectPublicService">Reject</a>
				</div>
			    </td>
                        </tr>
                    </tbody>
                </table>
            </div>

		
		<div className="modal fade" id="approvePublicService" tabIndex="-1" role="dialog" aria-labelledby="approvePublicServiceLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="approvePublicServiceLabel">Approve Public Service Accomplishment Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p> Are you sure you want to approve this submission? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Yes, approve</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="rejectPublicService" tabIndex="-1" role="dialog" aria-labelledby="rejectPublicServiceLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="rejectPublicServiceLabel">Reject Public Service Accomplishment Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to reject this submission? </p>
			<form>
				<div className = "form-group">
					<label htmlFor = "rejectReasonPublicService"> Reason </label>
					<textarea className = "form-control" name = "rejectReasonPublicService" rows = "5" /> 
				</div>
			</form>
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

export default PublicServiceAccomplishment