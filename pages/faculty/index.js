import Layout from '../../components/layout'
import Router from 'next/router'
import jwt from 'jsonwebtoken'

function Dashboard(props) {
	console.log(props)
	if(props.role == 1) {
		Router.push('/faculty/basic-info')
		return <Layout user={props}/>
	} else {
		return (
	        <Layout>
	        	{/*props*/}
	            <div className="col-9">
	                <div className="container">
	                    DASHBOARD
	                </div>
	            </div>
	        </Layout>
	    )	
	}
    
}

Dashboard.getInitialProps = async (appContext) => {
    let data
    if (!appContext.ctx) {
        // console.log('client')
    	let token = document.cookie
    	// console.log(token)
	    data = jwt.decode(token)
	    // console.log(data)	
	} else {
		console.log('server')
	}
	return data
}
  
export default Dashboard