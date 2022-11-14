import { Divider } from '@material-ui/core';
import Link from 'next/link'

function Header(props) {
	let roleName = ""
	switch(props.role){
		case 1: 
			roleName = "Faculty"; 
			break;
		case 2: 
			roleName = "Unit Head"; 
			break;
		case 3: 
			roleName = "Department Chair"; 
			break;
		default: 
			roleName = "Admin Clerk"; 
			break;
	}
	
    return (
		// Topbar
		<div className="topbar">
			<div className="topbanner">
				<nav className="navbar">
					<div className="navbar-brand" href="#">
						<img src="/logo.png"className="d-inline-block" alt=""/>
						<span>Quality Assurance Portal</span>
					</div>
				</nav>
			</div>
		</div>
    )
  }

  export default Header