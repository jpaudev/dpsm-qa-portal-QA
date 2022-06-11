import Link from 'next/link'
import Head from 'next/head'
import { Formik, Form, Field } from "formik"
import axios from "axios"
import Router from 'next/router'

function ForgotPassword(props){
	let forgotPasswordDetails = { upemail: "" }
	let message = ""

	return(
	<div className = "d-flex justify-content-center" style = {{ backgroundImage: "url(../kbblur.jpg)" }}>
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
	<div className = "jumbotron" id = "recovery-email">
		<Formik
            initialValues={forgotPasswordDetails}
            onSubmit={async (values) => {
              try {
                const res = await axios.post(process.env.API_URL + "/user/forgot-password", {
                  upemail: `${values.upemail}`,
                })

                if(res.data.success) {
					values.upemail=""
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
              } catch (err) {
                message = err.response.data.error
                let alert = document.getElementById("alert")
                alert.setAttribute("style", "visibility: visible");
				$("#alert").fadeTo(5000, 500).slideUp(500, function(){
                    $("#alert").slideUp(500);
                });
                values.upemail=""
                return err
              }
            }}
          	>
            {({ values, errors, touched, isSubmitting }) => (
              <Form action="">
                <div className="alert alert-danger" role="alert" id="alert">
                  {message}
                </div>

				<p>Input the UP Mail account associated with <br />
				your account for the DPSM QA Portal here. <br />
				Clicking 'Submit' will send an email with <br />
				a link directing you to a reset password page</p>

				<br />

                <label htmlFor="email">UP Email:</label>
				<Field className = "form-control" type="email" id="upemail" name="upemail" />

				<br />

				<Link href = "/login"><a href = "#">Go back to Sign In</a></Link>

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
		.jumbotron#recovery-email{
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
}


export default ForgotPassword