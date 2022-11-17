import { Divider } from '@material-ui/core';
import Link from 'next/link'

function Header() {
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