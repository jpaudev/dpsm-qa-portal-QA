import Layout from '../../components/layout'

function GenerateReports() {
    return (
        <Layout>
		<br />
            <h3 align = "center"> Generate Reports </h3>
		<p align = "center"> Select one or more categories to generate an Excel spreadsheet containing all faculty information pertaining to those categories </p>
		<br />
		<form>
			<div className = "form-check">
				<input class="form-check-input" type="checkbox" value="" id="Education" />
  				<label class="form-check-label" for="Education">
    					&nbsp;Education
  				</label>
			</div>
			<div className = "form-check">
				<input class="form-check-input" type="checkbox" value="" id="WorkExp" />
  				<label class="form-check-label" for="WorkExp">
    					&nbsp;Work Experience
  				</label>
			</div>
			<div className = "form-check">
				<input class="form-check-input" type="checkbox" value="" id="PublicService" />
  				<label class="form-check-label" for="defaultCheck1">
    					&nbsp;Public Service Accomplishments
  				</label>
			</div>
			<div className = "form-check">
				<input class="form-check-input" type="checkbox" value="" id="Publications" />
  				<label class="form-check-label" for="Publications">
    					&nbsp;Publications
  				</label>
			</div>
			<div className = "form-check">
				<input class="form-check-input" type="checkbox" value="" id="TrainingSeminar" />
  				<label class="form-check-label" for="TrainingSeminar">
    					&nbsp;Training/Seminars
  				</label>
			</div>
			<div className = "form-check">
				<input class="form-check-input" type="checkbox" value="" id="ResearchGrants" />
  				<label class="form-check-label" for="ResearchGrants">
    					&nbsp;Research Grants
  				</label>
			</div>
			<div className = "form-check">
				<input class="form-check-input" type="checkbox" value="" id="LicensureExams" />
  				<label class="form-check-label" for="LicensureExams">
    					&nbsp;Licensure Exams
  				</label>
			</div>
			<br />
			<button className = "btn btn-primary" type = "submit">Generate Report</button>
		</form>
        </Layout>
    )
  }
  
 export default GenerateReports