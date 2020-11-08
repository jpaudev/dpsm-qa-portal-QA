import Link from 'next/link'

function Header() {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link href="/faculty">
                <a className="navbar-brand">
                    <img src="/img/dpsm-seal.png" width="30" height="30" className="d-inline-block align-top" alt="DPSM-QA-Portal" />
                </a>
            </Link>
        </nav>
    )
  }
  
  export default Header