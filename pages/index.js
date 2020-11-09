import Link from 'next/link'
import Head from 'next/head'

function Login() {
    return (
        <div>
		<Head>
                <title>DPSM-QA-PORTAL</title>
                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link> */}
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            </Head>
            <form action="">
                <label htmlFor="email">UP Email:</label>
                <input className = "form-control col-md-3 float-center" type="text" id="email" name="email" />
                
                <label htmlFor="password">Password:</label>
                <input className = "form-control col-md-3 float-center" type="text" id="password" name="password" />
		<br />
                <Link href="/faculty"><input type="submit" className = "btn btn-primary" value="Login"></input></Link>
            </form>
        </div>
    )
  }
  
  export default Login