import Link from 'next/link'
import LicensureExamForm from './licensure-exam-form'

function LicensureExam() {
    return (
        <div>
            <div>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
			    <th>Exam Name</th>
                            <th>Rank</th>
                            <th>Date</th>
			    <th>License Number</th>
                            <th>Proof</th>
                            <th>Status</th>
		   	    <th>Action</th>
                        </tr>
                        <tr>
			    <td>Mechanical Engineering</td>
                            <td>3</td>
                            <td>2020-11-11</td>
			    <td></td>
                            <td></td>
			    <td>Pending Approval</td>
                            <td><a className="btn btn-info" data-toggle="modal" data-target="#ongoingstatus2">Ongoing</a></td>
                        </tr>
                        <tr>
			    <td></td>
                            <td>8</td>
                            <td>2020-1-14</td>
			    <td></td>
                            <td></td>
			    <td>Pending Approval</td>
                            <td><a className="btn btn-info" data-toggle="modal" data-target="#forVerifstatus2">For Verification</a></td>
                        </tr>
                        <tr>
			    <td></td>
                            <td>1</td>
                            <td>2020-4-1</td>
			    <td></td>
                            <td></td>
                            <td>Verified</td>
			    <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <LicensureExamForm />
            </div>   
	
<div className="modal fade" id="ongoingstatus2" tabIndex="-1" role="dialog" aria-labelledby="ongoingLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ongoingLabel">Update Education Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "EndDate"> End Date </label>
                                    <input type = "date" className = "form-control" name = "EndDate" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "Proof"> Proof </label>
                                    <input type = "file" className = "form-control-file" name = "Proof" />
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
        
            <div className="modal fade" id="forVerifstatus2" tabIndex="-1" role="dialog" aria-labelledby="forVerifLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="forVerifLabel">Status</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <table className = "table table-striped table-sm">
                            <tr>
                                <th>Position</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Date of Approval</th>
                            </tr>
                            <tr>
                                <td>Unit Head</td>
                                <td>Therese Basco-Uy</td>
                                <td>Approved</td>
                                <td>2020-11-08</td>
                            </tr>
                            <tr>
                                <td>Department Head</td>
                                <td>LOL Dunno</td>
                                <td>For Approval</td>
                                <td></td>
                            </tr>
                            
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
            
        
        </div>
	
	
    )
  }
  
  export default LicensureExam
