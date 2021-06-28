import Layout from '../../components/layout'
import Router from 'next/router'
import jwt from 'jsonwebtoken'
import { parseCookies } from "../../helpers"
import AccomplishmentCount from '../../components/unit-head/dashboard/accomplishment-count/accomplishment-count'
import EmploymentStatus from '../../components/unit-head/dashboard/employment-status/employment-status'
import SETResults from '../../components/unit-head/dashboard/SET-results/SET-results'
import DegreeCount from '../../components/unit-head/dashboard/degree/degree'

function Dashboard(props) { 
	if(props.data.role == 1) {
		return (<Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} />)
	} else if(props.data.role == 2 || props.data.role == 3){
		return (
	        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag} >
	            <div className="col-9">
	                <div className="container">
	                    <nav>
            			<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link" id="accomplishment-count-tab" data-toggle="tab" href="#accomplishment-count" role="tab" aria-controls="accomplishment-count" aria-selected="false">Accomplishment Count</a>
                            <a className="nav-item nav-link" id="employment-status-tab" data-toggle="tab" href="#employment-status" role="tab" aria-controls="employment-status" aria-selected="false">Employment Status</a>
			    {/*<a className="nav-item nav-link" id="SET-score-tab" data-toggle="tab" href="#SET-score" role="tab" aria-controls="SET-score" aria-selected="false">SET results</a>*/}
                            <a className="nav-item nav-link" id="degree-tab" data-toggle="tab" href="#degree" role="tab" aria-controls="degree" aria-selected="false">Attained Degrees</a>
            			</div>
            		</nav>
	    		<div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="accomplishment-count" role="tabpanel" aria-labelledby="accomplishment-count-tab"><AccomplishmentCount>{props.accompList}</AccomplishmentCount></div>
                    <div className="tab-pane fade" id="employment-status" role="tabpanel" aria-labelledby="employment-status-tab"><EmploymentStatus>{props.empList}</EmploymentStatus></div>
			    {/*<div className="tab-pane fade" id="SET-score" role="tabpanel" aria-labelledby="SET-score-tab"><SETResults /></div>*/}
				    <div className="tab-pane fade" id="degree" role="tabpanel" aria-labelledby="degree-tab"><DegreeCount>{props.educList}</DegreeCount></div>
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
            roleAssignmentFlag
        }
	}
}
  
export default Dashboard
