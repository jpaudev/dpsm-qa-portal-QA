import Link from 'next/link'
import Head from 'next/head'
import { Formik, Form, Field } from "formik"
import axios from "axios"
import Router from 'next/router'

function ResetPassword(props){
    let validated

    if(props.verified) {
        let resetPasswordDetails = { password: "" }
	    let message = ""

        return(
            <div className = "d-flex justify-content-center" style = {{ backgroundImage: "url(../../kbblur.jpg)" }}>
                <Head>
                    <title>DPSM-QA-PORTAL</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                </Head>
            <div className = "jumbotron" id = "logo">
                <h3> DPSM QA PORTAL </h3>
                <br />
                <br />
                <center><img src="/dpsm-seal.png" width="115" height="115" alt="DPSM-QA-Portal" /></center>
                <br />
                <br />
            </div>
            <div className = "jumbotron" id = "reset-password">
                <Formik
                    initialValues={resetPasswordDetails}
                    onSubmit={async (values) => {
                    try {
                        if(!validated) e.preventDefault()
                        else {
                            const res = await axios.post(`${process.env.API_URL}/user/forgot-password/${props.userId}/${props.token}`, {
                                password: `${values.password1}`,
                            })
    
                            if(res.data.success) {
                                values.password1 = ""
                                values.password2 = ""
                                
                                let alert = document.getElementById("alert")
                                message = res.data.message
                                alert.classList.remove("alert-danger")
                                alert.classList.add("alert-info")
                                alert.setAttribute("style", "visibility: visible");
                                window.setTimeout(function(){
                                    Router.push('/login')
                                }, 3000);
                            } else {
                                let alert = document.getElementById("alert")
                                message = res.data.error
                                alert.setAttribute("style", "visibility: visible");
                            }
                        }
                    } catch (err) {
                        message = err.response.data.error.message
                        let alert = document.getElementById("alert")
                        alert.setAttribute("style", "visibility: visible");
                        $("#alert").fadeTo(5000, 500).slideUp(500, function(){
                            $("#alert").slideUp(500);
                        });
                        
                        values.password1 = ""
                        values.password2 = ""

                        return err
                    }
                    }}
                    >
                    {({ values, errors, touched, isSubmitting }) => (
                    <Form action="">
                        <div className="alert alert-danger" role="alert" id="alert">
                        {message}
                        </div>

                        <p>Input and confirm a new password<br />
                        for your DPSM QA Portal account. </p>

                        <br />                        

                        <label htmlFor="new-password">New Password:</label>
                        <Field className = "form-control" type="password" id="password1" name="password1" />
                        <br />                        
                        <label htmlFor="confirm-password">Confirm New Password:</label>
                        <Field className = "form-control" type="password" id="password2" name="password2" onChange={async () => {
                            let alert = document.getElementById("alert")

                            const newPassword = document.getElementById('password1').value
                            const confirmPassword = document.getElementById('password2').value
    
                            if(newPassword != confirmPassword) {
                                alert.className = "alert alert-danger"
                                alert.style = "visibility: visible"
                                alert.innerHTML = 'The passwords do not match'
    
                                validated = false
    
                            } else {
                                alert.style = "visibility: hidden"
                                validated = true
                            }
                        }} />
                        <br />
                        <br />
                        
                        <button type = "submit" className = "btn btn-primary" disabled = {isSubmitting}>Submit</button>
                    </Form>
                    )}
                </Formik>
            </div>
            <style jsx>{`
                .d-flex{
                    min-height: 100%;
                      min-height: 100vh; 
        
                      display: flex;
                      align-items: center;
                }
                .jumbotron#reset-password{
                    background-color:#600;
                }
                .jumbotron#logo{
                    background-color: #01942b;
                }
                label, p{
                    color:#fff;
                }
                #alert {
                    visibility: hidden;
                }
            `}</style>
            </div>
        )
    } else {
        return(
            <div className = "d-flex justify-content-center" style = {{ backgroundImage: "url(../../kbblur.jpg)" }}>
                <Head>
                        <title>DPSM-QA-PORTAL</title>
                        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link> */}
                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        
                
        
                    </Head>
            <div className = "jumbotron" id = "logo">
                <h3> DPSM QA PORTAL </h3>
                <br />
                <br />
                <center><img src="/dpsm-seal.png" width="115" height="115" alt="DPSM-QA-Portal" /></center>
                <br />
                <br />
            </div>
            <div className = "jumbotron" id = "reset-password">
                <h5>Invalid Password Reset Link</h5>
                <br />
                <br />
                <Link href = "/login"><a href = "#">Go back to Sign In</a></Link>
            </div>
            <style jsx>{`
                .d-flex{
                    min-height: 100%;
                      min-height: 100vh; 
        
                      display: flex;
                      align-items: center;
                }
                .jumbotron#reset-password{
                    background-color:#600;
                }
                .jumbotron#logo{
                    background-color: #01942b;
                }
                label, h5{
                    color:#fff;
                }
            `}</style>
            </div>
        )
    }
	
}

export async function getServerSideProps(context) {
	let userId = context.params.slug[0]
    let token = context.params.slug[1]

    const verify = await fetch(`${process.env.API_URL}/user/forgot-password/${userId}/${token}`)
    const verification = await verify.json()
    let verified

    if(verification.success == true) verified = true
    else verified = false

    return {
        props: {
            verified,
            userId,
            token
        }
    }
}

export default ResetPassword