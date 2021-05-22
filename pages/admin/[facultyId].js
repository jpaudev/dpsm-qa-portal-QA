import Layout from '../../components/layout'
import PersonalInfo from '../../components/faculty/basic-info/personal-info'
import EvaluationSemester from '../../components/faculty/evaluation/evaluation-semester'
import NameDisplay from '../../components/name-display'
import jwt from 'jsonwebtoken'
import { parseCookies } from "../../helpers"

function BasicInfo(props) { 
    return (
        <Layout userId={props.data.userId} role={props.data.role} name={props.data.name}>
            <nav>
                <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="personal-info-tab" data-toggle="tab" data-target="#personal-info" href="#personal-info" role="tab" aria-controls="personal-info" aria-selected="true">Personal Information</a>
                    <a className="nav-item nav-link" id="set-tab" data-toggle="tab" data-target="#set" href="#set" role="tab" aria-controls="set" aria-selected="false">SET Results</a>
                </div>
            </nav>
		<br />
		<br />
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
                    <PersonalInfo token = { props.token.user } unit = {props.unit} position={props.position} employmentType={props.employmentType}>{ props.personalInfo }</PersonalInfo>
                </div>
                <div className="tab-pane fade" id="set" role="tabpanel" aria-labelledby="set-tab">
                    <br />
                    <h2 align = "center"> SET Results </h2>
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
        .list-group-item-info{
            text-indent:5%;
        }
	`}</style>
        </Layout>
    )
  }

  export async function getServerSideProps(context) {
    const token = parseCookies(context.req)

    let personalInfo
    let name
    let unit
    let position
    let employmentType
    let data

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
            
            if(context.params.facultyId) {
                let facultyId = context.params.facultyId
                
                let url = 'http://localhost:3001/api/faculty/basic-info/' + facultyId;
                let header = {
                    headers: {
                        'Authorization': 'Bearer ' + token.user
                    }
                }
            
                const personal = await fetch(url, header)
                personalInfo = await personal.json()
                name = personalInfo.result.lastName + ', ' + personalInfo.result.firstName

                const employment = await fetch('http://localhost:3001/api/faculty/basic-info/' + facultyId + '/employment', header)
                const employmentInfo = await employment.json()
                unit = employmentInfo.result.faculty_unit.unit.unit
                position = employmentInfo.result.faculty_employment_infos[0].faculty_employment_position.position
                employmentType = employmentInfo.result.faculty_employment_infos[0].faculty_employment_position.employmentType
            } else {
                return {
                    redirect: {
                        destination: '/admin',
                        permanent: true,
                    },
                }
            }
            
        }
    } 

    return { 
        props: {
            token: token && token,
            data: data,
            name,
            personalInfo: personalInfo.result,
            unit,
            position,
            employmentType,
        }
    }
}

export default BasicInfo