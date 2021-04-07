import Layout from '../../components/layout'
import Router from 'next/router'
import jwt from 'jsonwebtoken'

function Dashboard(props) {
    console.log('dashboard:', props)
	if(props.role == 1) {
        Router.push('/faculty/basic-info')
		return <Layout userId={props.userId} facultyId={props.facultyId} role={props.role} />
	} else if(props.role == 2 || props.role == 3){
        Router.push('/faculty')
		return (
	        <Layout userId={props.userId} facultyId={props.facultyId} role={props.role}>
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
    	let token = document.cookie
	    data = jwt.decode(token)
	} else {
		console.log('server')
	}
	return data
}
  
export default Dashboard