import Layout from '../../components/layout'
import Router from 'next/router'
import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../helpers"
import AccomplishmentCount from '../../components/unit-head/dashboard/accomplishment-count/accomplishment-count'
import EmploymentStatus from '../../components/unit-head/dashboard/employment-status/employment-status'
// import SETResults from '../../components/unit-head/dashboard/SET-results/SET-results'
import DegreeCount from '../../components/unit-head/dashboard/degree/degree'

function Dashboard(props) { 
	if(props.data.role == 1) {
		return (<Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} />)
	} else if(props.data.role == 2 || props.data.role == 3){ 
		return (
	        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag} >

	                <div className="container">
                        <br />
                        <button className = "btn btn-info">Download All Faculty Information</button>
                        <br />
	                    <nav>
            			<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link" id="accomplishment-count-tab" data-toggle="tab" href="#accomplishment-count" role="tab" aria-controls="accomplishment-count" aria-selected="false">Accomplishment Count</a>
                            <a className="nav-item nav-link" id="employment-status-tab" data-toggle="tab" href="#employment-status" role="tab" aria-controls="employment-status" aria-selected="false">Employment Status</a>
			    {/*<a className="nav-item nav-link" id="SET-score-tab" data-toggle="tab" href="#SET-score" role="tab" aria-controls="SET-score" aria-selected="false">SET results</a>*/}
                            <a className="nav-item nav-link" id="degree-tab" data-toggle="tab" href="#degree" role="tab" aria-controls="degree" aria-selected="false">Attained Degrees</a>
            			</div>
            		</nav>
	    		<div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="accomplishment-count" role="tabpanel" aria-labelledby="accomplishment-count-tab"><AccomplishmentCount role={props.data.role} queryList={props.queryList}>{props.accompList}</AccomplishmentCount></div>
                    <div className="tab-pane fade" id="employment-status" role="tabpanel" aria-labelledby="employment-status-tab"><EmploymentStatus role={props.data.role} queryList={props.queryList}>{props.empList}</EmploymentStatus></div>
			    {/*<div className="tab-pane fade" id="SET-score" role="tabpanel" aria-labelledby="SET-score-tab"><SETResults /></div>*/}
				    <div className="tab-pane fade" id="degree" role="tabpanel" aria-labelledby="degree-tab"><DegreeCount role={props.data.role} queryList={props.queryList}>{props.educList}</DegreeCount></div>
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
				a#accomplishment-count-tab.active{
					background-color:#78b6c2;
				}
				nav{
					background-color:#aaa;
				}
			`}</style>
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
    let queryList

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
            
            const personal = await fetch(process.env.API_URL + '/faculty/basic-info/' + facultyId, header)
            personalInfo = await personal.json()

            let approvalURL = process.env.API_URL + '/faculty/approval/' + facultyId
            let accompURL = process.env.API_URL + '/faculty/reports/accomplishment'
            let empURL = process.env.API_URL + '/faculty/reports/employment'
            let educURL = process.env.API_URL + '/faculty/reports/education'
            let roleAssignmentURL = process.env.API_URL + '/faculty/basic-info/unit/assignment'
            
            if(data.role == 2 || data.role == 3) {
                if(data.role == 2) {
                    approvalURL += '?unitId=' + data.unitId
                    roleAssignmentURL += '?unitId=' + data.unitId

                    accompURL += '?unitId=' + data.unitId
                    empURL += '?unitId=' + data.unitId
                    educURL += '?unitId=' + data.unitId
                } else if(data.role == 3) {
                    if(context.query.accomplishment == 1) {
                        accompURL += '?'
                        if(context.query.unitId && context.query.unitId != 0) accompURL += 'unitId=' + context.query.unitId
                    } else if(context.query.employment == 1) {
                        empURL += '?'
                        if(context.query.unitId) empURL += 'unitId=' + context.query.unitId
                    } else if(context.query.degree == 1) {
                        educURL += '?'
                        if(context.query.unitId) educURL += 'unitId=' + context.query.unitId
                    }
                }

                if(context.query.accomplishment == 1) {
                    if(context.query.startDate) accompURL += '&startDate=' + context.query.startDate
                    if(context.query.endDate) accompURL += '&endDate=' + context.query.endDate
                } else if(context.query.employment == 1) {
                    if(context.query.startDate) empURL += '&startDate=' + context.query.startDate
                    if(context.query.endDate) empURL += '&endDate=' + context.query.endDate
                } else if(context.query.degree == 1) {
                    if(context.query.startDate) educURL += '&startDate=' + context.query.startDate
                    if(context.query.endDate) educURL += '&endDate=' + context.query.endDate
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
                    if(roleAssignmentList && roleAssignmentList.approverRemarks != null) roleAssignmentFlag = true
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
            accompList: accompList,
            empList,
            educList: educList || null,
            roleAssignmentFlag,
            queryList: context.query
        }
	}
}
  
export default Dashboard
