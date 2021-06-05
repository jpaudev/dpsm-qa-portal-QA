import Layout from '../../components/layout'
import Link from 'next/link'
import FacultyLoadSemester from '../../components/faculty/faculty-load/faculty-load-semester'
import NameDisplay from '../../components/name-display'
import jwt from 'jsonwebtoken'
import { parseCookies } from "../../helpers"

function FacultyLoad(props) { 
    return (
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag}>
		<br />
		<h2 align = "center"> Faculty Load </h2>
		<NameDisplay />
            <div className="list-group">
		<a className = "list-group-item list-group-item-action list-group-item-secondary" href = "#evaluation_ay20202021" data-toggle = "collapse" aria-controls = "evaluation_ay20202021">AY 2020-2021</a>
            	<div className="list-group collapse" id = "evaluation_ay20202021">
                	<a className = "list-group-item list-group-item-action list-group-item-info" href = "#facultyloadsem1ay20202021" data-toggle = "collapse" aria-controls = "facultyloadsem1ay20202021">1st Semester, AY 2020-2021</a>
			<div id = "facultyloadsem1ay20202021" className = "jumbotron collapse">
				<FacultyLoadSemester />
			</div>
		</div>
		<a className = "list-group-item list-group-item-action list-group-item-secondary" href = "#evaluation_ay20192020" data-toggle = "collapse" aria-controls = "evaluation_ay20192020">AY 2019-2020</a>
		<div className="list-group collapse" id = "evaluation_ay20192020">
                	<a className = "list-group-item list-group-item-action list-group-item-info">Midterm, AY 2019-2020</a>
			<a className = "list-group-item list-group-item-action list-group-item-info">2nd Semester, 2019-2020</a>
			<a className = "list-group-item list-group-item-action list-group-item-info">1st Semester, 2019-2020</a>
		</div>
		<a className = "list-group-item list-group-item-action list-group-item-secondary" href = "#evaluation_ay20182019" data-toggle = "collapse" aria-controls = "evaluation_ay20182019">AY 2018-2019</a>
		<div className="list-group collapse" id = "evaluation_ay20182019">
                	<a className = "list-group-item list-group-item-action list-group-item-info">Midterm, AY 2018-2019</a>
			<a className = "list-group-item list-group-item-action list-group-item-info">2nd Semester, 2018-2019</a>
			<a className = "list-group-item list-group-item-action list-group-item-info">1st Semester, 2018-2019</a>
		</div>
            </div>
	    <style jsx>{`
			.list-group-item-info{
				text-indent:5%;
			}
	    `}</style>
        </Layout>
    )
  }

  FacultyLoad.getInitialProps = async ({ req, res }) => {
	const token = parseCookies(req)
    if (res) {
        if (Object.keys(token).length === 0 && token.constructor === Object) {
            res.writeHead(301, { Location: "/login" })
            res.end()
        }
    } 
    let data = jwt.decode(token.user)

    let facultyId = data.facultyId

	let header = {
        headers: {
            'Authorization': 'Bearer ' + token.user
        }
    }
	
	const personal = await fetch('http://localhost:3001/api/faculty/basic-info/' + facultyId, header)
    const personalInfo = await personal.json()

	let roleAssignmentFlag = false
	let approvalList
    let approvalURL = 'http://localhost:3001/api/faculty/approval/' + facultyId
	let roleAssignmentURL = 'http://localhost:3001/api/faculty/basic-info/unit/assignment'
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
			if(roleAssignmentList[0].faculty_unit_assignment) {
				if(roleAssignmentList[0].faculty_unit_assignment.approverRemarks != null) roleAssignmentFlag = true
			}
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
        approvalList = null
    }

	return {
		data,
		personalInfo: personalInfo.result,
		approvalList,
		roleAssignmentFlag
	}
}
  
export default FacultyLoad
