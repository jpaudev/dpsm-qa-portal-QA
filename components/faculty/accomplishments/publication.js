import Link from 'next/link'
import PublicationForm from './publication-form'
import NameDisplay from '../../../components/name-display'

function Publication(props){
    const name = props.children[props.children.length-1].lastName + ', ' + props.children[props.children.length-1].firstName + ' ' + props.children[props.children.length-1].middleName
    let content = Object.keys(props.children).map(key => {
        if(props.children[key].publicationId != null) {
            let pub = props.children[key].faculty_publishers;
            return (
                <tr key = {props.children.[key].publicationId}>
                    <td>{props.children[key].title}</td>
                    <td>
                        {Object.keys(pub).map(auth => {
                            return (
                                <a href = "#">{pub[auth].faculty_personal_info.firstName}, </a>
                            );
                        })}
                        {props.children[key].nonFacultyAuthors}
                    </td>
                    <td>{props.children[key].publicationDate}</td>
                    <td>{props.children[key].url}</td>
                    <td>{props.children[key].citation}</td>
                    <td></td>
                    <td>
                        {Object.keys(pub).map(auth => {
                            if(pub[auth].facultyId == 9) {
                                return (
                                    pub[auth].status
                                );
                            }
                        })}
                    </td>
                    <td>
                        <div className = "btn-group">
                            <a className="btn btn-info" data-toggle="modal" data-target="#editPublication">Edit</a>
                            <a className="btn btn-danger" data-toggle="modal" data-target="#deletePublication">Delete</a>
                        </div>
                    </td>
                </tr>
            );
        }
    });
	return(
		<div>
            <h2 align = "center"> Publications </h2>
            <NameDisplay unit = {props.unit} position={props.position} employmentType={props.employmentType}>{name}</NameDisplay>
			<div>
	<table className = "table table-striped table-sm">
		<tbody>
			<tr>
				<th>Publication</th>
				<th>Author/s</th>
				<th>Publication Date</th>
				<th>URL</th>
				<th>Citation</th>
				<th>Proof</th>
				<th>Status</th>
                <th>Action</th>
			</tr>
            {content}
		</tbody>
	</table>	
	</div>
	<div>
		<PublicationForm />
	</div>

	<div className="modal fade" id="editPublication" tabIndex="-1" role="dialog" aria-labelledby="editPublicationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editPublicationLabel">Update Publication Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "PublicationUpdate"> Publication </label>
                                    <input className = "form-control" type = "text" name = "PublicationUpdate" placeholder = "Input publication name/title" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "PublicationCitationUpdate"> Citation </label>
                                    <input className = "form-control" type = "text" name = "PublicationCitationUpdate" placeholder = "Input full citation for publication" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "PublicationURLUpdate"> URL </label>
                                    <input className = "form-control" type = "text" name = "PublicationURLUpdate" placeholder = "Input publication URL" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "PublishDateUpdate"> Date Published </label>
                                    <input type = "date" className = "form-control" name = "PublishDateUpdate" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "PublicationAuthorNonDPSMUpdate"> Authors (non-DPSM) </label>
                                    <input className = "form-control" type = "text" name = "PublicationAuthorNonDPSMUpdate" placeholder = "Input all authors outside DPSM (separate names with commas)" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "PublicationAuthorDPSMUpdate"> Authors (DPSM) </label>
                                    <input className = "form-control" type = "text" name = "PublicationAuthorDPSMUpdate" placeholder = "Input author (must be part of DPSM)" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "PublicationProofUpdate"> Proof </label>
                                    <input type = "file" className = "form-control-file" name = "PublicationProofUpdate" />
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
        
            <div className="modal fade" id="deletePublication" tabIndex="-1" role="dialog" aria-labelledby="deletePublicationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deletePublicationLabel">Delete Publication Information</h5>
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

export default Publication
