import Layout from '../../components/layout'
import Link from 'next/link'
import FacultyLoader from '../../components/faculty/faculty-load/faculty-load'
import NameDisplay from '../../components/name-display'
import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../helpers"

function FacultyLoad(props) {
    return (
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag}>
		<br />
		<FacultyLoader name = { props.data.name } token = { props.token.user } unit = {props.unit} position={props.position} facultyId={props.data.facultyId} role={props.data.role}>
			{props.facultyLoad}
		</FacultyLoader>
	    <style jsx>{`
			.list-group-item-info{
				text-indent:5%;
			}
	    `}</style>
        </Layout>
    )
  }

  export async function getServerSideProps(context) {
	const token = parseCookies(context.req)
    if (context.res) {
        if (isExpired(token.user) || Object.keys(token).length === 0 && token.constructor === Object) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            }
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

	const load = await fetch(process.env.API_URL + '/faculty/load/' + facultyId, header)
    const facultyLoad = await load.json()    

    let url = process.env.API_URL + '/faculty/basic-info/' + facultyId;

    const employ = await fetch(url + '/employment', header)
    let employment = await employ.json()
    let unit = employment.result.faculty_unit.unit.unit
    let position = employment.result.faculty_employment_infos[0].faculty_employment_position.position

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
		props: {
			unit,
			position,
			token,
			data,
			facultyLoad: facultyLoad.result,
			personalInfo: personalInfo.result,
			approvalList,
			roleAssignmentFlag
		}
	}	
}
  
export default FacultyLoad
