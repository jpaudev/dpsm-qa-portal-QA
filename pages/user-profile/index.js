
import Layout from "../../components/layout"
import UserProfileUpload from '../../components/UserProfileUpload'
import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../helpers"

import PersonalInformation from "../../components/user/PersonalInformation"
import ChangePassword from "../../components/change-password"

const UserProfile = (props) => {
  return (    
    <Layout 
        userId={props.data.userId} 
        facultyId={props.data.facultyId} 
        role={props.data.role} 
        name={props.data.name} 
        approvalList={props.approvalList} 
        roleAssignmentFlag={props.roleAssignmentFlag} 
    >
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <UserProfileUpload data={props}></UserProfileUpload>
                    <br/>
                    { props.data.role != 5 ? <ChangePassword token={props.token.user}>{props.data}</ChangePassword> : "" }
                </div>        
                <div className="col-8">       
                    { props.data.role != 5 ? <PersonalInformation data={props}></PersonalInformation> : <ChangePassword token={props.token.user}>{props.data}</ChangePassword>} 
                </div>
            </div>
        </div>
    </Layout>  
  )
}


export async function getServerSideProps(context) {
    
    const token = parseCookies(context.req)
  
    let personalInfo
    let name = null
    let fullName = null
    let data
    let approvalList = {}
    let roleAssignmentFlag = false
    let userProfilePicture
    let userProfile

    if (context.res) {
        if (isExpired(token.user) || Object.keys(token).length === 0 && token.constructor === Object) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            }
        } else {
            data = jwt.decode(token.user)

            let imageUrl = process.env.API_URL + '/user/image/' + data.userId;
            let header = {
                headers: {
                    'Authorization': 'Bearer ' + token.user
                }
            }
           
            const profilePicture = await fetch(imageUrl, header)
            userProfilePicture = await profilePicture.json()
            userProfile = userProfilePicture.success ? userProfilePicture.result.image : null

            if(data.role != 5 ) {
                let facultyId = data.facultyId

                let url = process.env.API_URL + '/faculty/basic-info/' + facultyId;
                
                
                const personal = await fetch(url, header)
                personalInfo = await personal.json()
                name = personalInfo.result.lastName + ', ' + personalInfo.result.firstName
                fullName = [personalInfo.result.firstName, personalInfo.result.lastName, personalInfo.result.suffix].join(' ');
                personalInfo.result["upemail"] = data.upemail;
                
                let approvalURL = process.env.API_URL + '/faculty/approval/' + facultyId
                let roleAssignmentURL = process.env.API_URL + '/faculty/basic-info/unit/assignment'

                if(data.role == 2 || data.role == 3) {
                    if(data.role == 2) {
                        approvalURL += '?unitId=' + data.unitId
                        roleAssignmentURL += '?unitId=' + data.unitId
                    }
    
                    const approval = await fetch(approvalURL, header)
                    approvalList = await approval.json()
                    approvalList = approvalList.result
    
                    const roleAssignments = await fetch(roleAssignmentURL, header)
                    let roleAssignmentList = await roleAssignments.json()
                    roleAssignmentList = roleAssignmentList.result
                    if(data.role == 2) {
                        if(roleAssignmentList.approverRemarks != null) roleAssignmentFlag = true
                    } else if(data.role == 3 && roleAssignmentList) {
                        roleAssignmentFlag = true 
                    }
                } else if(data.role == 1) {
                    approvalList = null
                }
            }      
        }
    } 

    return { 
        props: {
            token: token && token,
            data: data,
            name,
            fullName,
            personalInfo: personalInfo ? personalInfo.result : {},
            approvalList: approvalList,
            roleAssignmentFlag,
            profilePicture: userProfile
        }
    }
}

export default UserProfile