import NameDisplay from '../../../components/name-display'
import FacultyLoadSemester from './faculty-load-semester'
import FacultyLoadForm from './faculty-load-form'

function FacultyLoader(props) {
	let content
	if(props.children != null) {
		let currYear = []
		let all = []
		let year = props.children[0].academicYear
		Object.keys(props.children).map(key => {
			if(year == props.children[key].academicYear && key != props.children.length - 1) {
				currYear.push(props.children[key])
			} else {
				if(key == props.children.length - 1)
					currYear.push(props.children[key])	
				let currSem = []
				let newYear = []
				let sem = currYear[0].semester
				Object.keys(currYear).map(e => {
					if(sem == currYear[e].semester) {
						currSem.push(currYear[e])
					} else {
						newYear.push(currSem)
						currSem = []
						currSem.push(currYear[e])
						sem = currYear[e].semester
					}
					if(e == currYear.length - 1) {
						newYear.push(currSem)
					}		
				})
				all.push(newYear)
				currYear = []
				currYear.push(props.children[key])
				year = props.children[key].academicYear
			}
		});
		
 		content = Object.keys(all).map(key => {
 			year = all[key]
 			return (
 				<div>
	 				<a className = "list-group-item list-group-item-action list-group-item-secondary" href = {"#" + year[key][0].academicYear} data-toggle = "collapse" aria-controls = {year[key][0].academicYear}>AY {year[key][0].academicYear - 1}-{year[key][0].academicYear}</a>
	 				<div className="list-group" id = {year[key][0].academicYear}>
	 				{	
	 					Object.keys(year).map(i => {
	 						let sem = year[i]
	 						return (
	 							<div>
		 							<a className = "list-group-item list-group-item-action list-group-item-info" href = {"#" + sem[0].semester} data-toggle = "collapse" aria-controls = {sem[0].semester}>{sem[0].semester} Semester</a>
		 							<div id = {sem[0].semester} className = "jumbotron">
		 								<FacultyLoadSemester records = {sem} clerkFlag = {props.clerkFlag} facultyFlag = {props.facultyFlag} token = {props.token} facultyId = {props.facultyId} />
		 							</div>
	 							</div>
	 						)
		 				})
		 			}
		 			</div>
	 			</div>
 			)
		})
		
	} else {
        content = <p align = "center">No data available!</p>
    }
	return (
		<div>
			<h2 align = "center"> Faculty Load </h2>
            <NameDisplay unit = {props.unit} position={props.position} employmentType={props.employmentType}>{props.name}</NameDisplay>

			<div className ="alert alert-success" role="alert" id="loadalert" style={{visibility:"hidden"}}></div>
			<div className="list-group">
				{content}
			</div>
			{/*<div className="list-group">
				
				<br />
				<a className = "list-group-item list-group-item-action list-group-item-secondary" href = "#evaluation_ay20202021" data-toggle = "collapse" aria-controls = "evaluation_ay20202021">AY 2020-2021</a>
				<div className="list-group collapse" id = "evaluation_ay20202021">
					<a className = "list-group-item list-group-item-action list-group-item-info" href = "#facultyloadsem1ay20202021" data-toggle = "collapse" aria-controls = "facultyloadsem1ay20202021">1st Semester, AY 2020-2021</a>
					<div id = "facultyloadsem1ay20202021" className = "jumbotron collapse">
						
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
        	</div>*/}
		    <style jsx>{`
				.list-group-item-info{
					text-indent:5%;
				}
		    `}</style>
		    { props.clerkFlag &&
		    	<FacultyLoadForm token = { props.token } facultyId = { props.facultyId } clerkFlag = { props.clerkFlag } facultyFlag = { props.facultyFlag }/>
			}

	    </div>
	)
}

export default FacultyLoader