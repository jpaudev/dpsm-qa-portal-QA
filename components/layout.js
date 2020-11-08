import Header from './header'
import Head from 'next/head'
import Sidebar from './sidebar'

function Layout(props) {
    return (
        <div>
            <Head>
                <title>DPSM-QA-PORTAL</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            </Head>
            <div className="row"><Header /></div>
            <div className="row">
                <Sidebar />
                { props.children }
            </div>
        </div>
    )
  }
  
  export default Layout