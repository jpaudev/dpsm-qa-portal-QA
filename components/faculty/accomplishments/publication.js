import Link from 'next/link'
import PublicationForm from './publication-form'
import NameDisplay from '../../../components/name-display'
import Router from 'next/router'

import deletePublication from '../../../services/faculty/accomplishments/deletePublication'

function Publication(props){
    let content 
    let deletePub = 0
    if(props.children != null) {
        content = Object.keys(props.children).map(key => {
            let pub = props.children[key].faculty_publishers;
            if (props.children[key].proof) {
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
                        <td>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick = {() => {
                                    let file = props.children[key].proof
                                    downloadProof(file)
                                }}
                            >
                                Download
                            </button>
                            <a
                                className ="btn btn-info"
                                href={"http://localhost:3001/" + props.children[key].proof}
                                style = {{ color: 'white' }}
                                target="_blank">
                                Preview
                            </a>
                        </td>
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
                                <a className="btn btn-danger" data-toggle="modal" data-target="#deletePublication" onClick={() => {
                                    setDelete(props.children.[key].publicationId)
                                }}>Delete</a>
                            </div>
                        </td>
                    </tr>
                );    
            } else {
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
                                        <a href = "#">{pub[auth].faculty_personal_info.firstName}, </a>
                                    );
                                }
                            })}
                        </td>
                        <td>
                            <div className = "btn-group">
                                <a className="btn btn-info" data-toggle="modal" data-target="#editPublication">Edit</a>
                                <a className="btn btn-danger" data-toggle="modal" data-target="#deletePublication" onClick={() => {
                                    setDelete(props.children.[key].publicationId)
                                }}>Delete</a>
                            </div>
                        </td>
                    </tr>
                );
            }
        });
    }

    function setDelete(id) {
        deletePub = id
    }

	return(
		<div>
            <h2 align = "center"> Publications </h2>
            <NameDisplay unit = {props.unit} position={props.position} employmentType={props.employmentType}>{props.name}</NameDisplay>
            <div className ="alert alert-success" role="alert" id="publicationalert" style={{visibility:"hidden"}}></div>
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
		<PublicationForm faculty = {props.faculty} token = {props.token} />
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
                        <p> Are you sure you want to delete this publication information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't delete</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick = {async () => {
                            $('#deletePublication').modal('toggle');
                            
                            let alert = document.getElementById("publicationalert")
                            let res = await deletePublication(deletePub, props.token)
                            console.log('res', res);
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) values.message = res.error[0].message
                                else values.message = res.message
                            }
                            
                            $("#publicationalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#publicationalert").slideUp(500);
                            });
                            
                            Router.push('/faculty/accomplishment')
                        }}>Yes, delete</button>
                    </div>
                    </div>
                </div>
            </div>		


		</div>
	)
}

export default Publication