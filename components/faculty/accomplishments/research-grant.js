import Link from 'next/link'
import ResearchGrantForm from './research-grant-form'
import NameDisplay from '../../../components/name-display'

function ResearchGrant(props){
    const name = props.name
    let content 
    if(props.children != null) {
        content = Object.keys(props.children).map(key => { 
            if(props.children[key].researchGrantId != null) {
                let res = props.children[key].faculty_researchers;
                return (
                    <tr>
                        <td>{props.children[key].researchName}</td>
                        <td>
                            {Object.keys(res).map(auth => {
                            let link = "/faculty/basic-info/" + res[auth].facultyId
                                return (
                                    <a href = {link}>{res[auth].faculty_personal_info.lastName},{res[auth].faculty_personal_info.firstName}, </a>
                                );
                            })}
                            {props.children[key].nonFacultyResearchers}
                        </td>
                        <td>{props.children[key].granter}</td>
                        <td>{props.children[key].amount}</td>
                        <td>{props.children[key].projectedStart} to {props.children[key].projectedEnd}</td>
                        <td>{props.children[key].actualStart}</td>
                        <td>{props.children[key].actualEnd}</td>
                        <td>{props.children[key].researchProgress}</td>
                        <td>
                            {Object.keys(res).map(auth => {
                                if(res[auth].facultyId == props.facultyId) {
                                    if(res[auth].proof) {
                                        return (
                                            <div className = "btn-grp">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    onClick = {() => {
                                                        let file = res[auth].proof
                                                        downloadProof(file)
                                                    }}
                                                >
                                                    Download
                                                </button>
                                                <a
                                                    className ="btn btn-info"
                                                    href={"http://localhost:3001/" + res[auth].proof}
                                                    style = {{ color: 'white' }}
                                                    target="_blank">
                                                    Preview
                                                </a>
                                            </div>
                                        );
                                    } else {
                                        return(<div>None</div>)
                                    }
                                }
                            })}
                        </td>
                        <td>
                            {Object.keys(res).map(auth => {
                                if(res[auth].facultyId == props.facultyId) {
                                    return (
                                        res[auth].status
                                    );
                                }
                            })}
                        </td>
                        
                        <td>
                        {
                            props.facultyFlag && 
                            <div className = "btn-group">
                                <a className="btn btn-info" data-toggle="modal" data-target="#editPublication">Edit</a>
                                <a className="btn btn-danger" data-toggle="modal" data-target="#deletePublication" onClick={() => {
                                    setDelete(props.children.[key].publicationId)
                                }}>Delete</a>
                            </div>
                        }
                        {
                            !props.facultyFlag && 
                            <div className = "btn-grp">
                                <a className="btn btn-info" data-toggle="modal" data-target="#" onClick={() => {
                                    
                                }}>Approve</a>
                                <a className="btn btn-danger" data-toggle="modal" data-target="#" onClick={() => {
                                    
                                }}>Reject</a>
                            </div>
                        }
                        </td>
                    </tr>
                );
            }
        });
    }
    else {
        content = <td colspan = "10">No data available!</td>
    }

	return(
		<div>
            <h2 align = "center"> Research Grants </h2>
            <NameDisplay unit = {props.unit} position={props.position} employmentType={props.employmentType}>{name}</NameDisplay>
			<div>
	<table className = "table table-striped table-sm">
		<tbody>
			<tr>
				<th>Research Project</th>
				<th>Researcher/s</th>
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
            {content}
		</tbody>
	</table>	
	</div>
    { 
        props.facultyFlag &&
        <div>
            <ResearchGrantForm />
        </div>
    }

	<div className="modal fade" id="editResearchGrant" tabIndex="-1" role="dialog" aria-labelledby="editResearchGrantLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editResearchGrantLabel">Update Research Grant Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchUpdate"> Research Project </label>
                                    <input className = "form-control" type = "text" name = "ResearchUpdate" placeholder = "Input research name" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchSponsorUpdate"> Sponsor </label>
                                    <input className = "form-control" type = "text" name = "ResearchSponsorUpdate" placeholder = "Input sponsor" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchAmountUpdate"> Amount </label>
                                    <input className = "form-control" type = "text" name = "ResearchAmountUpdate" placeholder = "Input amount" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchStartDateUpdate"> Start Date (Actual) </label>
                                    <input type = "date" className = "form-control" name = "ResearchStartDateUpdate" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchEndDateUpdate"> End Date (Actual) </label>
                                    <input type = "date" className = "form-control" name = "ResearchEndDateUpdate" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchProjectedStartDateUpdate"> Start Date (Projected) </label>
                                    <input type = "date" className = "form-control" name = "ResearchProjectedStartDateUpdate" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchProjectedEndDateUpdate"> End Date (Projected) </label>
                                    <input type = "date" className = "form-control" name = "ResearchProjectedEndDateUpdate" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchProgressUpdate"> Progress </label>
                                    <input className = "form-control" type = "text" name = "ResearchProgressUpdate" placeholder = "Input progress" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchAuthorNonDPSMUpdate"> Authors (non-DPSM) </label>
                                    <input className = "form-control" type = "text" name = "ResearchAuthorNonDPSMUpdate" placeholder = "Input all authors outside DPSM (separate names with commas)" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchAuthorDPSMUpdate"> Authors (DPSM) </label>
                                    <input className = "form-control" type = "text" name = "ResearchAuthorDPSMUpdate" placeholder = "Input author (must be from DPSM)" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchProofUpdate"> Proof </label>
                                    <input type = "file" className = "form-control-file" name = "ResearchProofUpdate" />
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
        
            <div className="modal fade" id="deleteResearchGrant" tabIndex="-1" role="dialog" aria-labelledby="deleteResearchGrantLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteResearchGrantLabel">Delete Research Grant Information</h5>
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

export default ResearchGrant
