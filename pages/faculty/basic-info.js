import Layout from '../../components/layout'
import PersonalInfo from '../../components/faculty/basic-info/personal-info'
import Education from '../../components/faculty/basic-info/education'
import EmploymentHistory from '../../components/faculty/basic-info/employment-history'
import WorkExperience from '../../components/faculty/basic-info/work-experience'
import jwt from 'jsonwebtoken'
import { parseCookies } from "../../helpers"

function BasicInfo(props) {
    return (
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.personalInfo.lastName + ', ' + props.personalInfo.firstName}>
            <nav>
            <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="personal-info-tab" data-toggle="tab" href="#personal-info" role="tab" aria-controls="personal-info" aria-selected="true">Personal Information</a>
                <a className="nav-item nav-link" id="educ-tab" data-toggle="tab" href="#educ" role="tab" aria-controls="educ" aria-selected="false">Education</a>
                <a className="nav-item nav-link" id="work-exp-tab" data-toggle="tab" href="#work-exp" role="tab" aria-controls="work-exp" aria-selected="false">Work Experience</a>
            </div>
            </nav>
		<br />
		<br />
            <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
                <PersonalInfo token = { props.token.user } unit = {props.unit} position={props.position} employmentType={props.employmentType}>{ props.personalInfo }</PersonalInfo>
            </div>
            <div className="tab-pane fade" id="educ" role="tabpanel" aria-labelledby="educ-tab">
                <Education name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} employmentType={props.employmentType}>{ props.education }</Education>
            </div>
           <div className="tab-pane fade" id="work-exp" role="tabpanel" aria-labelledby="work-exp-tab">
                <WorkExperience name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} employmentType={props.employmentType}>{ props.workExperience }</WorkExperience>
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

BasicInfo.getInitialProps = async ({ req, res }) => {
    const token = parseCookies(req)

    let personalInfo
    let name
    let employment
    let education
    let workExperience
    let data
    let unit
    let position
    let employmentType

    if (res) {
        if (Object.keys(token).length === 0 && token.constructor === Object) {
            res.writeHead(301, { Location: "/login" })
            res.end()
        }
        else {
            data = jwt.decode(token.user)
        
            let facultyId = data.facultyId
            
            let url = 'http://localhost:3001/api/faculty/basic-info/' + facultyId;
            let header = {
                headers: {
                    'Authorization': 'Bearer ' + token.user
                }
            }
        
            const personal = await fetch(url, header)
            personalInfo = await personal.json()
            name = personalInfo.result.lastName + ', ' + personalInfo.result.firstName + ' ' + personalInfo.result.middleName + ' ' + personalInfo.result.suffix

            const employ = await fetch(url + '/employment', header)
            employment = await employ.json()
            unit = employment.result.faculty_unit.unit.unit
            position = employment.result.faculty_employment_infos[0].faculty_employment_position.position
            employmentType = employment.result.faculty_employment_infos[0].faculty_employment_position.employmentType
            
            const educ = await fetch(url + '/education', header)
            education = await educ.json()
        
            const work = await fetch(url + '/work-exp', header)
            workExperience = await work.json()
        
            workExperience.result.push(employment.result)
        }
    } 

    return { 
        token: token && token,
        data: data,
        name,
        unit,
        position,
        employmentType,
        personalInfo: personalInfo.result,
        education: education.result,
        workExperience: workExperience.result
    }
}

export default BasicInfo