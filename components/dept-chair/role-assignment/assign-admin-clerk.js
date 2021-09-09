import Link from 'next/link'
import { Formik, Form, Field } from 'formik'
import Router from 'next/router'

import deleteClerk from '../../../services/faculty/assignments/deleteClerk'
import ClerkForm from './clerk-form'

function AssignAdminClerk(props) { 
    let content 
    let clerkId = 0

    if(props.children != null) {
        content = Object.keys(props.children).map(key => {
            return(
                <tr key = {props.children[key].userId}>
                    <td>{props.children[key].name}</td>
                    <td>
                        <div className = "btn-group">
                            <a className="btn btn-danger" data-toggle="modal" data-target="#deleteClerk" onClick={() => {
                                setDelete(props.children[key].userId)
                            }}>Delete</a>
                        </div>
                    </td>
                </tr>
            )
        })
    } else {
        content = <td colSpan = "2"><p align = "center">No data available!</p></td>
    }

    function setDelete(id) {
        clerkId = id
    }

    return (
        <div>
		<h2 align = "center"> Admin Clerk Assignment </h2>
        <div className ="alert alert-success" role="alert" id="clerkalert" style={{visibility:"hidden"}}></div>
        <br />
        <div>
            <table className = "table table-striped table-sm">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    {content}
                </tbody>
            </table>
        </div>
        <br />

        <ClerkForm token = { props.token }/>

        <div className="modal fade" id="deleteClerk" tabIndex="-1" role="dialog" aria-labelledby="deleteClerkLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="deleteClerkLabel">Delete Admin Clerk</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <hr />
                    <p> Are you sure you want to delete this admin clerk? </p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't delete</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick = {async () => {
                        let alert = document.getElementById("clerkalert")
                        $('#deleteClerk').modal('toggle'); 

                        let res = await deleteClerk(clerkId, props.token)
                        if(res.success == true) { 
                            alert.className ="alert alert-success"
                            alert.style = "visibility: visible"
                            alert.innerHTML = res.message
                        } else {
                            alert.className = "alert alert-danger"
                            if(res.error) alert.innerHTML = res.error[0].message
                            else alert.innerHTML = res.message
                        }
                        
                        $("#clerkalert").fadeTo(5000, 500).slideUp(500, function(){
                            $("#clerkalert").slideUp(500);
                        });
                        Router.push('/faculty/role-assignment', '/faculty/role-assignment')
                    }}>Yes, delete</button>
                </div>
                </div>
            </div>
        </div>
    
        
        </div>
	
	
    )
  }
  
  export default AssignAdminClerk