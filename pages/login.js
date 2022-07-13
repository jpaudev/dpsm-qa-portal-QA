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
  //       <div className = "d-flex justify-content-center" style = {{ backgroundImage: "url(../kbblur.jpg)" }}>
	// 	<Head>
  //               <title>DPSM-QA-PORTAL</title>
  //               {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link> */}
  //               <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
  //               <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  //               <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  //               <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  //           </Head>
	// <div className = "jumbotron" id = "logo">
	// 	<h3> DPSM QA PORTAL <br /> <br /></h3>
	// 	<br />
	// 	<br />
	// 	<center><img src="/dpsm-seal.png" width="142" height="115" alt="DPSM-QA-Portal" /></center>
	// 	<br />
	// 	<br />
	// 	<br />
	// 	<br />
	// </div>
	// <div className = "jumbotron" id = "login">
  //         <Formik
  //           initialValues={loginDetails}
  //           onSubmit={async (values) => {
  //             try {
                
  //               let token = null
  //               const tokenRes = await axios.post(process.env.API_URL + "/login", {
  //                 upemail: `${values.username}`,
  //                 password: `${values.password}`
  //               })

  //               if(tokenRes.data.success) {
  //                 setCookie("user", tokenRes.data.result.token, {
  //                   path: "/",
  //                   maxAge: 3600, // Expires after 1hr
  //                   sameSite: true,
  //                 })
  //                 token = jwt.decode(tokenRes.data.result.token)
  //                 let role = token.role
  //                 if(role == 1) { // faculty 
  //                   Router.push('/faculty/basic-info')
  //                 } else if (role == 2 || role == 3) { // unit head or dept. chair
  //                   Router.push('/faculty')
  //                 } else if(role == 5) { //admin
  //                   Router.push('/admin')
  //                 }
  //               } else {
  //                 window.alert('something wrong')
  //               }
  //             } catch (err) {
  //               console.error(err.response.data.errors[0].message)
  //               errorMessage = err.response.data.errors[0].message
  //               let alert = document.getElementById("alert")
  //               alert.setAttribute("style", "visibility: visible");
  //               values.username=""
  //               values.password=""
  //               return err
  //             }
  //           }}
  //         >
  //           {({ values, errors, touched, isSubmitting }) => (
  //             <Form action="">
  //               <div className="alert alert-danger" role="alert" id="alert">
  //                 {errorMessage}
  //               </div>
  //               <label htmlFor="email">UP Email:</label>
  //               <Field className = "form-control" type="text" id="username" name="username" />
                
  //               <label htmlFor="password">Password:</label>
  //               <Field className = "form-control" type="password" id="password" name="password" />
	// 	            <br />
	// 	<Link href = "/forgot-password"><a href = "#">Forgot Password?</a></Link>
	// 	<br />
	// 	<br />
  //               <button
  //                 type = "submit"
  //                 className = "btn btn-primary"
  //                 disabled = {isSubmitting}
  //               >
  //                 Submit
  //               </button>
  //               {/*<Link href="/faculty"><input type="submit" className = "btn btn-primary" value="Login"></input></Link>*/}
  //             </Form>
  //           )}
  //         </Formik>
	// </div>
	
	// <style jsx>{`
	// 	.d-flex{
	// 		min-height: 100%;
  // 			min-height: 100vh; 

  // 			display: flex;
  // 			align-items: center;
	// 	}
	// 	.jumbotron#login{
	// 		background-color:#600;
	// 	}
	// 	.jumbotron#logo{
	// 		background-color: #01942b;
	// 	}
	// 	label{
	// 		color:#fff;
	// 	}
  //   #alert {
  //     visibility: hidden;
  //   }
	// `}</style>
  //       </div>
  <div>
  <Head>
    <title>DPSM-QA-PORTAL</title>
    <link rel="stylesheet" href= '/style.css'></link>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
 </Head>
 
 <div className = "row">
      <div className="col-md-6" id="panel1">
        <div className="img">
          <img src="/logo.png" className="logopic" style={{padding: "25%", height: "100%" }}></img>
        </div>
      </div>
      <div className="col-md-6">
        <div className="login">
          <div className="container">
            <div className="img">
              <img src="/user.png" id="user" alt="user" style={{margin: "auto", width: "150px", height: "150px"}}/>
            </div>
            <br />
            <h2><b>QUALITY ASSURANCE PORTAL</b></h2>
            <h4>University of the Philippines Manila</h4>
            <br />
            
            <div className="login-form">
              <form action="">
                <input type="email" placeholder="UP Mail"/>
                <input type="password" placeholder="Password" />
                <br /> <br />
                <div className="forget-pass">
                  <a href="#">Forgot Password</a>
                </div>
                <br />
                <button className="test" type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
 </div>
 <style jsx>{`
    #panel1{
      background-image: '/upm.jpg';
      background-size: cover; 
      background-color: #800020;
    }
	`}</style>
 </div>
  

    )
  }
  
  export default Login
