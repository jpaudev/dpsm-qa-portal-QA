import Layout from '../../components/layout'
import EvaluationSemester from '../../components/faculty/evaluation/evaluation-semester'
import NameDisplay from '../../components/name-display'
import Link from 'next/link'
import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../helpers"

function Evaluation(props) {
    return (
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag}>
            <br />
		<h2 align = "center"> Peer Evaluation </h2>
		<NameDisplay />
		<div className = "list-group">
			<a className = "list-group-item list-group-item-action list-group-item-secondary" href = "#evaluation_ay20202021" data-toggle = "collapse" aria-controls = "evaluation_ay20202021">AY 2020-2021</a>
				<div id = "evaluation_ay20202021" className = "jumbotron collapse">
					<EvaluationSemester />
				</div>
			
			<a className = "list-group-item list-group-item-action list-group-item-secondary" href = "#evaluation_ay20192020" data-toggle = "collapse" aria-controls = "evaluation_ay20192020">AY 2019-2020</a>
                		<div id = "evaluation_ay20192020" className = "jumbotron collapse">
					<EvaluationSemester />
				</div>

			<a className = "list-group-item list-group-item-action list-group-item-secondary" href = "#evaluation_ay20182019" data-toggle = "collapse" aria-controls = "evaluation_ay20182019">AY 2018-2019</a>
                		<div id = "evaluation_ay20182019" className = "jumbotron collapse">
					<EvaluationSemester />
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

Evaluation.getInitialProps = async ({ req, res }) => {
    const token = parseCookies(req)
    if (res) {
        if (isExpired(token.user) || Object.keys(token).length === 0 && token.constructor === Object) {
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

	const personal = await fetch(process.env.API_URL + '/faculty/basic-info/' + facultyId, header)
    const personalInfo = await personal.json()

    let roleAssignmentFlag = false
	let approvalList
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

	return {
		data,
		personalInfo: personalInfo.result,
		approvalList,
        roleAssignmentFlag
	}
}
  
 export default Evaluation
