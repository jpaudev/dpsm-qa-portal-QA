import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../../helpers"

import Layout from '../../../components/layout'
import TrainingSeminar from '../../../components/faculty/accomplishments/training-seminar'
import StatisticCard from '../../../components/StatisticCard'

function Accomplishments(props) { 

    let statistic= [
        {
            title: "APPROVED",
            bgColor1: "#408776", 
            bgColor2: "#8ac790",
            icon: "fact_check"
        },
        {
            title: "VERIFIED",
            bgColor1: "#670067", 
            bgColor2: "#c900c9",
            icon: "fact_check"
        },
        {
            title: "PENDING",
            bgColor1: "#ff8a0e", 
            bgColor2: "#ffbe5c",
            icon: "pending_actions"
        },
        {
            title: "REJECTED",
            bgColor1: "#b3133b", 
            bgColor2: "#ee6184",
            icon: "thumb_down_alt"
        }
    ]

    return (
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag}>
            <StatisticCard data={props.trainingSeminar} statistic={statistic}/>
            <TrainingSeminar name = { props.data.name } token = { props.token.user } unit = {props.data.unit} position={props.data.position} editable={true}>
                { props.trainingSeminar }
            </TrainingSeminar>  
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

    let url = process.env.API_URL + '/faculty/accomplishment/' + facultyId;
    let header = {
        headers: {
            'Authorization': 'Bearer ' + token.user
        }
    }

    const fac = await fetch(process.env.API_URL + '/faculty/basic-info/list/all?facultyId=' + facultyId, header)
    const faculty = await fac.json()

    const ts = await fetch(url + '/training-seminar', header)
    const trainingSeminar = await ts.json()
	
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
            token: token && token,
            data: data,
            faculty: faculty.result,
            trainingSeminar: trainingSeminar.result,
            approvalList: approvalList,
            roleAssignmentFlag
        }
    }
}
  
export default Accomplishments
