import Link from 'next/link'

function Header() {
    return (
        <div className="row">
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg sticky-top bg-light">
                <Link href="/faculty">
                    <span class="navbar-text">
                        <a className="navbar-brand">
                            <img src="/img/dpsm-seal.png" width="30" height="30" className="d-inline-block align-top" alt="DPSM-QA-Portal" />
                        </a>
                    </span>
                </Link>
            </nav>
        </div>
    )
  }
  
  export default Header