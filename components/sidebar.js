import Link from 'next/link'
import { useCookies } from "react-cookie";
import { useState } from 'react'
import { useRouter } from 'next/router'

function Sidebar(props) { 
    const router = useRouter()

    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    function handleRemoveCookie() {
        removeCookie("user", {path:'/'});
    }

    let faculty = true
    let staff = true

    if(props.role == 1 || props.role == 2 || props.role == 3) {
        staff = false
        if(props.role == 2 || props.role == 3) {
            faculty = false
        } 
    }

    const [isActive, setActive] = useState("false")

    const handleToggle = () => {
    	setActive(!isActive)
    }

    return (
    
        <aside>
            <div className="top">
                <div className ="close" id="close-btn" onClick={() => {
                                    const sideMenu = document.querySelector("aside")
                                    sideMenu.style.display = 'none';
                                }}>
                    <span className="material-icons-sharp">close</span>
                </div>
            </div>

            <div className="sidebar">
                {/* Dashboard */}
                {/* Visibility: Department head, department chair */}
                {/* { !staff && !faculty && 
                    <Link href={{ pathname: "/faculty" }}>
                        <a className = { router.pathname === "/faculty" ?  "active"  : "inactive" } id = { router.pathname === "/faculty" ?  "active"  : "inactive" }>
                            <span className="material-icons-sharp">grid_view</span>
                            <h3>Dashboard</h3>
                        </a>
                    </Link> 
                } */}

                {/* Dashboard V2 */}
                {/* Visibility: Department head, department chair */}
                { !staff && !faculty && 
                    <Link href={{ pathname: "/faculty/dashboard" }}>
                        <a className = { router.pathname === "/faculty/dashboard" ?  "active"  : "inactive" } id = { router.pathname === "/faculty/dashboard" ?  "active"  : "inactive" }>
                            <span className="material-icons-sharp">grid_view</span>
                            <h3>Dashboard</h3>
                        </a>
                    </Link> 
                }

                {/* Basic Information */}
                {/* Visibility: All users except admin */}
                { !staff && 
                    <Link href={{ pathname: "/faculty/basic-info" }}>
                        <a className = { router.pathname === "/faculty/basic-info" ?  "active"  : "inactive" } id = { router.pathname === "/faculty/basic-info" ?  "active"  : "inactive" }>
                            <span className="material-icons-sharp">person</span>
                            <h3>Basic Information</h3>
                        </a>
                    </Link> 
                }

                {/* Accomplishment */}
                {/* Visibility: All users except admin */}
                { !staff && 
                    <div className='nav-item-container'>
                            {/* Parent Menu Item */}
                            <a className = { router.pathname.includes("/faculty/accomplishments")  ?  "active"  : "inactive" } id = { router.pathname === "/faculty/accomplishment" ?  "active"  : "inactive" } data-bs-toggle="collapse" href="#nav-item">
                                <span className="material-icons-sharp">emoji_events</span>
                                <h3>Accomplishment</h3>
                                <span class="material-icons-sharp arrow-icon">arrow_drop_down_circle</span>
                            </a>
                            {/* Children Menu Item */}
                            <div id="nav-item" className="collapse">
                                    <Link href={{ pathname: "/faculty/accomplishments/public-service" }}>
                                        <a className = { router.pathname === "/faculty/accomplishments/public-service" ?  "active"  : "inactive" } id = { router.pathname === "/faculty/accomplishment" ?  "active"  : "inactive" }>
                                            <span className="material-icons-sharp">groups</span>
                                            <h3>Public Service</h3>
                                        </a>
                                    </Link> 
                            </div>
                            <div id="nav-item" className="collapse">
                                    <Link href={{ pathname: "/faculty/accomplishments/publication" }}>
                                        <a className = { router.pathname === "/faculty/accomplishments/publication" ?  "active"  : "inactive" } id = { router.pathname === "/faculty/accomplishment" ?  "active"  : "inactive" }>
                                            <span className="material-icons-sharp">description</span>
                                            <h3>Publication</h3>
                                        </a>
                                    </Link> 
                            </div>
                            <div id="nav-item" className="collapse">
                                    <Link href={{ pathname: "/faculty/accomplishments/training-seminar" }}>
                                        <a className = { router.pathname === "/faculty/accomplishments/training-seminar" ?  "active"  : "inactive" } id = { router.pathname === "/faculty/accomplishment" ?  "active"  : "inactive" }>
                                            <span className="material-icons-sharp">card_membership</span>
                                            <h3>Training & Seminar</h3>
                                        </a>
                                    </Link> 
                            </div>
                            <div id="nav-item" className="collapse">
                                    <Link href={{ pathname: "/faculty/accomplishments/licensure-exam" }}>
                                        <a className = { router.pathname === "/faculty/accomplishments/licensure-exam" ?  "active"  : "inactive" } id = { router.pathname === "/faculty/accomplishment" ?  "active"  : "inactive" }>
                                            <span className="material-icons-sharp">contact_emergency</span>
                                            <h3>Licensure Exam</h3>
                                        </a>
                                    </Link> 
                            </div>
                            <div id="nav-item" className="collapse">
                                    <Link href={{ pathname: "/faculty/accomplishments/research-grant" }}>
                                        <a className = { router.pathname === "/faculty/accomplishments/research-grant" ?  "active"  : "inactive" } id = { router.pathname === "/faculty/accomplishment" ?  "active"  : "inactive" }>
                                            <span className="material-icons-sharp">find_in_page</span>
                                            <h3>Research Grant</h3>
                                        </a>
                                    </Link> 
                            </div>
                    </div>
                 }


                {/* Faculty Load */}
                {/* Visibility: All users except admin */}
                { !staff && 
                    <Link href={{ pathname: "/faculty/faculty-load" }}>
                        <a className = { router.pathname === "/faculty/faculty-load" ?  "active"  : "inactive" } id = { router.pathname === "/faculty/faculty-load" ?  "active"  : "inactive" }>
                            <span className="material-icons-sharp">work</span>
                            <h3>Faculty Load</h3>
                        </a>
                    </Link> 
                }

                {/* Faculty List */}
                {/* Visibility: admin */}
                { staff && 
                    <Link href={{ pathname: "/admin" }}>
                        <a className = { router.pathname === "/admin" ?  "active"  : "inactive" } id = { router.pathname === "/admin" ?  "active"  : "inactive" }>
                            <span className="material-icons-sharp">format_list_bulleted</span>
                            <h3>Faculty List</h3>
                        </a>
                    </Link> 
                }

                {/* Faculty List */}
                {/* Visibility: Department head, department chair */}
                { !staff && !faculty &&
                    <Link href={{ pathname: "/faculty/view/all" }}>
                        <a className = { router.pathname === "/faculty/view/all" ?  "active"  : "inactive" } id = { router.pathname === "/faculty/view/all" ?  "active"  : "inactive" }>
                            <span className="material-icons-sharp">format_list_bulleted</span>
                            <h3>Faculty List</h3>
                        </a>
                    </Link> 
                }

                {/* Pending Approvals */}
                {/* Visibility: Department head, department chair */}
               { !staff && !faculty && 
                    <Link href={{ pathname: "/faculty/approval" }}>
                        <a className = { router.pathname === "/faculty/approval" ?  "active"  : "inactive" } id = { router.pathname === "/faculty/approval" ?  "active"  : "inactive" }> 
                            <span className="material-icons-sharp">pending_actions</span>
                            <h3 style={{marginRight:"-0.5rem"}}>Pending Approvals</h3>
                            {props.approvalList.facultyCount > 0 && <span className="badge pa">{props.approvalList.facultyCount}</span>}
                        </a>
                    </Link> 
                }


                {/* Role Assignment Group */}
                {/* Visibility: Department Head */}
                { !staff && !faculty && !props.roleAssignment &&

                    <Link href={{ pathname: "/faculty/role-assignment" }}>
                        <a className = { router.pathname === "/faculty/role-assignment" ?  "active"  : "inactive" } id = { router.pathname === "/faculty/role-assignment" ?  "active"  : "inactive" }>
                            <span className="material-icons-sharp">assignment_ind</span>
                            <h3>Role Assignment</h3>
                        </a>
                    </Link> 

                }

                {/* Role Assignment Group */}
                {/* Visibility: Department Chair */}
                { !staff && !faculty && props.roleAssignment &&

                    <Link href={{ pathname: "/faculty/role-assignment" }}>
                        <a className = { router.pathname === "/faculty/role-assignment" ?  "active"  : "inactive" } id = { router.pathname === "/faculty/role-assignment" ?  "active"  : "inactive" }>
                            <span className="material-icons-sharp">assignment_ind</span>
                            <h3>Role Assignment &nbsp;<span className="badge">!</span></h3>
                        </a>
                    </Link> 

                }

                {/* Change Password */}
                {/* Visibility: All Users */}
                {/* <Link href = "/settings/change-password">
                    <a className={ router.pathname === "/settings/change-password" ?  "active"  : "inactive" }>
                        <span className="material-icons-sharp">vpn_key</span>
                        <h3>Change Password</h3>
                    </a>
                </Link> */}

                {/* User Profile */}
                {/* Visibility: All Users */}
                <Link href = "/user-profile">
                    <a className={ router.pathname === "/user-profile" ?  "active"  : "inactive" }>
                        <span className='material-icons-sharp'>account_circle</span>
                        <h3>User Profile</h3>
                    </a>
                </Link>

                {/* Logout */}
                {/* Visibility: All Users */}
                <Link href="/login">
                    <a onClick={handleRemoveCookie} style={{color:"#e23636"}}>
                        <span className="material-icons-sharp">logout</span>
                        <h3>Logout</h3>
                    </a>
                </Link>

                

            </div>
        </aside>


    )
  }
  
  export default Sidebar