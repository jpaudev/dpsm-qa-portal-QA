import Link from 'next/link'

function Header(props) {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg">
                    <span className="navbar-text">
                        <a className="navbar-brand">
                            <img src="/dpsm-seal.png" width="70" height="70" className="d-inline-block align-top" alt="DPSM-QA-Portal" />
                        </a>
                    </span>
		<h3> DPSM-HRIS </h3>
		
		<div className = "card ml-auto">
			<div className = "card-header">
				<p align = "center"> Currently Logged In: </p>
			</div>
			<div className = "card-block">
				<Link href = "/settings/change-password"><p align = "center"><a> {props.name} </a></p></Link>
			</div>
		</div>
            </nav>
		<style jsx>{`
		.navbar{
			background-color: #910303;
			width:100%;
		}
	`}</style>

        </div>

    )
  }


  
  export default Header
