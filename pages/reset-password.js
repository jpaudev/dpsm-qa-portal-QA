import Link from 'next/link'
import Head from 'next/head'

function ResetPassword(){
	return(
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
		<center><img src="/dpsm-seal.png" width="115" height="115" alt="DPSM-QA-Portal" /></center>
		<br />
		<br />
	</div>
	<div className = "jumbotron" id = "reset-password">
		<h5> Input and confirm a new password</h5>
		<h5>for your DPSM QA Portal account</h5> 
            <form action="">
                <label htmlFor="new-password">New Password:</label>
                <input className = "form-control" type="password" id="new-password" name="new-password" />

			<label htmlFor="confirm-password">Confirm New Password:</label>
                <input className = "form-control" type="password" id="confirm-password" name="confirm-password" />

		<br />
		<br />
                <input type="submit" className = "btn btn-primary" value="Submit"></input>
            </form>
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

export default ResetPassword