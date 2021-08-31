import Layout from '../../components/layout'
import jwt from 'jsonwebtoken'
import { parseCookies } from "../../helpers"
import AssignUnitHead from '../../components/unit-head/assign-unit-head'
import ApproveUnitHead from '../../components/dept-chair/role-assignment/approve-unit-head'
import AssignAdminClerk from '../../components/dept-chair/role-assignment/assign-admin-clerk'
import AssignDeptChair from '../../components/dept-chair/role-assignment/assign-dept-chair'

function RoleAssignment(props) {
    return (
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag} >
            { props.data.role == 3 &&
                <nav>
                <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="unit-head-tab" data-toggle="tab" href="#unit-head" role="tab" aria-controls="unit-head" aria-selected="true">
                        Unit Head Assignment {props.roleAssignmentFlag && <span className="badge badge-danger">!</span>}
                    </a>
                    <a className="nav-item nav-link" id="admin-clerk-tab" data-toggle="tab" href="#admin-clerk" role="tab" aria-controls="admin-clerk" aria-selected="false">Admin Clerk Assignment</a>
                    <a className="nav-item nav-link" id="dept-chair-tab" data-toggle="tab" href="#dept-chair" role="tab" aria-controls="dept-chair" aria-selected="false">Department Chair Assignment</a>
                </div>
                </nav>
            }
		<br />
		<br />
            <div className="tab-content" id="nav-tabContent">
                { props.data.role == 2 && 
                    <div className="tab-pane fade show active" id="unit-head" role="tabpanel" aria-labelledby="unit-head-tab">
                        <AssignUnitHead token={props.token.user} role={props.data.role} facultyListInfo={props.facultyListInfo}>{props.roleAssignmentList}</AssignUnitHead>
                    </div>
                }
                { props.data.role == 3 && 
                    <div className="tab-pane fade show active" id="unit-head" role="tabpanel" aria-labelledby="unit-head-tab">
                        <ApproveUnitHead token={props.token.user} role={props.data.role}>{props.roleAssignmentList}</ApproveUnitHead>
                    </div>
                }
            	<div className="tab-pane fade" id="admin-clerk" role="tabpanel" aria-labelledby="admin-clerk-tab">
                    <AssignAdminClerk token={props.token.user} role={props.data.role}>{props.clerkAssignmentList}</AssignAdminClerk>
                </div>
            	<div className="tab-pane fade" id="dept-chair" role="tabpanel" aria-labelledby="dept-chair-tab">
                    <AssignDeptChair token={props.token.user} role={props.data.role}>{props.facultyListInfo}</AssignDeptChair>
                </div>
            </div>
	<style jsx>{`
		a.nav-item:focus{
			background-color:#78b6c2;
		}
		a.nav-item:hover{
			background-color:#78b6c2;
		}
		a.active{
			background-color:#78b6c2;
		}
	`}</style>
        </Layout>
    )
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
	let roleAssignmentList
    let facultyListInfo
    let clerkAssignmentList

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
            
            const personal = await fetch('http://agila.upm.edu.ph:3000/api/faculty/basic-info/' + facultyId, header)
            personalInfo = await personal.json()

            let approvalURL = 'http://agila.upm.edu.ph:3000/api/faculty/approval/' + facultyId
            let accompURL = 'http://agila.upm.edu.ph:3000/api/faculty/reports/accomplishment'
            let empURL = 'http://agila.upm.edu.ph:3000/api/faculty/reports/employment'
            let educURL = 'http://agila.upm.edu.ph:3000/api/faculty/reports/education'
            let roleAssignmentURL = 'http://agila.upm.edu.ph:3000/api/faculty/basic-info/unit/assignment'
            let clerkAssignmentURL = 'http://agila.upm.edu.ph:3000/api/user/admin'
            
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
                roleAssignmentList = await roleAssignments.json()
				roleAssignmentList = roleAssignmentList.result

                const clerkAssignments = await fetch(clerkAssignmentURL, header)
                clerkAssignmentList = await clerkAssignments.json()
				clerkAssignmentList = clerkAssignmentList.result

                if(data.role == 2) {
                    if(roleAssignmentList.approverRemarks != null) roleAssignmentFlag = true

                    const faculty = await fetch('http://agila.upm.edu.ph:3000/api/faculty/basic-info?unitId=' + data.unitId + '&facultyId=' + facultyId, header)

                    facultyListInfo = await faculty.json()
                    facultyListInfo = facultyListInfo.result[0].faculty_units
                } else if(data.role == 3) {
                    if(roleAssignmentList)
                        roleAssignmentFlag = true

                    const faculty = await fetch('http://agila.upm.edu.ph:3000/api/faculty/basic-info/list/all?facultyId=' + facultyId, header)
                    facultyListInfo = await faculty.json()
                    facultyListInfo = facultyListInfo.result
                }
				
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
            approvalList: approvalList,
            accompList,
            empList,
            educList,
            roleAssignmentFlag,
			roleAssignmentList,
            facultyListInfo: facultyListInfo || null,
            clerkAssignmentList
        }
	}
}
  
  export default RoleAssignment