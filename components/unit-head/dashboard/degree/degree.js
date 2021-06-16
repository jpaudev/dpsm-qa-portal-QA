import DegreeAnalyticsTable from '../../../../components/unit-head/dashboard/degree/degree_dashboard_table'
import DegreeDashboardGraph from '../../../../components/unit-head/dashboard/degree/degree_dashboard_graph'

function DegreeCount(props) {
	let educList = props.children

	let chemBSCount = 0
	let chemMACount = 0
	let chemPHDCount = 0
	let chemOthersCount = 0

	let mcsuBSCount = 0
	let mcsuMACount = 0
	let mcsuPHDCount = 0
	let mcsuOthersCount = 0

	let p6GeoBSCount = 0
	let p6GeoMACount = 0
	let p6GeoPHDCount = 0
	let p6GeoOthersCount = 0

	let tableData = []

	if(educList) {
		educList.forEach(async (e) => { 
			await e.faculty_education_infos.forEach(async (i) => { 
				
	
				if(i.degreeType == 'BS' || i.degreeType == 'BA') {
					if(e.faculty_unit.unitId == 1) {
						chemBSCount++
					} else if(e.faculty_unit.unitId == 2) {
						mcsuBSCount++
					} else if(e.faculty_unit.unitId == 3) {
						p6GeoBSCount++
					}
				} else if(i.degreeType == 'MA' || i.degreeType == 'MS') {
					if(e.faculty_unit.unitId == 1) {
						chemMACount++
					} else if(e.faculty_unit.unitId == 2) {
						mcsuMACount++
					} else if(e.faculty_unit.unitId == 3) {
						p6GeoMACount++
					}
				} else if(i.degreeType == 'PhD') {
					if(e.faculty_unit.unitId == 1) {
						chemPHDCount++
					} else if(e.faculty_unit.unitId == 2) {
						mcsuPHDCount++
					} else if(e.faculty_unit.unitId == 3) {
						p6GeoPHDCount++
					}
				} else {
					if(e.faculty_unit.unitId == 1) {
						chemOthersCount++
					} else if(e.faculty_unit.unitId == 2) {
						mcsuOthersCount++
					} else if(e.faculty_unit.unitId == 3) {
						p6GeoOthersCount++
					}
				}
	
				await tableData.push({
					col1: <a href = {`${'/faculty/view/' + encodeURIComponent(e.facultyId)}`}>{e.lastName + ', ' + e.firstName}</a>,
					col2: i.degreeCert,
					  col3: i.degreeType,
					  col4: i.endDate
				})
			})
		})
	}

	const graphData = [
		{
		  "DegreeAttained": "Bachelor's",
		  "MCSU": mcsuBSCount,
		  "MCSUColor": "hsl(88, 70%, 50%)",
		  "Chem": chemBSCount,
		  "ChemColor": "hsl(102, 70%, 50%)",
		  "Physics/Geology": p6GeoBSCount,
		  "Physics/GeologyColor": "hsl(127, 70%, 50%)",
		},
		{
		  "DegreeAttained": "Master's",
		  "MCSU": mcsuMACount,
		  "MCSUColor": "hsl(109, 70%, 50%)",
		  "Chem": chemMACount,
		  "ChemColor": "hsl(151, 70%, 50%)",
		  "Physics/Geology": p6GeoMACount,
		  "Physics/GeologyColor": "hsl(177, 70%, 50%)",
		},
		{
		  "DegreeAttained": "Doctorate",
		  "MCSU": mcsuPHDCount,
		  "hot dogColor": "hsl(67, 70%, 50%)",
		  "Chem": chemPHDCount,
		  "ChemColor": "hsl(215, 70%, 50%)",
		  "Physics/Geology": p6GeoPHDCount,
		  "Physics/GeologyColor": "hsl(244, 70%, 50%)",
		},
		{
		  "DegreeAttained": "Other",
		  "MCSU": mcsuOthersCount,
		  "hot dogColor": "hsl(234, 70%, 50%)",
		  "Chem": chemOthersCount,
		  "ChemColor": "hsl(302, 70%, 50%)",
		  "Physics/Geology": p6GeoOthersCount,
		  "Physics/GeologyColor": "hsl(178, 70%, 50%)",
		}
	  ]

	return(
		<div>
			<br />
			<h3 align = "center">Attained Degrees</h3>
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
					<a className="nav-item nav-link" id="degree-graph-tab" data-toggle="tab" href="#degree-graph" role="tab" aria-controls="degree-graph" aria-selected="false">Overview</a>
					<a className="nav-item nav-link" id="table-tab" data-toggle="tab" href="#degree-table" role="tab" aria-controls="degree-table" aria-selected="false">Full List</a>
            			</div>
            		</nav>
	    		<div className="tab-content" id="nav-tabContent">
	    			<div className="tab-pane fade show active" id="degree-graph" role="tabpanel" aria-labelledby="degree-graph-tab"><DegreeDashboardGraph data={graphData} /></div>
	    			<div className="tab-pane fade" id="degree-table" role="tabpanel" aria-labelledby="degree-table-tab"><DegreeAnalyticsTable data={tableData} /></div>
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

export default DegreeCount