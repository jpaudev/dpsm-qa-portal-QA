import Layout from '../../components/layout'
import Router from 'next/router'
import jwt from 'jsonwebtoken'
import { parseCookies } from "../../helpers"

function Dashboard(props) { 
	if(props.data.role == 1) {
		return (<Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} />)
	} else if(props.data.role == 2 || props.data.role == 3){
		return (
	        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList}>
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

export async function getServerSideProps(context) {
    const token = parseCookies(context.req)
    let data
    let personalInfo
    let approvalList

    if (context.res) {
        if (Object.keys(token).length === 0 && token.constructor === Object) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            }
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

            let approvalURL = 'http://localhost:3001/api/faculty/approval/' + facultyId
            if(data.role == 2 || data.role == 3) {
                if(data.role == 2) {
                    approvalURL += '?unitId=' + data.unitId
                }

                const approval = await fetch(approvalURL, header)
                approvalList = await approval.json()
                approvalList = approvalList.result
            } else if(data.role == 1) { 
                return {
                    redirect: {
                        destination: '/faculty/basic-info',
                        permanent: true,
                    },
                }
            }
        }
    } 

    return {
        props: {
            token: token && token,
            data,
            personalInfo: personalInfo.result,
            approvalList: approvalList
        }
	}
}
  
export default Dashboard