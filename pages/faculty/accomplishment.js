import Layout from '../../components/layout'
import Publication from '../../components/faculty/accomplishments/publication'
import PublicServiceAccomplishment from '../../components/faculty/accomplishments/public-service-accomplishment'
import LicensureExam from '../../components/faculty/accomplishments/licensure-exam'
import TrainingSeminar from '../../components/faculty/accomplishments/training-seminar'
import ResearchGrant from '../../components/faculty/accomplishments/research-grant'
import jwt from 'jsonwebtoken'
import { parseCookies } from "../../helpers"

function Accomplishments(props) { 
    let name = props.personalInfo.lastName + ', ' + props.personalInfo.firstName

    let psaRejected = false
    if(props.publicService != null) {
        props.publicService.every((e) => {
            if(e.status == 'Rejected') {
                psaRejected = true 
                return false
            }
            return true
        })    
    }

    let publicationRejected = false
    if(props.publications != null) {
        props.publications.forEach((e) => {
            e.faculty_publishers.every((i) => {
                if(i.status == 'Rejected') {
                    publicationRejected = true 
                    return false
                }
                return true
            })
        })
    }

    let tsRejected = false
    if(props.trainingSeminar != null) {
        props.trainingSeminar.every((e) => {
            if(e.status == 'Rejected') {
                tsRejected = true 
                return false
            }
            return true
        })
    }

    let licensureRejected = false
    if(props.licensureExam != null) {
        props.licensureExam.every((e) => {
            if(e.status == 'Rejected') {
                licensureRejected = true 
                return false
            }
            return true
        })
    }

    let rgRejected = false
    if(props.researchGrant != null) {
        props.researchGrant.forEach((e) => {
            e.faculty_researchers.every((i) => {
                if(i.status == 'Rejected') {
                    rgRejected = true 
                    return false
                }
                return true
            })
        })
    }

    return (
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag}>
            <nav>
                <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="public-service-accomplishment-tab" data-toggle="tab" href="#public-service-accomplishment" role="tab" aria-controls="public-service-accomplishment" aria-selected="true">
                        Public Service Accomplishments &nbsp;
                        {psaRejected && <span className="badge badge-danger">!</span>}
                    </a>
                    <a className="nav-item nav-link" id="publication-tab" data-toggle="tab" href="#publication" role="tab" aria-controls="publication" aria-selected="false">
                        Publications &nbsp;
                        {publicationRejected && <span className="badge badge-danger">!</span>}
                    </a>
                    <a className="nav-item nav-link" id="training-seminar-tab" data-toggle="tab" href="#training-seminar" role="tab" aria-controls="training-seminar" aria-selected="false">
                        Training/Seminars &nbsp;
                        {tsRejected && <span className="badge badge-danger">!</span>}
                    </a>
                    <a className="nav-item nav-link" id="licensure-exam-tab" data-toggle="tab" href="#licensure-exam" role="tab" aria-controls="licensure-exam" aria-selected="false">
                        Licensure Exams &nbsp;
                        {licensureRejected && <span className="badge badge-danger">!</span>}
                    </a>
                    <a className="nav-item nav-link" id="research-grant-tab" data-toggle="tab" href="#research-grant" role="tab" aria-controls="research-grant" aria-selected="false">
                        Research Grants &nbsp;
                        {rgRejected && <span className="badge badge-danger">!</span>}
                    </a>
                </div>
            </nav>
		<br />
		<br />
        <div className="tab-content" id="nav-tabContent">
    	    <div className="tab-pane fade show active" id="public-service-accomplishment" role="tabpanel" aria-labelledby="public-service-accomplishment-tab">
                <PublicServiceAccomplishment name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} facultyFlag={true}>
                    { props.publicService }
                </PublicServiceAccomplishment>
            </div>
    	    <div className="tab-pane fade" id="publication" role="tabpanel" aria-labelledby="publication-tab">
                <Publication faculty = { props.faculty } name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} facultyFlag={true} facultyId={props.data.facultyId}>
                    { props.publications }
                </Publication>
            </div>
    	    <div className="tab-pane fade" id="training-seminar" role="tabpanel" aria-labelledby="training-seminar-tab">
                <TrainingSeminar name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} facultyFlag={true}>
                    { props.trainingSeminar }
                </TrainingSeminar>
            </div>
    	    <div className="tab-pane fade" id="licensure-exam" role="tabpanel" aria-labelledby="licensure-exam-tab">
                <LicensureExam name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} facultyFlag={true}>
                    { props.licensureExam }
                </LicensureExam>
            </div>
    	    <div className="tab-pane fade" id="research-grant" role="tabpanel" aria-labelledby="research-grant-tab">
                <ResearchGrant faculty = { props.faculty } name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} facultyFlag={true} facultyId={props.data.facultyId}>
                    { props.researchGrant }
                </ResearchGrant>
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
    if (context.res) {
        if (Object.keys(token).length === 0 && token.constructor === Object) {
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

    let url = 'http://localhost:3001/api/faculty/accomplishment/' + facultyId;
    let header = {
        headers: {
            'Authorization': 'Bearer ' + token.user
        }
    }

    const employment = await fetch('http://localhost:3001/api/faculty/basic-info/' + facultyId + '/employment', header)
    const employmentInfo = await employment.json()
    let unit = employmentInfo.result.faculty_unit.unit.unit
    let position = employmentInfo.result.faculty_employment_infos[0].faculty_employment_position.position

    const personal = await fetch('http://localhost:3001/api/faculty/basic-info/' + facultyId, header)
    const personalInfo = await personal.json()
    let name = personalInfo.result.lastName + ', ' + personalInfo.result.firstName

    const fac = await fetch('http://localhost:3001/api/faculty/basic-info/list/all?facultyId=' + facultyId, header)
    const faculty = await fac.json()

    const psa = await fetch(url + '/public-service', header)
    const publicService = await psa.json()

    const pub = await fetch(url + '/publication', header)
    const publications = await pub.json()

    const ts = await fetch(url + '/training-seminar', header)
    const trainingSeminar = await ts.json()

	const le = await fetch(url + '/licensure-exam', header)
    const licensureExam = await le.json()

	const rg = await fetch(url + '/research-grant', header)
    const researchGrant = await rg.json()

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
            name,
            unit,
            position,
            faculty: faculty.result,
            personalInfo: personalInfo.result,
            publicService: publicService.result,
            publications: publications.result,
            trainingSeminar: trainingSeminar.result,
            licensureExam: licensureExam.result,
            researchGrant: researchGrant.result,
            approvalList: approvalList,
            roleAssignmentFlag
        }
    }
}
  
export default Accomplishments