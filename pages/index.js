import Link from 'next/link'
import Head from 'next/head'
import { Formik, Form, Field } from "formik"
import axios from "axios"
import Router from 'next/router'

function Login() {
  let loginDetails = {
    username: "",
    password: "",
  }

    return (
        <div className = "d-flex justify-content-center">
		<Head>
                <title>DPSM-QA-PORTAL</title>
                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link> */}
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            </Head>
	<div className = "jumbotron">
          <Formik
            initialValues={loginDetails}
            onSubmit={async (values) => {
              try {
                let token = null
                const tokenRes = await axios.post("http://localhost:3001/api/login", {
                  upemail: `${values.username}`,
                  password: `${values.password}`
                })

                console.log(tokenRes)
                if(tokenRes.data.success) {
                  Router.push('/faculty')
                } else {
                  window.alert('something wrong')
                }
              } catch (err) {
                console.error(err)
                let alert = document.getElementById("alert")
                alert.setAttribute("id", "showAlert");
                values.username=""
                values.password=""
                return err
              }
            }}
          >
            {({ values, errors, touched, isSubmitting }) => (
              <Form action="">
                <div className="alert alert-danger" role="alert" id="alert">
                  Invalid credentials!
                </div>
                <label htmlFor="email">UP Email:</label>
                <Field className = "form-control" type="text" id="username" name="username" />
                
                <label htmlFor="password">Password:</label>
                <Field className = "form-control" type="password" id="password" name="password" />
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
	<style jsx>{`
		.d-flex{
			min-height: 100%;
  			min-height: 100vh; 

  			display: flex;
  			align-items: center;
		}
    #alert {
      visibility: hidden;
    }
    #showAlert {
      visibility: visible;
    }
	`}</style>
        </div>
    )
  }
  
  export default Login
