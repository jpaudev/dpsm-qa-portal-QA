import Layout from '../../../components/layout'
import Link from 'next/link'
import Router from 'next/router'
import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../../helpers"
import Faculty from "../../../components/faculty/facultyList"

function FacultyList(props) {
    return (
        <Layout userId={props.data.userId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag}>
			<br />
			<h2 align="center" style={{fontSize:"24px"}}>Faculty List</h2>
            <br />
            <Faculty path="info" role={props.data.role} >{props.facultyList}</Faculty>
        </Layout>
    )
  }

  export async function getServerSideProps(context) {
    const token = parseCookies(context.req)
    let data
    let facultyList
    let approvalList
    let unitId = ''
    let roleAssignmentFlag = false

    if (context.res) {
        if (isExpired(token.user) || Object.keys(token).length === 0 && token.constructor === Object) {
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

            if(data.role == 2) {
                unitId += '?unitId=' + data.unitId
            }
            
            const faculty = await fetch(process.env.API_URL + '/faculty/basic-info' + unitId, header)
            facultyList = await faculty.json()

            let approvalURL = process.env.API_URL + '/faculty/approval/' + facultyId
            let roleAssignmentURL = process.env.API_URL + '/faculty/basic-info/unit/assignment'
            if(data.role == 2 || data.role == 3) {
                if(data.role == 2) {
                    approvalURL += '?unitId=' + data.unitId
                    roleAssignmentURL += '?unitId=' + data.unitId
                }

                const approval = await fetch(approvalURL, header)
                approvalList = await approval.json()
                approvalList = approvalList.result

                const roleAssignments = await fetch(roleAssignmentURL, header)
                let roleAssignmentList = await roleAssignments.json()
                roleAssignmentList = roleAssignmentList.result
                if(data.role == 2) {
                    if(roleAssignmentList.approverRemarks != null) roleAssignmentFlag = true
                } else if(data.role == 3 && roleAssignmentList) {
                    roleAssignmentFlag = true 
                }
            } else if(data.role == 1) {
				approvalList = null
			}

        }
    } 

    return {
        props: {
            token: token && token,
            data,
            facultyList: facultyList.result,
            approvalList,
            roleAssignmentFlag
        }
	}
}
  
  export default FacultyList
