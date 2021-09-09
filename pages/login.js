import Link from 'next/link'
import Head from 'next/head'
import { Formik, Form, Field } from "formik"
import axios from "axios"
import Router from 'next/router'
import jwt from 'jsonwebtoken'
import { useCookies } from "react-cookie"

function Login() {
  let loginDetails = {
    username: "",
    password: "",
  }
  let errorMessage = ""

  const [cookie, setCookie] = useCookies(["user"])
    return (
        <div className = "d-flex justify-content-center" style = {{ backgroundImage: "url(kbblur.jpg)" }}>
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
		<center><img src="/dpsm-seal.png" width="142" height="115" alt="DPSM-QA-Portal" /></center>
		<br />
		<br />
	</div>
	<div className = "jumbotron" id = "login">
          <Formik
            initialValues={loginDetails}
            onSubmit={async (values) => {
              try {
                
                let token = null
                const tokenRes = await axios.post("http://agila.upm.edu.ph:3001/api/login", {
                  upemail: `${values.username}`,
                  password: `${values.password}`
                })

                if(tokenRes.data.success) {
                  setCookie("user", tokenRes.data.result.token, {
                    path: "/",
                    maxAge: 3600, // Expires after 1hr
                    sameSite: true,
                  })
                  token = jwt.decode(tokenRes.data.result.token)
                  let role = token.role
                  if(role == 1) { // faculty 
                    Router.push('/faculty/basic-info')
                  } else if (role == 2 || role == 3) { // unit head or dept. chair
                    Router.push('/faculty')
                  } else if(role == 5) { //admin
                    Router.push('/admin')
                  }
                } else {
                  window.alert('something wrong')
                }
              } catch (err) {
                console.error(err.response.data.errors.[0].message)
                errorMessage = err.response.data.errors.[0].message
                let alert = document.getElementById("alert")
                alert.setAttribute("style", "visibility: visible");
                values.username=""
                values.password=""
                return err
              }
            }}
          >
            {({ values, errors, touched, isSubmitting }) => (
              <Form action="">
                <div className="alert alert-danger" role="alert" id="alert">
                  {errorMessage}
                </div>
                <label htmlFor="email">UP Email:</label>
                <Field className = "form-control" type="text" id="username" name="username" />
                
                <label htmlFor="password">Password:</label>
                <Field className = "form-control" type="password" id="password" name="password" />
		            <br />
		<a href = "#" data-toggle="modal" data-target="#forgot-password">Forgot Password?</a>
		<br />
		<br />
                <button
                  type = "submit"
                  className = "btn btn-primary"
                  disabled = {isSubmitting}
                >
                  Submit
                </button>
                {/*<Link href="/faculty"><input type="submit" className = "btn btn-primary" value="Login"></input></Link>*/}
              </Form>
            )}
          </Formik>
	</div>

	<div className="modal fade" id="forgot-password" tabIndex="-1" role="dialog" aria-labelledby="forgotPasswordLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="forgotPasswordLabel">Forgot Password?</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
			<p> Input the UP Mail account associated with your account for the DPSM QA Portal here. Clicking 'submit' will send an email containing your login credentials
			for this application </p>
                        <form>
                            <hr />
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "recovery-email" id = "recovery-email"> UP Mail Account </label>
                                    <input type = "email" className = "form-control col-md-12" name = "recovery-email" placeholder = "Input UP Mail account" required />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                    </div>
                </div>
            </div>
	
	<style jsx>{`
		.d-flex{
			min-height: 100%;
  			min-height: 100vh; 

  			display: flex;
  			align-items: center;
		}
		.jumbotron#login{
			background-color:#600;
		}
		.jumbotron#logo{
			background-color: #01942b;
		}
		label{
			color:#fff;
		}
    #alert {
      visibility: hidden;
    }
	`}</style>
        </div>
    )
  }
  
  export default Login
