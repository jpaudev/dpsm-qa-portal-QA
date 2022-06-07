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
	 				<a className = "list-group-item list-group-item-action list-group-item-secondary" data-target = {"#" + year[key][0].academicYear} data-toggle = "collapse" aria-controls = {year[key][0].academicYear}>AY {year[key][0].academicYear - 1}-{year[key][0].academicYear}</a>
	 				<div className="list-group" id = {year[key][0].academicYear}>
	 				{	
	 					Object.keys(year).map(i => {
	 						let sem = year[i]
	 						return (
	 							<div>
		 							<a className = "list-group-item list-group-item-action list-group-item-info" data-target = {"#" + sem[0].semester} data-toggle = "collapse" aria-controls = {sem[0].semester}>{sem[0].semester} Semester</a>
		 							<div id = {sem[0].semester} className = "jumbotron">
		 								<FacultyLoadSemester records = {sem} role={props.role} token = {props.token} facultyId = {props.facultyId} />
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
            <NameDisplay unit = {props.unit} position={props.position}>{props.name}</NameDisplay>

			<div className ="alert alert-success" role="alert" id="loadalert" style={{visibility:"hidden"}}></div>
			<div className="list-group">
				{content}
			</div>
		    <style jsx>{`
				.list-group-item-info{
					text-indent:5%;
				}
		    `}</style>
		    { props.role == 5 &&
		    	<FacultyLoadForm token = { props.token } facultyId = { props.facultyId } role={ props.role } />
			}

	    </div>
	)
}

export default FacultyLoader
