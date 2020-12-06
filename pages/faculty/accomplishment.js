import Layout from '../../components/layout'
import Publication from '../../components/faculty/accomplishments/publication'
import PublicServiceAccomplishment from '../../components/faculty/accomplishments/public-service-accomplishment'
import LicensureExam from '../../components/faculty/accomplishments/licensure-exam'
import TrainingSeminar from '../../components/faculty/accomplishments/training-seminar'
import ResearchGrant from '../../components/faculty/accomplishments/research-grant'

function Accomplishments(props) {
    return (
        <Layout>
            <nav>
            <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                {/* <a className="nav-item nav-link active" id="academic-accomplishment-tab" data-toggle="tab" href="#academic-accomplishment" role="tab" aria-controls="academic-accomplishment" aria-selected="true">Academic Accomplishments</a> */}
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
            {/* <div className="tab-pane fade show active" id="academic-accomplishment" role="tabpanel" aria-labelledby="academic-accomplishment-tab"><AcademicAccomplishment /></div> */}
	    <div className="tab-pane fade show active" id="public-service-accomplishment" role="tabpanel" aria-labelledby="public-service-accomplishment-tab"><PublicServiceAccomplishment /></div>
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

Accomplishments.getInitialProps = async () => {
	let url = 'https://sp-api-test.alun.app/api/';
    const res = await fetch(url + 'token',
    {
        body: JSON.stringify({"username": "username", "password": "password"}),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    })
    
    const access = await res.json()
    let token = access.result
    url = 'https://sp-api-test.alun.app/api/faculty/accomplishment/';
    let header = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }

    const pub = await fetch(url + '9/publication', header)
    const publications = await pub.json()

    const ts = await fetch(url + '9/training-seminar', header)
    const trainingSeminar = await ts.json()

	const le = await fetch(url + '9/licensure-exam', header)
    const licensureExam = await le.json()

	const rg = await fetch(url + '9/research-grant', header)
    const researchGrant = await rg.json()    

    return {
    	publications: publications.result,
    	trainingSeminar: trainingSeminar.result,
    	licensureExam: licensureExam.result,
    	researchGrant: researchGrant.result
    }
}
  
  export default Accomplishments
