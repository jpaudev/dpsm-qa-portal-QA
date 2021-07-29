import Link from 'next/link'

function Header(props) {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg">
                    <span className="navbar-text">
                        <a className="navbar-brand">
                            <img src="/dpsm-seal.png" width="150" height="150" className="d-inline-block align-top" alt="DPSM-QA-Portal" />
                        </a>
                    </span>
		<h2> DPSM QA PORTAL </h2>
		
		<div className = "ml-auto">
			<h5> Currently Logged In: <Link href = "/settings/change-password"><a> {props.name} </a></Link> </h5>
		</div>
            </nav>
		<style jsx>{`
		.navbar{
			background-color: #910303;
			width:100%;
		}
		h2, h5{
			font-family: Georgia;
			color: #fff;
		}
	`}</style>

        </div>

    )
  }


  
  export default Header
