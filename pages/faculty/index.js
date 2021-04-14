import Layout from '../../components/layout'
import Router from 'next/router'
import jwt from 'jsonwebtoken'
import { parseCookies } from "../../helpers"

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

Dashboard.getInitialProps = async ({ req, res }) => {
    const token = parseCookies(req)
    let data
    let personalInfo
    if (res) {
        if (Object.keys(token).length === 0 && token.constructor === Object) {
            res.writeHead(301, { Location: "/login" })
            res.end()
        } else {
            data = jwt.decode(token.user)
        
            let facultyId = data.facultyId
        
            let header = {
                headers: {
                    'Authorization': 'Bearer ' + token.user
                }
            }
            
            const personal = await fetch('http://localhost:3001/api/faculty/basic-info/' + facultyId, header)
            personalInfo = await personal.json()
        }
    } 

    return {
        token: token && token,
		data,
		personalInfo: personalInfo.result
	}
}
  
export default Dashboard