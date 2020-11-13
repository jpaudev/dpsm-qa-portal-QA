import Link from 'next/link'
import PublicServiceAccomplishmentForm from './public-service-accomplishment-form'

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
                <PublicServiceAccomplishmentForm />
            </div>   

            </div>
	)
}

export default PublicServiceAccomplishment
