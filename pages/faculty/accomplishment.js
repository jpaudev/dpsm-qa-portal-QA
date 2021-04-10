import Layout from '../../components/layout'
import Publication from '../../components/faculty/accomplishments/publication'
import PublicServiceAccomplishment from '../../components/faculty/accomplishments/public-service-accomplishment'
import LicensureExam from '../../components/faculty/accomplishments/licensure-exam'
import TrainingSeminar from '../../components/faculty/accomplishments/training-seminar'
import ResearchGrant from '../../components/faculty/accomplishments/research-grant'
import jwt from 'jsonwebtoken'

function Accomplishments(props) {
    return (
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.personalInfo.lastName + ', ' + props.personalInfo.firstName}>
            <nav>
            <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
		<a className="nav-item nav-link active" id="public-service-accomplishment-tab" data-toggle="tab" href="#public-service-accomplishment" role="tab" aria-controls="public-service-accomplishment" aria-selected="true">Public Service Accomplishments</a>
		<a className="nav-item nav-link" id="publication-tab" data-toggle="tab" href="#publication" role="tab" aria-controls="publication" aria-selected="false">Publications</a>
		<a className="nav-item nav-link" id="training-seminar-tab" data-toggle="tab" href="#training-seminar" role="tab" aria-controls="training-seminar" aria-selected="false">Training/Seminars</a>
		<a className="nav-item nav-link" id="licensure-exam-tab" data-toggle="tab" href="#licensure-exam" role="tab" aria-controls="licensure-exam" aria-selected="false">Licensure Exams</a>
		<a className="nav-item nav-link" id="research-grant-tab" data-toggle="tab" href="#research-grant" role="tab" aria-controls="research-grant" aria-selected="false">Research Grants</a>
            </div>
            </nav>
		<br />
		<br />
            <div className="tab-content" id="nav-tabContent">
	    <div className="tab-pane fade show active" id="public-service-accomplishment" role="tabpanel" aria-labelledby="public-service-accomplishment-tab"><PublicServiceAccomplishment>{ props.publicService }</PublicServiceAccomplishment></div>
	    <div className="tab-pane fade" id="publication" role="tabpanel" aria-labelledby="publication-tab"><Publication>{ props.publications }</Publication></div>
	    <div className="tab-pane fade" id="training-seminar" role="tabpanel" aria-labelledby="training-seminar-tab"><TrainingSeminar>{ props.trainingSeminar }</TrainingSeminar></div>
	    <div className="tab-pane fade" id="licensure-exam" role="tabpanel" aria-labelledby="licensure-exam-tab"><LicensureExam>{ props.licensureExam }</LicensureExam></div>
	    <div className="tab-pane fade" id="research-grant" role="tabpanel" aria-labelledby="research-grant-tab"><ResearchGrant>{ props.researchGrant }</ResearchGrant></div>
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

Accomplishments.getInitialProps = async (appContext) => {
    let data
    let facultyId = 0;
    let token
    if (!appContext.ctx) {
        token = document.cookie
        data = jwt.decode(token)
        facultyId = data.facultyId

    } else {
        console.log('server')
    }

    let url = 'http://localhost:3001/api/faculty/accomplishment/' + facultyId;
    let header = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }

    const personal = await fetch('http://localhost:3001/api/faculty/basic-info/' + facultyId, header)
    const personalInfo = await personal.json()

    const psa = await fetch(url + '/public-service', header)
    const publicService = await psa.json()

    console.log(publicService)

    const pub = await fetch(url + '/publication', header)
    const publications = await pub.json()

    const ts = await fetch(url + '/training-seminar', header)
    const trainingSeminar = await ts.json()

	const le = await fetch(url + '/licensure-exam', header)
    const licensureExam = await le.json()

	const rg = await fetch(url + '/research-grant', header)
    const researchGrant = await rg.json()

    // publications.result.push(personalInfo.result)

    return {
        data: data,
        personalInfo: personalInfo.result,
        publicService: publicService.result,
    	publications: publications.result,
    	trainingSeminar: trainingSeminar.result,
    	licensureExam: licensureExam.result,
    	researchGrant: researchGrant.result
    }
}
  
export default Accomplishments