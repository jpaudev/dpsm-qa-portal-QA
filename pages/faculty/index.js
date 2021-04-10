import Layout from '../../components/layout'
import Router from 'next/router'
import jwt from 'jsonwebtoken'

function Dashboard(props) {
	if(props.data.role == 1) {
        Router.push('faculty/basic-info')
		return (<Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.personalInfo.lastName + ', ' + props.personalInfo.firstName} />)
	} else if(props.data.role == 2 || props.data.role == 3){
		return (
	        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.personalInfo.lastName + ', ' + props.personalInfo.firstName}>
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
	let facultyId = 0;
    let token

	if (!appContext.ctx) {
		token = document.cookie
		data = jwt.decode(token)
		facultyId = data.facultyId
	} else {
		console.log('server')
	}

	let header = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
	
	const personal = await fetch('http://localhost:3001/api/faculty/basic-info/' + facultyId, header)
    const personalInfo = await personal.json()

    return {
		data,
		personalInfo: personalInfo.result
	}
}
  
export default Dashboard