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
                        <button className="btn customButton maroon" data-bs-toggle="modal" data-bs-target="#deleteClerk" onClick={() => {
                            setDelete(props.children[key].userId)
                        }}><span className="material-icons-sharp">delete_outline</span>Delete</button>
                    </td>
                </tr>
            )
        })
    } else {
        content = <td colSpan = "2"><br/><p align = "center">No data available.</p></td>
    }

    function setDelete(id) {
        clerkId = id
    }

    return (
        <div className='table-title'>

        <div className="center">
            <h2 align = "center" style={{display: "inline-block", verticalAlign: "bottom"}}> Admin Clerk Assignment </h2>
            {/* Add Button Trigger */}
            <button type="button" className="btn customButton-icon-only maroon" data-bs-toggle="collapse" data-bs-target="#addAdmin" aria-expanded="false" aria-controls="addAdmin" style={{left: "1rem", position: "relative"}}>
                <span className="material-icons-sharp">add</span>
            </button>
        </div>

        <br></br><br></br>

        <div className ="alert alert-success" role="alert" id="clerkalert" style={{visibility:"hidden"}}></div>
        <div className="collapse" id="addAdmin">
            <ClerkForm token = { props.token }/>
        </div>
        
        <br></br><br></br>

        
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {content}
            </tbody>
        </table>
        <br /><br></br><br></br>



        <div className="modal fade" id="deleteClerk" tabIndex="-1" role="dialog" aria-labelledby="deleteClerkLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="deleteClerkLabel">Delete Admin Clerk</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <hr />
                    <p> Are you sure you want to delete this admin clerk? </p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't delete</button>
                    <button type="button" className="btn btn-danger" onClick = {async () => {
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