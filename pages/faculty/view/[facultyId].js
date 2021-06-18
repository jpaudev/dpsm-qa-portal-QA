import Layout from '../../../components/layout'
import PersonalInfo from '../../../components/faculty/basic-info/personal-info'
import Education from '../../../components/faculty/basic-info/education'
import WorkExperience from '../../../components/faculty/basic-info/work-experience'
import Publication from '../../../components/faculty/accomplishments/publication'
import PublicServiceAccomplishment from '../../../components/faculty/accomplishments/public-service-accomplishment'
import LicensureExam from '../../../components/faculty/accomplishments/licensure-exam'
import TrainingSeminar from '../../../components/faculty/accomplishments/training-seminar'
import ResearchGrant from '../../../components/faculty/accomplishments/research-grant'
import Evaluation from '../../../components/unit-head/faculty-list/evaluation/evaluation'
import FacultySET from '../../../components/unit-head/faculty-list/SET/SET'

import jwt from 'jsonwebtoken'
import { parseCookies } from "../../../helpers"

function ViewFaculty(props) {

    return (
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag}>
            <nav>
            <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab-main" role="tablist">
				<a className="nav-item nav-link active" id="basic-info-tab" data-toggle="tab" href="#basic-info" role="tab" aria-controls="basic-info" aria-selected="true">Basic Information</a>
				<a className="nav-item nav-link" id="accomplishments-tab" data-toggle="tab" href="#accomplishments" role="tab" aria-controls="accomplishments" aria-selected="false">Accomplishments</a>
				<a className="nav-item nav-link" id="evaluation-tab" data-toggle="tab" href="#evaluation" role="tab" aria-controls="evaluation" aria-selected="false">Peer Evaluation</a>
				<a className="nav-item nav-link" id="SET-tab" data-toggle="tab" href="#SET" role="tab" aria-controls="SET" aria-selected="false">SET</a>
            </div>
            <div className="tab-content" id="nav-tabContent-main">
	    		<div className="tab-pane fade show active" id="basic-info" role="tabpanel" aria-labelledby="basic-info-tab">
				    <nav>
           				<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab-basic-info" role="tablist">
                            <a className="nav-item nav-link active" id="personal-info-tab" data-toggle="tab" href="#personal-info" role="tab" aria-controls="personal-info" aria-selected="true">Personal Information</a>
                            <a className="nav-item nav-link" id="educ-tab" data-toggle="tab" href="#educ" role="tab" aria-controls="educ" aria-selected="false">Education</a>
                            <a className="nav-item nav-link" id="work-exp-tab" data-toggle="tab" href="#work-exp" role="tab" aria-controls="work-exp" aria-selected="false">Work Experience</a>
                        </div>
                    </nav>
				    <div className="tab-content" id="nav-tabContent-basic-info">
                        <div className="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
                            <PersonalInfo token = { props.token.user } unit = {props.unit} position={props.position} employmentType={props.employmentType} facultyFlag={false}>{ props.personalInfo }</PersonalInfo>
                        </div>
                        <div className="tab-pane fade" id="educ" role="tabpanel" aria-labelledby="educ-tab">
                            <Education name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} employmentType={props.employmentType} facultyFlag={false} viewFlag={true}>{ props.education }</Education>
                        </div>
                        <div className="tab-pane fade" id="work-exp" role="tabpanel" aria-labelledby="work-exp-tab">
                            <WorkExperience name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} employmentType={props.employmentType} employment = { props.employment } viewFlag={true}>{ props.workExperience }</WorkExperience>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="accomplishments" role="tabpanel" aria-labelledby="accomplishments-tab">
                    <nav>
                        <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab-accomplishment" role="tablist">
                            <a className="nav-item nav-link active" id="public-service-accomplishment-tab" data-toggle="tab" href="#public-service-accomplishment" role="tab" aria-controls="public-service-accomplishment" aria-selected="true">Public Service Accomplishments</a>
                            <a className="nav-item nav-link" id="publication-tab" data-toggle="tab" href="#publication" role="tab" aria-controls="publication" aria-selected="false">Publications</a>
                            <a className="nav-item nav-link" id="training-seminar-tab" data-toggle="tab" href="#training-seminar" role="tab" aria-controls="training-seminar" aria-selected="false">Training/Seminars</a>
                            <a className="nav-item nav-link" id="licensure-exam-tab" data-toggle="tab" href="#licensure-exam" role="tab" aria-controls="licensure-exam" aria-selected="false">Licensure Exams</a>
                            <a className="nav-item nav-link" id="research-grant-tab" data-toggle="tab" href="#research-grant" role="tab" aria-controls="research-grant" aria-selected="false">Research Grants</a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent-accomplishment">
                        <div className="tab-pane fade show active" id="public-service-accomplishment" role="tabpanel" aria-labelledby="public-service-accomplishment-tab">
                            <PublicServiceAccomplishment name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} employmentType={props.employmentType} facultyFlag={false} viewFlag={true}>{ props.publicService }</PublicServiceAccomplishment>
                        </div>
                        <div className="tab-pane fade" id="publication" role="tabpanel" aria-labelledby="publication-tab">
                            <Publication faculty = { props.faculty } name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} employmentType={props.employmentType} facultyFlag={false} facultyId={props.pathFacultyId} viewFlag={true}>{ props.publications }</Publication></div>
                        <div className="tab-pane fade" id="training-seminar" role="tabpanel" aria-labelledby="training-seminar-tab">
                            <TrainingSeminar name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} employmentType={props.employmentType} facultyFlag={false} viewFlag={true}>{ props.trainingSeminar }</TrainingSeminar>
                        </div>
                        <div className="tab-pane fade" id="licensure-exam" role="tabpanel" aria-labelledby="licensure-exam-tab">
                            <LicensureExam name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} employmentType={props.employmentType} facultyFlag={false} viewFlag={true}>{ props.licensureExam }</LicensureExam>
                        </div>
                        <div className="tab-pane fade" id="research-grant" role="tabpanel" aria-labelledby="research-grant-tab">
                            <ResearchGrant name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} employmentType={props.employmentType} facultyFlag={false} facultyId={props.pathFacultyId} viewFlag={true}>{ props.researchGrant }</ResearchGrant>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="evaluation" role="tabpanel" aria-labelledby="evaluation-tab">
                    <Evaluation />
                </div>
                <div className="tab-pane fade" id="SET" role="tabpanel" aria-labelledby="SET-tab">
                    <FacultySET />
                </div>
            </div>

            </nav>
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
    
    let userFacultyId = data.facultyId
    let facultyId
    let status = '?status='
    
    if(context.params.facultyId != userFacultyId && (data.role == 2 || data.role == 3) ) {
        facultyId = context.params.facultyId
    } else {
        return {
            redirect: {
                destination: '/faculty',
                permanent: true,
            },
        }
    }

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
    let employmentType = employmentInfo.result.faculty_employment_infos[0].faculty_employment_position.employmentType

    const personal = await fetch('http://localhost:3001/api/faculty/basic-info/' + facultyId, header)
    const personalInfo = await personal.json()
    let name = personalInfo.result.lastName + ', ' + personalInfo.result.firstName

    const educ = await fetch('http://localhost:3001/api/faculty/basic-info/' + facultyId + '/education' + status, header)
    let education = await educ.json()

    const work = await fetch('http://localhost:3001/api/faculty/basic-info/' + facultyId + '/work-exp', header)
    let workExperience = await work.json()

    const fac = await fetch('http://localhost:3001/api/faculty/basic-info/list/all', header)
    const faculty = await fac.json()

    const psa = await fetch(url + '/public-service' + status, header)
    const publicService = await psa.json()

    const pub = await fetch(url + '/publication' + status, header)
    const publications = await pub.json()

    const ts = await fetch(url + '/training-seminar' + status, header)
    const trainingSeminar = await ts.json()

	const le = await fetch(url + '/licensure-exam' + status, header)
    const licensureExam = await le.json()

	const rg = await fetch(url + '/research-grant' + status, header)
    const researchGrant = await rg.json()

    let approvalList
    let approvalURL = 'http://localhost:3001/api/faculty/approval/' + userFacultyId

    let roleAssignmentFlag = false
    let roleAssignmentURL = 'http://localhost:3001/api/faculty/basic-info/unit/assignment'
    if(data.role == 2 || data.role == 3) {
        if(data.role == 2) {
            approvalURL += '?unitId=' + data.unitId
            roleAssignmentURL += '?unitId=' + data.unitId
        }

        const approval = await fetch(approvalURL, header)
        approvalList = await approval.json()

        const roleAssignments = await fetch(roleAssignmentURL, header)
        let roleAssignmentList = await roleAssignments.json()
        roleAssignmentList = roleAssignmentList.result
        if(data.role == 2) {
            if(roleAssignmentList.approverRemarks != null) roleAssignmentFlag = true
        } else if(data.role == 3 && roleAssignmentList) {
            roleAssignmentFlag = true 
        }
    }

    return {
        props: {
            token: token && token,
            data: data,
            name,
            unit,
            position,
            employmentType,
            pathFacultyId: context.params.facultyId,
            faculty: faculty.result,
            personalInfo: personalInfo.result,
            education: education.result,
            employment: employmentInfo.result,
            workExperience: workExperience.result,
            publicService: publicService.result,
            publications: publications.result,
            trainingSeminar: trainingSeminar.result,
            licensureExam: licensureExam.result,
            researchGrant: researchGrant.result,
            approvalList: approvalList.result,
            roleAssignmentFlag
        }
    }
}
  
export default ViewFaculty