import Layout from '../../../components/layout'
import PersonalInfo from '../../../components/faculty/basic-info/personal-info'
import Education from '../../../components/faculty/basic-info/education'
import EmploymentHistory from '../../../components/faculty/basic-info/employment-history'
import WorkExperience from '../../../components/faculty/basic-info/work-experience'
import jwt from 'jsonwebtoken'
import { parseCookies } from "../../../helpers"

function BasicInfo(props) { 
    return (
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name}>
            <br />
            <br />
            <div>
                <Education name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} employmentType={props.employmentType} facultyFlag={false}>{ props.education }</Education>
            </div>
        </Layout>
    )
  }

  export async function getServerSideProps(context) {
    const token = parseCookies(context.req)

    let personalInfo
    let name
    let employment
    let education
    let workExperience
    let data
    let unit
    let position
    let employmentType

    if (context.res) {
        if (Object.keys(token).length === 0 && token.constructor === Object) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            }
        }
        else {
            data = jwt.decode(token.user)
            console.log("data", data);
        
            let userFacultyId = data.facultyId
            let facultyId

            if(context.params.facultyId != userFacultyId && (data.role == 2 || data.role == 3) ) {
                facultyId = context.params.facultyId
            } else {
                return {
                    redirect: {
                        destination: '/faculty/basic-info',
                        permanent: true,
                    },
                }
            }
            
            let url = 'http://localhost:3001/api/faculty/basic-info/' + facultyId;
            let header = {
                headers: {
                    'Authorization': 'Bearer ' + token.user
                }
            }
        
            const personal = await fetch(url, header)
            personalInfo = await personal.json()
            name = personalInfo.result.lastName + ', ' + personalInfo.result.firstName

            const employ = await fetch(url + '/employment', header)
            employment = await employ.json()
            unit = employment.result.faculty_unit.unit.unit
            position = employment.result.faculty_employment_infos[0].faculty_employment_position.position
            employmentType = employment.result.faculty_employment_infos[0].faculty_employment_position.employmentType
            
            const educ = await fetch(url + '/education', header)
            education = await educ.json()

            const work = await fetch(url + '/work-exp', header)
            workExperience = await work.json()
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
            personalInfo: personalInfo.result,
            education: education.result,
            employment: employment.result,
            workExperience: workExperience.result
        }
    }
}

export default BasicInfo