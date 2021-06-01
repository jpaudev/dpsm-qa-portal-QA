import Layout from '../../components/layout'
import PersonalInfo from '../../components/faculty/basic-info/personal-info'
import Education from '../../components/faculty/basic-info/education'
import EmploymentHistory from '../../components/faculty/basic-info/employment-history'
import WorkExperience from '../../components/faculty/basic-info/work-experience'
import jwt from 'jsonwebtoken'
import { parseCookies } from "../../helpers"

function BasicInfo(props) { 
    return (
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList}>
		<br />
		<br />
            <div className="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
                <PersonalInfo facultyFlag={false} clerkFlag={true} token = {props.token.user} />
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

  export async function getServerSideProps(context) {
    const token = parseCookies(context.req)
    
    let name
    let data
    let approvalList

    if (context.res) {
        if (Object.keys(token).length === 0 && token.constructor === Object) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            }
        }
        else {
            data = jwt.decode(token.user)
        
            let facultyId = data.facultyId
            
            let header = {
                headers: {
                    'Authorization': 'Bearer ' + token.user
                }
            }

            let approvalURL = 'http://localhost:3001/api/faculty/approval/' + facultyId
            if(data.role == 2 || data.role == 3 || data.role == 5) {
                if(data.role == 2) {
                    approvalURL += '?unitId=' + data.unitId
                }

                const approval = await fetch(approvalURL, header)
                approvalList = await approval.json()
                approvalList = approvalList.result
            } else if(data.role == 1) {
				approvalList = null
			}
        }
    } 

    return { 
        props: {
            token: token && token,
            data: data,
            approvalList: approvalList,
        }
    }
}

export default BasicInfo