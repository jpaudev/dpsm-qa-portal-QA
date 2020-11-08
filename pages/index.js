import Link from 'next/link'

function Login() {
    return (
        <div>
            <form action="">
                <label for="email">UP Email:</label>
                <input type="text" id="email" name="email" />
                
                <label for="password">Password:</label>
                <input type="text" id="password" name="password" />

                <Link href="/faculty"><input type="submit" value="Login"></input></Link>
            </form>
        </div>
    )
  }
  
  export default Login