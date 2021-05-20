import Link from 'next/link'

function FacultyList(props){ console.log(props.children);
	let chem
	let mcsu
	let physgeo
	if(props.children != null) {
		chem = Object.keys(props.children).map(key => {
			if (props.children[key].unitId == 1) { 
				let faculty = props.children[key].faculty_units
				let facultyList = Object.keys(faculty).map((index) => {
					let surname = faculty[index].faculty_personal_info.lastName
					let firstName = faculty[index].faculty_personal_info.firstName
					let facultyId = faculty[index].facultyId
					let forApprovalCount = faculty[index].forApprovalCount
					return (
						<a href = {`/faculty/approval/${encodeURIComponent(facultyId)}`} className = "list-group-item list-group-item-action list-group-item-light" forApproval={faculty[index].faculty_personal_info}>
							{surname}, {firstName} 
							<span className="badge badge-danger">{forApprovalCount}</span>
						</a>	
					)
				})

				return (
					<div>
						<h4 align = "center"> {props.children[key].unit} </h4>
						<div className = "list-group">
							{facultyList}
						</div>
					</div>
				); 
			}
        });

		mcsu = Object.keys(props.children).map(key => {
			if (props.children[key].unitId == 2) { 
				let faculty = props.children[key].faculty_units
				let facultyList = Object.keys(faculty).map((index) => {
					let surname = faculty[index].faculty_personal_info.lastName
					let firstName = faculty[index].faculty_personal_info.firstName
					let facultyId = faculty[index].facultyId
					let forApprovalCount = faculty[index].forApprovalCount
					return (
						<a href = {`/faculty/approval/${encodeURIComponent(facultyId)}`} className = "list-group-item list-group-item-action list-group-item-light">
							{surname}, {firstName} 
							<span className="badge badge-danger">{forApprovalCount}</span>
						</a>	
					)
				})

				return (
					<div>
						<h4 align = "center"> {props.children[key].unit} </h4>
						<div className = "list-group">
							{facultyList}
						</div>
					</div>
				); 
			}
        });

		physgeo = Object.keys(props.children).map(key => {
			if (props.children[key].unitId == 3) { 
				let faculty = props.children[key].faculty_units
				let facultyList = Object.keys(faculty).map((index) => {
					let surname = faculty[index].faculty_personal_info.lastName
					let firstName = faculty[index].faculty_personal_info.firstName
					let facultyId = faculty[index].facultyId
					let forApprovalCount = faculty[index].forApprovalCount
					return (
						<a href = {`/faculty/approval/${encodeURIComponent(facultyId)}`} className = "list-group-item list-group-item-action list-group-item-light">
							{surname}, {firstName} 
							<span className="badge badge-danger">{forApprovalCount}</span>
						</a>	
					)
				})

				return (
					<div>
						<h4 align = "center"> {props.children[key].unit} </h4>
						<div className = "list-group">
							{facultyList}
						</div>
					</div>
				); 
			}
        });
    } 
    else{ 
        return(<p align = "center">No approvals needed!</p>)
    }

	return(
		<div>
			<br />
			{chem}
			<br />
			{mcsu}
			<br />
			{physgeo}
		</div>
	)
}

export default FacultyList