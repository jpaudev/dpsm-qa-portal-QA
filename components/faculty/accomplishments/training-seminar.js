import Link from 'next/link'
import TrainingSeminarForm from './training-seminar-form'

function TrainingSeminar() {
    return (
        <div>
            <div>
                <table className = "table table-striped table-sm">
		<tbody>
			<tr>
				<th>Research Name</th>
				<th>Author/s</th>
				<th>Sponsor</th>
				<th>Amount</th>
				<th>Projected Duration</th>
				<th>Start Date</th>
				<th>End Date</th>
				<th>Research Progress</th>
				<th>Proof</th>
				<th>Status</th>
				<th>Action</th>
			</tr>
			<tr>
				<td>COVID-19 vaccine</td>
				<td><a href = "#">Steve</a>, Bob, Greg</td>
				<td>WHO</td>
				<td>Php100,000,000</td>
				<td>2019-11-20 to 2021-5-18</td>
				<td>2019-12-25</td>
				<td></td>
				<td>Ongoing</td>
				<td><a href ="#">Download proof</a></td>
				<td>Pending Approval</td>
				<td>
					<div className = "btn-group">
						<a className="btn btn-info" data-toggle="modal" data-target="#editResearchGrant">Edit</a>
						<a className="btn btn-danger" data-toggle="modal" data-target="#deleteResearchGrant">Delete</a>
					</div>
			    	</td>
			</tr>
			<tr>
				<td>Lightsail Prototype</td>
				<td><a href = "#">Steve</a>, Bob, Greg</td>
				<td>NASA</td>
				<td>Php1,500,000,000</td>
				<td>2019-11-20 to 2021-5-18</td>
				<td>2019-12-25</td>
				<td></td>
				<td>Ongoing</td>
				<td><a href ="#">Download proof</a></td>
				<td>Pending Approval</td>
				<td>
					<div className = "btn-group">
						<a className="btn btn-info" data-toggle="modal" data-target="#editResearchGrant">Edit</a>
						<a className="btn btn-danger" data-toggle="modal" data-target="#deleteResearchGrant">Delete</a>
					</div>
			    	</td>
			</tr>
			<tr>
				<td>Microplastic Filtration System</td>
				<td><a href = "#">Steve</a>, Bob, Greg</td>
				<td>EPA</td>
				<td>Php70,000,000</td>
				<td>2019-11-20 to 2021-5-18</td>
				<td>2019-12-25</td>
				<td></td>
				<td>Ongoing</td>
				<td><a href ="#">Download proof</a></td>
				<td>Verified</td>
				<td>
					<div className = "btn-group">
						<a className="btn btn-info disabled" data-toggle="modal" data-target="#editResearchGrant">Edit</a>
						<a className="btn btn-danger disabled" data-toggle="modal" data-target="#deleteResearchGrant">Delete</a>
					</div>
			    	</td>
			</tr>
		</tbody>
	</table>	
            </div>

            <div>
                <TrainingSeminarForm />
            </div>   
	
<div className="modal fade" id="editTrainingSeminar" tabIndex="-1" role="dialog" aria-labelledby="editTrainingSeminarLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editTrainingSeminarLabel">Update Training/Seminar Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "TrainingSeminarUpdate"> Name of Training/Seminar </label>
                            		<input className = "form-control" type = "text" name = "TrainingSeminarUpdate" placeholder = "Input training/seminar" />
                        	</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "TrainingSeminarRoleUpdate"> Role</label>
                            		<input className = "form-control" type = "text" name = "TrainingSeminarRoleUpdate" placeholder = "Input role" />
                        	</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "TrainingSeminarVenueUpdate"> Venue </label>
                            		<input className = "form-control" type = "text" name = "TrainingSeminarVenueUpdate" placeholder = "Input venue" />
                        	</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "TrainingSeminarStartDateUpdate"> Start Date </label>
                            		<input type = "date" className = "form-control" name = "TrainingSeminarStartDateUpdate" />
                       		</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "TrainingSeminarEndDateUpdate"> End Date </label>
                            		<input type = "date" className = "form-control" name = "TrainingSeminarEndDateUpdate" />
                        	</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "TrainingSeminarProofUpdate"> Proof </label>
                            		<input type = "file" className = "form-control-file" name = "TrainingSeminarProofUpdate" />
                        	</div>
                    	    </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="deleteTrainingSeminar" tabIndex="-1" role="dialog" aria-labelledby="deleteTrainingSeminarLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteTrainingSeminarLabel">Delete Training/Seminar Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to delete this education information? </p>
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
  
  export default TrainingSeminar
