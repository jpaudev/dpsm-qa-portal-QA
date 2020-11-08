import Layout from '../../components/layout'

function Dashboard() {
    return (
        <Layout>
            <div className="col-9">
                <div className="container">
                    <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
  }
  
  export default Dashboard