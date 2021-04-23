import Link from 'next/link'
import LicensureExamForm from './licensure-exam-form'
import NameDisplay from '../../../components/name-display'

function LicensureExam(props) {
    const name = props.children[props.children.length-1].lastName + ', ' + props.children[props.children.length-1].firstName + ' ' + props.children[props.children.length-1].middleName
    let content = Object.keys(props.children).map(key => {
        return (
            <tr>
                <td>{props.children[key].examName}</td>
                <td>{props.children[key].rank}</td>
                <td>{props.children[key].examDate}</td>
                <td>{props.children[key].licenseNumber}</td>
                <td>{props.children[key].proof}</td>
                <td>{props.children[key].status}</td>
                <td>
                    <div className = "btn-group">
                        <a className="btn btn-info" data-toggle="modal" data-target="#editLicensureExam">Edit</a>
                        <a className="btn btn-danger" data-toggle="modal" data-target="#deleteLicensureExam">Delete</a>
                    </div>
                </td>
            </tr>
        );
    });
    return (
        <div>
        <h2 align = "center"> Licensure Exams </h2>
        <NameDisplay unit = {props.unit} position={props.position} employmentType={props.employmentType}>{name}</NameDisplay>
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
                        {content}
                        <tr>
                            <td>Mechanical Engineering</td>
                            <td>3</td>
                            <td>2020-11-11</td>
                            <td></td>
                            <td></td>
                            <td>Pending Approval</td>
                            <td>
                                <div className = "btn-group">
                                    <a className="btn btn-info" data-toggle="modal" data-target="#editLicensureExam">Edit</a>
                                    <a className="btn btn-danger" data-toggle="modal" data-target="#deleteLicensureExam">Delete</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
			    <td></td>
                            <td>8</td>
                            <td>2020-1-14</td>
			    <td></td>
                            <td></td>
                            <td>Pending Approval</td>
                            <td>
                                <div className = "btn-group">
                                    <a className="btn btn-info" data-toggle="modal" data-target="#editLicensureExam">Edit</a>
                                    <a className="btn btn-danger" data-toggle="modal" data-target="#deleteLicensureExam">Delete</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
			    <td></td>
                            <td>1</td>
                            <td>2020-4-1</td>
			    <td></td>
                            <td></td>
                            <td>Verified</td>
                            <td>
                                <div className = "btn-group">
                                    <a className="btn btn-info" data-toggle="modal" data-target="#editLicensureExam">Edit</a>
                                    <a className="btn btn-danger" data-toggle="modal" data-target="#deleteLicensureExam">Delete</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <LicensureExamForm />
            </div>   
	
<div className="modal fade" id="editLicensureExam" tabIndex="-1" role="dialog" aria-labelledby="editLicensureExamLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editLicensureExamLabel">Update Licensure Exam Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "LicensureExamUpdate"> Licensure Exam </label>
                                    <input className = "form-control" type = "text" name = "LicensureExamUpdate" placeholder = "Input licensure exam" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "LicensureExamDateUpdate"> Date </label>
                                    <input type = "date" className = "form-control" name = "LicensureExamDateUpdate" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "LicensureExamRankUpdate"> Rank </label>
                                    <input className = "form-control" type = "text" name = "LicensureExamRankUpdate" placeholder = "Input rank" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "LicenseNumeberUpdate"> License Number </label>
                                    <input className = "form-control" type = "text" name = "LicenseNumeberUpdate" placeholder = "Input licensure number" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "LicensureExamProofUpdate"> Proof </label>
                                    <input type = "file" className = "form-control-file" name = "LicensureExamProofUpdate" />
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
        
            <div className="modal fade" id="deleteLicensureExam" tabIndex="-1" role="dialog" aria-labelledby="deleteLicensureExamLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteLicensureExamLabel">Delete Licensure Exam Information</h5>
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
  
  export default LicensureExam
