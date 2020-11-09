import Layout from '../../components/layout'
import PersonalInfo from '../../components/faculty/basic-info/personal-info'
import Education from '../../components/faculty/basic-info/education'
import EmploymentHistory from '../../components/faculty/basic-info/employment-history'
import WorkExperience from '../../components/faculty/basic-info/work-experience'
import Publication from '../../components/faculty/basic-info/publication'

function Dashboard() {
    return (
        <Layout>
            <nav>
            <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                <a className="nav-item nav-link" id="personal-info-tab" data-toggle="tab" href="#personal-info" role="tab" aria-controls="personal-info" aria-selected="true">Personal Information</a>
                <a className="nav-item nav-link" id="emp-history-tab" data-toggle="tab" href="#emp-history" role="tab" aria-controls="emp-history" aria-selected="false">Employment History</a>
                <a className="nav-item nav-link" id="educ-tab" data-toggle="tab" href="#educ" role="tab" aria-controls="educ" aria-selected="false">Education</a>
                <a className="nav-item nav-link" id="work-exp-tab" data-toggle="tab" href="#work-exp" role="tab" aria-controls="work-exp" aria-selected="false">Work Experience</a>
		<a className="nav-item nav-link" id="publication-tab" data-toggle="tab" href="#publication" role="tab" aria-controls="publication" aria-selected="false">Publications</a>
            </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab"><PersonalInfo /></div>
            <div className="tab-pane fade" id="emp-history" role="tabpanel" aria-labelledby="emp-history-tab"><EmploymentHistory /></div>
            <div className="tab-pane fade" id="educ" role="tabpanel" aria-labelledby="educ-tab"><Education /></div>
            <div className="tab-pane fade" id="work-exp" role="tabpanel" aria-labelledby="work-exp-tab"><WorkExperience /></div>
	    <div className="tab-pane fade" id="publication" role="tabpanel" aria-labelledby="publication-tab"><Publication /></div>
            </div>
        </Layout>
    )
  }
  
  export default Dashboard
