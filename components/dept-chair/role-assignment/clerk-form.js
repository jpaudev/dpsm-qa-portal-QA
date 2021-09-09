import React from 'react'
import { Formik, Form, Field } from 'formik'
import Router from 'next/router'

import addClerk from '../../../services/faculty/assignments/addClerk'

class ClerkForm extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let ClerkDetails = {
            name: "",
            upemail: ""
        }

        return(
            <Formik
                initialValues={ClerkDetails}
                onSubmit={async (values, {resetForm}) => {
                    let alert = document.getElementById("clerkalert")

                    let form = document.getElementById('clerkForm')
                    let formData = new FormData(form)

                    let res = await addClerk(formData, this.props.token)
                    if(res.success == true) { 
                        alert.className ="alert alert-success"
                        alert.style = "visibility: visible"
                        alert.innerHTML = res.message
                    } else {
                        alert.className = "alert alert-danger"
                        if(res.error) alert.innerHTML = res.error[0].message
                        else alert.innerHTML = res.message
                    }
                    
                    alert.setAttribute("style", "visibility: visible");
                    $("#clerkalert").fadeTo(5000, 500).slideUp(500, function(){
                        $("#clerkalert").slideUp(500);
                    });

                    resetForm()
                    Router.push('/faculty/role-assignment')
                }}
            >

                {({ values, errors, touched, isSubmitting }) => (
                    <Form id = "clerkForm">
                        <hr />
                        <br />
                        <div className = "form-row">
                            <div className = "form-group col-md-6">
                                <label htmlFor = "ClerkName[]"> Name </label>
                                <input className = "form-control" type = "text" name = "name" placeholder = "Input name" required />
                            </div>
                            <div className = "form-group col-md-6">
                                <label htmlFor = "ClerkEmail[]"> UP Email Address </label>
                                <input className = "form-control" type = "email" name = "upemail" placeholder = "Input UP Email" required />
                            </div>
                        </div>
                        <br />
                        <button
                            type = "submit"
                            className = "btn btn-primary"
                            disabled = {isSubmitting}
                        >
                            Add Clerk
                        </button>
                    </Form>
                )}
            </Formik>
        )
    }
}

export default ClerkForm
