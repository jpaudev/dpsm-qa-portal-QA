import Layout from '../../components/layout'
import AssignUnitHead from '../../components/dept-chair/role-assignment/assign-unit-head'
import AssignAdminClerk from '../../components/dept-chair/role-assignment/assign-admin-clerk'
import AssignDeptChair from '../../components/dept-chair/role-assignment/assign-dept-chair'

function RoleAssignment() {
    return (
        <Layout>
            <nav>
            <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="unit-head-tab" data-toggle="tab" href="#unit-head" role="tab" aria-controls="unit-head" aria-selected="true">Unit Head Assignment</a>
                <a className="nav-item nav-link" id="admin-clerk-tab" data-toggle="tab" href="#admin-clerk" role="tab" aria-controls="admin-clerk" aria-selected="false">Admin Clerk Assignment</a>
                <a className="nav-item nav-link" id="dept-chair-tab" data-toggle="tab" href="#dept-chair" role="tab" aria-controls="dept-chair" aria-selected="false">Department Chair Assignment</a>
            </div>
            </nav>
		<br />
		<br />
            <div className="tab-content" id="nav-tabContent">
            	<div className="tab-pane fade show active" id="unit-head" role="tabpanel" aria-labelledby="unit-head-tab"><AssignUnitHead /></div>
            	<div className="tab-pane fade" id="admin-clerk" role="tabpanel" aria-labelledby="admin-clerk-tab"><AssignAdminClerk /></div>
            	<div className="tab-pane fade" id="dept-chair" role="tabpanel" aria-labelledby="dept-chair-tab"><AssignDeptChair /></div>
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
  
  export default RoleAssignment