import * as React from 'react';
import Head from 'next/head'
import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'
import Content from './content'
import jwt from 'jsonwebtoken'
import { useCookies } from "react-cookie"
import getProfilePicture from '../services/user/getProfilePicture'
import getApprovalListInfo from '../services/faculty/approval/getApprovalListInfo';
import getUnitAssignmentInfo from '../services/faculty/assignments/getUnitAssignmentInfo';
import getPersonalInfo from '../services/faculty/basic-info/getPersonalInfo';

function Layout(props) {

    const [cookie, setCookie] = useCookies(["user"])
    
    const [file, setFile] = React.useState();
    const [userDetails, setUserDetails] = React.useState({
        role: "",
        facultyId: "",
        name: ""
    })

    const [approvalList, setApprovalList] = React.useState({}) 
    const [roleAssignmentFlag, setRoleAssignmentFlag] = React.useState(false);

    let approval;
    let roleAssignment;
    let res;

    const handleUserDetails = async () => {
        
        if(Object.keys(cookie).length !== 0) {

            let data = jwt.decode(cookie.user)

            //GET PROFILE PICTURE
            res = await getProfilePicture(cookie.user)
            if(res.success) { 
                setFile(res.result.image ? process.env.UPLOADS_URL + res.result.image : "../../DefaultUser.jpg")
            } else {
                setFile("../../DefaultUser.jpg")
            }

            // OTHER USER DETAILS
            setUserDetails(data)

            if(data.role != 5 ) {
                let personalInfo = await getPersonalInfo(cookie.user, data)
                setUserDetails((prevState) => ({
                ...prevState, name: [personalInfo.result.lastName, personalInfo.result.firstName].join(",")
                }))

                if(data.role == 2 || data.role == 3) {
                    approval = await getApprovalListInfo(cookie.user, data)
                    setApprovalList(approval.result)

                    roleAssignment =  await getUnitAssignmentInfo(cookie.user, data)
                
                    if((data.role == 2 && roleAssignment.result.approverRemarks != null) || (data.role == 3 && roleAssignment.result)) {
                        setRoleAssignmentFlag(true)
                    }
                }
                
            }    
        }
    } 

    React.useEffect(() => {
        handleUserDetails();
    }, [props])

    return (
        <div>
            <Head>
                <title id="demo1">UPM QA Portal</title>
                {/* Stylesheet */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href= "/main.css" />
                {/* Fonts and Iconds */}
                <link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel="stylesheet" hrsef="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
                {/* MATERIAL CDN */}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"/>
                {/* JavaScript Bundle with Popper */}
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
                <script src="/sidebar.js"> </script>

            </Head>
           
            {/* Header -- Topbar */}
            <Header/>
            <body>
                {/* Frame While CSS is not fully loaded */}
                <div id="loadOverlay" style={{backgroundColor: "#333", position: "absolute", top: "0px", left: "0px", width: "100%" , height: "100%", zIndex: "2000"}}></div>
                
                {/* Main Container */}
                <div className="containerMain">
                    {/* Sidebar */}
                    <Sidebar role = {userDetails.role} approvalList={approvalList} facultyId = {userDetails.facultyId} roleAssignment={roleAssignmentFlag} />
                    {/* End of Sidebar */}

                    {/* Content */}
                    <main>
                        <div className="top-tablet">
                            <div className="theme-toggler pc-tablet-only" onClick={() => {
                                            const themeToggler = document.querySelector(".theme-toggler")
                                            document.body.classList.toggle('dark-theme-variables')
                                            themeToggler.querySelector('span').classList.toggle('active')
                                        }}>
                                    <span className="material-icons-sharp active">light_mode</span>
                                    <span className="material-icons-sharp">dark_mode</span>
                            </div>

                            <div className="profile pc-tablet-only">
                                    <div className="info">
                                        <p>Logged In As: <br/> <b>{userDetails.name}</b></p>
                                        { userDetails.role == "1" &&
                                            <p className="text-muted">Faculty</p>
                                        }
                                        { userDetails.role == "2" &&
                                            <p className="text-muted">Unit Head</p>
                                        }
                                        { userDetails.role == "3" &&
                                            <p className="text-muted">Department Chair</p>
                                        }
                                        { userDetails.role == "4" &&
                                            <p className="text-muted">DAPC</p>
                                        }
                                        { userDetails.role == "5" &&
                                            <p className="text-muted">Admin Staff</p>
                                        }
                                    
                                    </div>
                                    <div className="profile-photo">
                                        <img src={file}/>
                                    </div>
                            </div>
                        </div>
                        
                        <br></br>
                        {props.children}
                    </main>
                    {/* End of Content */}

                    {/* Right */}
                    <div className="right">

                        {/* TOP */}
                        <div className="top" >
                            <button id="menu-btn" style={{color: "white"}} onClick={() => {
                                        const sideMenu = document.querySelector("aside")
                                        sideMenu.style.display = 'block'

                                    }}>
                                <span className="material-icons-sharp">menu</span>
                            </button>
                            <div className="theme-toggler" onClick={() => {
                                        const themeToggler = document.querySelector(".theme-toggler")
                                        document.body.classList.toggle('dark-theme-variables')
                                        themeToggler.querySelector('span').classList.toggle('active')
                                    }}>
                                <span className="material-icons-sharp active">light_mode</span>
                                <span className="material-icons-sharp">dark_mode</span>
                            </div>
                            
                            <div className="profile">
                                <div className="info">
                                    <p>Logged In As: <br/> <b>{userDetails.name}</b></p>
                                    { userDetails.role == "1" &&
                                        <p className="text-muted">Faculty</p>
                                    }
                                    { userDetails.role == "2" &&
                                        <p className="text-muted">Unit Head</p>
                                    }
                                    { userDetails.role == "3" &&
                                        <p className="text-muted">Department Chair</p>
                                    }

                                    { userDetails.role == "4" &&
                                        <p className="text-muted">DAPC</p>
                                    }
                                    { userDetails.role == "5" &&
                                        <p className="text-muted">Admin Staff</p>
                                    }
                                
                                </div>
                                <div className="profile-photo">
                                    <img src="/profile-1.jpg"/>
                                </div>
                            </div>
                        </div>
                        {/* End of Top */}

                    </div>
                    {/* End of Right */}
                </div>
                {/* End of Main Container */}
            </body>
        </div> 



    )
}

export default Layout

