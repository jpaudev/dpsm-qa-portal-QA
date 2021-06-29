import Layout from '../../components/layout'
import { parseCookies } from "../../helpers"
import jwt from 'jsonwebtoken'
import ChangePasswordComponent from '../../components/change-password'

function ChangePassword(props) {
    if(props.data.role != 5) {
        return (
            <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag} >
                <ChangePasswordComponent token={props.token.user}>{props.data}</ChangePasswordComponent>
            </Layout>
        )
    } else {
        return (
            <Layout userId={props.data.userId} role={props.data.role} name={props.data.name}>
                <ChangePasswordComponent token={props.token.user}>{props.data}</ChangePasswordComponent>
            </Layout>
        )
    }
  }

  export async function getServerSideProps(context) {
    const token = parseCookies(context.req)
    let data
    let personalInfo
    let approvalList
    let accompList
    let empList
    let educList
    let roleAssignmentFlag = false

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
        
            if(data.role != 5) {
                let facultyId = data.facultyId
            
                let header = {
                    headers: {
                        'Authorization': 'Bearer ' + token.user
                    }
                }
                
                const personal = await fetch('http://localhost:3001/api/faculty/basic-info/' + facultyId, header)
                personalInfo = await personal.json()
    
                let approvalURL = 'http://localhost:3001/api/faculty/approval/' + facultyId
                let accompURL = 'http://localhost:3001/api/faculty/reports/accomplishment'
                let empURL = 'http://localhost:3001/api/faculty/reports/employment'
                let educURL = 'http://localhost:3001/api/faculty/reports/education'
                let roleAssignmentURL = 'http://localhost:3001/api/faculty/basic-info/unit/assignment'
                
                if(data.role == 2 || data.role == 3) {
                    if(data.role == 2) {
                        approvalURL += '?unitId=' + data.unitId
                        accompURL += '?unitId=' + data.unitId
                        empURL += '?unitId=' + data.unitId
                        educURL += '?unitId=' + data.unitId
                        roleAssignmentURL += '?unitId=' + data.unitId
                    }
    
                    const approval = await fetch(approvalURL, header)
                    approvalList = await approval.json()
                    approvalList = approvalList.result
    
                    const accompReports = await fetch(accompURL, header)
                    accompList = await accompReports.json()
                    accompList = accompList.result
    
                    const empReports = await fetch(empURL, header)
                    empList = await empReports.json()
                    empList = empList.result
    
                    const educReports = await fetch(educURL, header)
                    educList = await educReports.json()
                    educList = educList.result
    
                    const roleAssignments = await fetch(roleAssignmentURL, header)
                    let roleAssignmentList = await roleAssignments.json()
                    roleAssignmentList = roleAssignmentList.result
                    if(data.role == 2) {
                        if(roleAssignmentList.approverRemarks != null) roleAssignmentFlag = true
                    } else if(data.role == 3 && roleAssignmentList) {
                        roleAssignmentFlag = true 
                    }
                // } else if(data.role == 1) { 
                //     return {
                //         redirect: {
                //             destination: '/faculty/basic-info',
                //             permanent: true,
                //         },
                //     }
                }
            }
        }
    } 

    if(data.role != 5) {
        return {
            props: {
                token: token && token,
                data,
                personalInfo: personalInfo.result,
                approvalList: approvalList || null,
                accompList: accompList || null,
                empList: empList || null,
                educList: educList || null,
                roleAssignmentFlag
            }
        }
    } else {
        return {
            props: {
                token: token && token,
                data
            }
        }
    }

}

  export default ChangePassword