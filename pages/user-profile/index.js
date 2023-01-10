
import UserProfileUpload from '../../components/UserProfileUpload'
import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../helpers"

import PersonalInformation from "../../components/user/PersonalInformation"
import ChangePassword from "../../components/change-password"

const UserProfile = (props) => {
  return (   
    <>
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
    </> 
  )
}


export async function getServerSideProps(context) {
    
    const token = parseCookies(context.req)
  
    let personalInfo
    let fullName = null
    let data
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
                fullName = [personalInfo.result.firstName, personalInfo.result.lastName, personalInfo.result.suffix].join(' ');
                personalInfo.result["upemail"] = data.upemail;
            }      
        }
    } 

    return { 
        props: {
            token: token && token,
            data: data,
            fullName,
            personalInfo: personalInfo ? personalInfo.result : {},
            profilePicture: userProfile
        }
    }
}

export default UserProfile