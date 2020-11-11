import Link from 'next/link'

function PublicServiceAccomplishment(){
	return(
	<div>
            <div>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>Accomplishment</th>
			    <th>Description</th>
                            <th>Date</th>
                            <th>Proof</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>Failed COVID-19 response</td>
                            <td>Not implementing mass testing or contact tracing</td>
			    <td>2020-02-29</td>
                            <td><button>Preview proof here (img/pdf)</button></td>
                            <td><a className="btn btn-info" data-toggle="modal" data-target="#ongoing">Ongoing</a></td>
                        </tr>
                        <tr>
                            <td>Corruption</td>
                            <td>Embezzlement of taxpayer funds</td>
			    <td>2020-03-20</td>
                            <td><button>Preview proof here (img/pdf)</button></td>
                            <td><a className="btn btn-info" data-toggle="modal" data-target="#forVerif">For Verification</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <form>
                    <hr />
                    <div className = "form-row">
                        <div className = "col-auto">
                            <button type = "button" className = "btn btn-primary" id = "AddAccomplishment"> Add Accomplishment </button>
                        </div>
                        <div className = "col-auto">
                            <button type = "button" className = "btn btn-danger" id = "RemoveAccomplishment"> Remove a Row </button>
                        </div>
                    </div>
                    <br />
                    <div className = "form-row">
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishment[]"> Accomplishment </label>
                            <input className = "form-control" type = "text" name = "PublicServiceAccomplishment[]" placeholder = "Input accomplishment" />
                        </div>
			<div className = "form-group col-md-4">
                            <label htmlFor = "PublicServiceAccomplishmentDescription[]"> Description </label>
                            <input className = "form-control" type = "text" name = "PublicServiceAccomplishmentDescription[]" placeholder = "Input description" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentDate[]"> Date </label>
                            <input type = "date" className = "form-control" name = "PublicServiceAccomplishmentDate[]" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentProof[]"> Proof </label>
                            <input type = "file" className = "form-control-file" name = "PublicServiceAccomplishmentProof[]" />
                        </div>
                    </div>
                    <div id = "PublicServiceAccomplishment">
                        {/* <!-- Duplicate fields will appear here --> */}
                    </div>
                    <br />
                    <button type = "submit" className = "btn btn-primary"> Submit </button>
                    <hr />
                    
                </form>
            </div>   

            </div>
	)
}

export default PublicServiceAccomplishment