import PersonalInfo from '../../components/faculty/basic-info/personal-info'
import Education from '../../components/faculty/basic-info/education'
import EmploymentHistory from '../../components/faculty/basic-info/employment-history'
import WorkExperience from '../../components/faculty/basic-info/work-experience'
import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../helpers"

function BasicInfo(props) { 
    return (
        <>
		<br />
		<br />
            <div className="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
                <PersonalInfo editable={true} role={props.data.role} token = {props.token.user} positions={props.positionsList} hasDisabledFields={false} />
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
		.tab-pane.active{
			background-color: #fff;
		}
	`}</style>
        </>
    )
  }

  export async function getServerSideProps(context) {
    const token = parseCookies(context.req)
    
    let name
    let data
    let positionsList = null
    let approvalList

    if (context.res) {
        if (isExpired(token.user) || Object.keys(token).length === 0 && token.constructor === Object) {
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

            let approvalURL = process.env.API_URL + '/faculty/approval/' + facultyId
            if(data.role == 2 || data.role == 3) {
                if(data.role == 2) {
                    approvalURL += '?unitId=' + data.unitId
                }

                const approval = await fetch(approvalURL, header)
                approvalList = await approval.json()
                approvalList = approvalList.result
            } else if(data.role == 1 || data.role == 5) {
                if(data.role == 5) {
                    const positions = await fetch(process.env.API_URL + '/faculty/basic-info/employment/positions', header)
                    positionsList = await positions.json()
                    positionsList = positionsList.result
                }
				approvalList = null
			}
        }
    } 

    return { 
        props: {
            token: token && token,
            data: data,
            approvalList: approvalList,
            positionsList
        }
    }
}

export default BasicInfo
