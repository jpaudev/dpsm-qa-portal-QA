import Link from 'next/link'
import Head from 'next/head'

function ForgotPassword(){
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
	<div className = "jumbotron" id = "recovery-email">
		<h5> Input the UP Mail account associated with</h5>
		<h5>your account for the DPSM QA Portal here.</h5> 
		<h5>Clicking 'submit' will send an email with </h5>
		<h5>a link directing you to a reset password page</h5>
            <form action="">
                <label htmlFor="recovery-email">UP Email:</label>
                <input className = "form-control" type="email" id="recovery-email" name="recovery-email" />

		<br />
		<br />
                <Link href = "/reset-password"><input type="submit" className = "btn btn-primary" value="Submit"></input></Link>
            </form>
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
		label, h5{
			color:#fff;
		}
	`}</style>
	</div>
	)
}

export default ForgotPassword