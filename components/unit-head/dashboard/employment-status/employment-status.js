import EmploymentAnalyticsTable from '../../../../components/unit-head/dashboard/employment-status/employment_dashboard_table'
import EmploymentDashboardGraph from '../../../../components/unit-head/dashboard/employment-status/employment_dashboard_graph'

function EmploymentStatus(props){
	let empList = props.children

	let chemfttCount = 0
	let chemftpCount = 0
	let chemptCount = 0

	let mcsufttCount = 0
	let mcsuftpCount = 0
	let mcsuptCount = 0

	let p6GeofttCount = 0
	let p6GeoftpCount = 0
	let p6GeoptCount = 0

	let tableData = []
	
	empList.forEach(async (e) => {
		if(e.faculty_employment_infos[0].faculty_employment_position.employmentType == 'ftt') {
			if(e.faculty_unit.unitId == 1) chemfttCount++
			else if(e.faculty_unit.unitId == 2) mcsufttCount++
			else if(e.faculty_unit.unitId == 3) p6GeofttCount++

			await tableData.push({
				col1: <a href = {`${'/faculty/view/' + encodeURIComponent(e.facultyId)}`}>{e.lastName + ', ' + e.firstName}</a>,
				col2: e.faculty_employment_infos[0].faculty_employment_position.position,
				col3: 'Full-time',
				col4: 'Tenured',
				col5: e.faculty_employment_infos[0].startDate,
				col6: e.faculty_employment_infos[0].endDate
			})
		}
		if(e.faculty_employment_infos[0].faculty_employment_position.employmentType == 'ftp') {
			if(e.faculty_unit.unitId == 1) chemftpCount++
			else if(e.faculty_unit.unitId == 2) mcsuftpCount++
			else if(e.faculty_unit.unitId == 3) p6GeoftpCount++

			await tableData.push({
				col1: <a href = {`${'/faculty/view/' + encodeURIComponent(e.facultyId)}`}>{e.lastName + ', ' + e.firstName}</a>,
				col2: e.faculty_employment_infos[0].faculty_employment_position.position,
				col3: 'Full-time',
				col4: 'Permanent',
				col5: e.faculty_employment_infos[0].startDate,
				col6: e.faculty_employment_infos[0].endDate
			})
		}
		if(e.faculty_employment_infos[0].faculty_employment_position.employmentType == 'pt') {
			if(e.faculty_unit.unitId == 1) chemptCount++
			else if(e.faculty_unit.unitId == 2) mcsuptCount++
			else if(e.faculty_unit.unitId == 3) p6GeoptCount++

			await tableData.push({
				col1: <a href = {`${'/faculty/view/' + encodeURIComponent(e.facultyId)}`}>{e.lastName + ', ' + e.firstName}</a>,
				col2: e.faculty_employment_infos[0].faculty_employment_position.position,
				col3: 'Part-time',
				col4: '',
				col5: e.faculty_employment_infos[0].startDate,
				col6: e.faculty_employment_infos[0].endDate
			})
		}
	})

	const graphData = [
		{
		  "EmploymentStatus": "Part-time",
		  "MCSU": mcsuptCount,
		  "MCSUColor": "hsl(109, 70%, 50%)",
		  "Chem": chemptCount,
		  "ChemColor": "hsl(151, 70%, 50%)",
		  "Physics/Geology": p6GeoptCount,
		  "Physics/GeologyColor": "hsl(177, 70%, 50%)",
		},
		{
		  "EmploymentStatus": "Full-time (Temporary)",
		  "MCSU": mcsufttCount,
		  "hot dogColor": "hsl(67, 70%, 50%)",
		  "Chem": chemfttCount,
		  "ChemColor": "hsl(215, 70%, 50%)",
		  "Physics/Geology": p6GeofttCount,
		  "Physics/GeologyColor": "hsl(244, 70%, 50%)",
		},
		{
		  "EmploymentStatus": "Full-time (Tenured)",
		  "MCSU": mcsuftpCount,
		  "hot dogColor": "hsl(234, 70%, 50%)",
		  "Chem": chemftpCount,
		  "ChemColor": "hsl(302, 70%, 50%)",
		  "Physics/Geology": p6GeoftpCount,
		  "Physics/GeologyColor": "hsl(178, 70%, 50%)",
		}
	]

	return(
		<div>
			<br />
			<h3 align = "center">Employment Status</h3>
			<div className = "form-group col-md-4 required">
					<label className = "control-label" htmlFor ="DeptUnit"> Department Unit </label>
                    			<select className = "form-control" name = "DeptUnit" required>
						<option>All</option>
						<option>Mathematics and Computing Sciences Unit</option>
						<option>Chemistry Unit</option>
						<option>Physics and Geology Unit</option>
					</select>
                	</div>
			<div className = "form-row">
                    		<div className = "form-group col-md-4 required">
					<label className = "control-label" htmlFor ="StartTimePeriod"> From  </label>
                    			<input className = "form-control" type = "date" name = "StartTimePeriod" required />
                		</div>

				<div className = "form-group col-md-4 required">
					<label className = "control-label" htmlFor ="EndTimePeriod"> To </label>
                    			<input className = "form-control" type = "date" name = "EndTimePeriod" required />
                		</div>
			</div>

			<button className = "btn btn-info"> Change Time Period</button>
			<nav>
            			<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
					<a className="nav-item nav-link" id="employment-graph-tab" data-toggle="tab" href="#employment-graph" role="tab" aria-controls="employment-graph" aria-selected="false">Overview</a>
					<a className="nav-item nav-link" id="employment-table-tab" data-toggle="tab" href="#employment-table" role="tab" aria-controls="employment-table" aria-selected="false">Full List</a>
            			</div>
            		</nav>
	    		<div className="tab-content" id="nav-tabContent">
	    			<div className="tab-pane fade show active" id="employment-graph" role="tabpanel" aria-labelledby="employment-graph-tab"><EmploymentDashboardGraph data={graphData} /></div>
	    			<div className="tab-pane fade" id="employment-table" role="tabpanel" aria-labelledby="employment-table-tab"><EmploymentAnalyticsTable data={tableData} /></div>
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
		</div>
	)
}

export default EmploymentStatus