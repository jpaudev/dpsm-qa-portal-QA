import Link from 'next/link'

function FacultyList(props){ 
	let chem
	let mcsu
	let physgeo
	if(props.children != null) {
		let path
		if(props.path == "approval") path = '/faculty/approval/'
		else if(props.path == 'admin') path = '/admin/'
		else if(props.path == 'info') path = '/faculty/view/'
		
		chem = Object.keys(props.children).map(key => {
			if (props.children[key].unitId == 1) { 
				let faculty = props.children[key].faculty_units
				let facultyList = Object.keys(faculty).map((index) => {
					let surname = faculty[index].faculty_personal_info.lastName
					let firstName = faculty[index].faculty_personal_info.firstName
					let facultyId = faculty[index].facultyId
					let forApprovalCount = faculty[index].forApprovalCount
					
					let lastUpdated
					if(faculty[index].faculty_personal_info.faculty_updates && faculty[index].faculty_personal_info.faculty_updates[0]) lastUpdated = faculty[index].faculty_personal_info.faculty_updates[0].updatedAt.split('T')[0]
					return (
						<tr>
							<td>
								<div className = "list-group">
									<a href = {`${path + encodeURIComponent(facultyId)}`} className = "list-group-item list-group-item-action list-group-item-light" forApproval={faculty[index].faculty_personal_info}>
										{surname}, {firstName} 
										&nbsp; <span className="badge badge-danger">{forApprovalCount}</span>
										{ props.path == 'info' && props.role == 3 && lastUpdated && ` (Last Updated: ${lastUpdated})` }
									</a>	
								</div>
							</td>
							<td>
								<select className = "form-control">
									<option>Active</option>
									<option>Inactive</option>
								</select>
							</td>
							<td>
								<button className = "btn btn-primary">Approve</button>
								<button className = "btn btn-danger">Reject</button>
							</td>
						</tr>
					)
				})

				return (
					<div>
						<h4 align = "center"> {props.children[key].unit} </h4>
						<table className = "table">
							<tr>
								<th>Name</th>
								<th>Status</th>
								<th></th>
							</tr>
							{facultyList}
						</table>
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
					
					let lastUpdated
					if(faculty[index].faculty_personal_info.faculty_updates && faculty[index].faculty_personal_info.faculty_updates[0]) lastUpdated = faculty[index].faculty_personal_info.faculty_updates[0].updatedAt.split('T')[0]
					return (
						<tr>
							<td>
								<div className = "list-group">
									<a href = {`${path + encodeURIComponent(facultyId)}`} className = "list-group-item list-group-item-action list-group-item-light">
										{surname}, {firstName} 
										&nbsp; <span className="badge badge-danger">{forApprovalCount}</span>
										{ props.path == 'info' && props.role == 3 && lastUpdated && ` (Last Updated: ${lastUpdated})` }
									</a>	
								</div>
							</td>
							<td>
								<select className = "form-control">
									<option>Active</option>
									<option>Inactive</option>
								</select>
							</td>
							<td>
								<button className = "btn btn-primary">Approve</button>
								<button className = "btn btn-danger">Reject</button>
							</td>
						</tr>
					)
				})

				return (
					<div>
						<h4 align = "center"> {props.children[key].unit} </h4>
						<table className = "table">
							<tr>
								<th>Name</th>
								<th>Status</th>
								<th></th>
							</tr>
							{facultyList}
						</table>
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
					
					let lastUpdated
					if(faculty[index].faculty_personal_info.faculty_updates && faculty[index].faculty_personal_info.faculty_updates[0]) lastUpdated = faculty[index].faculty_personal_info.faculty_updates[0].updatedAt.split('T')[0]
					return (
						<tr>
							<td>
								<div className = "list-group">
									<a href = {`${path + encodeURIComponent(facultyId)}`} className = "list-group-item list-group-item-action list-group-item-light">
										{surname}, {firstName} 
										&nbsp; <span className="badge badge-danger">{forApprovalCount}</span>
										{ props.path == 'info' && props.role == 3 && lastUpdated && ` (Last Updated: ${lastUpdated})` }
									</a>	
								</div>
							</td>
							<td>
								<select className = "form-control">
									<option>Active</option>
									<option>Inactive</option>
								</select>
							</td>
							<td>
								<button className = "btn btn-primary">Approve</button>
								<button className = "btn btn-danger">Reject</button>
							</td>
						</tr>
					)
				})

				return (
					<div>
						<h4 align = "center"> {props.children[key].unit} </h4>
						<table className = "table">
							<tr>
								<th>Name</th>
								<th>Status</th>
								<th></th>
							</tr>
							{facultyList}
						</table>
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
