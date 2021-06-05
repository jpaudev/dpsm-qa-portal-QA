import Layout from '../../components/layout'
import jwt from 'jsonwebtoken'
import { parseCookies } from "../../helpers"
import AssignUnitHead from '../../components/dept-chair/role-assignment/assign-unit-head'
import AssignAdminClerk from '../../components/dept-chair/role-assignment/assign-admin-clerk'
import AssignDeptChair from '../../components/dept-chair/role-assignment/assign-dept-chair'

function RoleAssignment(props) {
    return (
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag} >
            { props.data.role == 3 &&
                <nav>
                <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="unit-head-tab" data-toggle="tab" href="#unit-head" role="tab" aria-controls="unit-head" aria-selected="true">Unit Head Assignment</a>
                    <a className="nav-item nav-link" id="admin-clerk-tab" data-toggle="tab" href="#admin-clerk" role="tab" aria-controls="admin-clerk" aria-selected="false">Admin Clerk Assignment</a>
                    <a className="nav-item nav-link" id="dept-chair-tab" data-toggle="tab" href="#dept-chair" role="tab" aria-controls="dept-chair" aria-selected="false">Department Chair Assignment</a>
                </div>
                </nav>
            }
		<br />
		<br />
            <div className="tab-content" id="nav-tabContent">
            	<div className="tab-pane fade show active" id="unit-head" role="tabpanel" aria-labelledby="unit-head-tab">
                    <AssignUnitHead token={props.token.user} role={props.data.role} facultyListInfo={props.facultyListInfo}>{props.roleAssignmentList}</AssignUnitHead>
                </div>
            	<div className="tab-pane fade" id="admin-clerk" role="tabpanel" aria-labelledby="admin-clerk-tab"><AssignAdminClerk /></div>
            	<div className="tab-pane fade" id="dept-chair" role="tabpanel" aria-labelledby="dept-chair-tab"><AssignDeptChair /></div>
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
                roleAssignmentList = await roleAssignments.json()
				roleAssignmentList = roleAssignmentList.result
                if(data.role == 2) {
                    if(roleAssignmentList[0].faculty_unit_assignment) {
                        if(roleAssignmentList[0].faculty_unit_assignment.approverRemarks != null) roleAssignmentFlag = true
                    }

                    const faculty = await fetch('http://localhost:3001/api/faculty/basic-info?unitId=' + data.unitId, header)
                    facultyListInfo = await faculty.json()
                    facultyListInfo = facultyListInfo.result[0].faculty_units
                } else if(data.role == 3) {
                    roleAssignmentList.every((e) => {
                        if(e.faculty_unit_assignment != null && !e.faculty_unit_assignment.approverRemarks) {
                            roleAssignmentFlag = true 
                            return false
                        }
                        return true
                    })  
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
            facultyListInfo: facultyListInfo || null
        }
	}
}
  
  export default RoleAssignment