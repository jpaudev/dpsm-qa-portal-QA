import Layout from '../../components/layout'
import Link from 'next/link'
import FacultyLoadSemester from '../../components/faculty/faculty-load/faculty-load-semester'
import NameDisplay from '../../components/name-display'
import jwt from 'jsonwebtoken'

function FacultyLoad(props) {
    return (
        <Layout userId={props.userId} facultyId={props.facultyId} role={props.role} name={props.personalInfo.lastName + ', ' + props.personalInfo.firstName}>
		<br />
		<h2 align = "center"> Faculty Load </h2>
		<NameDisplay />
            <div className="list-group">
		<a className = "list-group-item list-group-item-action list-group-item-secondary" href = "#evaluation_ay20202021" data-toggle = "collapse" aria-controls = "evaluation_ay20202021">AY 2020-2021</a>
            	<div className="list-group collapse" id = "evaluation_ay20202021">
                	<a className = "list-group-item list-group-item-action list-group-item-info" href = "#facultyloadsem1ay20202021" data-toggle = "collapse" aria-controls = "facultyloadsem1ay20202021">1st Semester, AY 2020-2021</a>
			<div id = "facultyloadsem1ay20202021" className = "jumbotron collapse">
				<FacultyLoadSemester />
			</div>
		</div>
		<a className = "list-group-item list-group-item-action list-group-item-secondary" href = "#evaluation_ay20192020" data-toggle = "collapse" aria-controls = "evaluation_ay20192020">AY 2019-2020</a>
		<div className="list-group collapse" id = "evaluation_ay20192020">
                	<a className = "list-group-item list-group-item-action list-group-item-info">Midterm, AY 2019-2020</a>
			<a className = "list-group-item list-group-item-action list-group-item-info">2nd Semester, 2019-2020</a>
			<a className = "list-group-item list-group-item-action list-group-item-info">1st Semester, 2019-2020</a>
		</div>
		<a className = "list-group-item list-group-item-action list-group-item-secondary" href = "#evaluation_ay20182019" data-toggle = "collapse" aria-controls = "evaluation_ay20182019">AY 2018-2019</a>
		<div className="list-group collapse" id = "evaluation_ay20182019">
                	<a className = "list-group-item list-group-item-action list-group-item-info">Midterm, AY 2018-2019</a>
			<a className = "list-group-item list-group-item-action list-group-item-info">2nd Semester, 2018-2019</a>
			<a className = "list-group-item list-group-item-action list-group-item-info">1st Semester, 2018-2019</a>
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

  FacultyLoad.getInitialProps = async (appContext) => {
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

	let header = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
	
	const personal = await fetch('http://localhost:3001/api/faculty/basic-info/' + facultyId, header)
    const personalInfo = await personal.json()

	return {
		data,
		personalInfo: personalInfo.result
	}
}
  
export default FacultyLoad
