import Link from 'next/link'
import { useCookies } from "react-cookie";
import { useRouter } from 'next/router'

function Sidebar(props) { 
    const router = useRouter()
    const {
    	query: { menu },
    } = router

    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    function handleRemoveCookie() {
        removeCookie("user");
    }

    let faculty = true
    let staff = true

    if(props.role == 1 || props.role == 2 || props.role == 3) {
        staff = false
        if(props.role == 2 || props.role == 3) {
            faculty = false
        } 
    }

    return (
        <div className="col-2">
                <div className="list-group">
			<a className = "list-group-item list-group-item-action list-group-item-secondary" data-toggle = "collapse" href = "#facultyMenu" aria-controls = "facultyMenu"> Faculty </a>
                <div id = "facultyMenu" className = "collapse show">
                    { !staff && !faculty && <Link href={{ pathname: "/faculty", query: { menu: "active" } }}><a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty" ?  menu  : "inactive" }>Dashboard</a></Link> }
                    { !staff && <Link href={{ pathname: "/faculty/basic-info", query: { menu: "active" } }}><a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/basic-info" ?  menu  : "inactive" }>Basic Information</a></Link> }
                    { !staff && <Link href={{ pathname: "/faculty/accomplishment", query: { menu: "active" } }}><a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/accomplishment" ?  menu  : "inactive" }>Accomplishment</a></Link> }
                    { !staff && <Link href={{ pathname: "/faculty/faculty-load", query: { menu: "active" } }}><a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/faculty-load" ?  menu  : "inactive" }>Faculty Load</a></Link> }
                    { !staff && <Link href={{ pathname: "/faculty/evaluation", query: { menu: "active" } }}><a className = "list-group-item list-group-item-action list-group-item-success " id = { router.pathname === "/faculty/evaluation" ?  menu  : "inactive" }>Peer Evaluation</a></Link> }
                    { !staff && !faculty && <Link href={{ pathname: "/faculty/view/all", query: { menu: "active" } }}><a className = "list-group-item list-group-item-action list-group-item-success " id = { router.pathname === "/faculty/view/all" ?  menu  : "inactive" }>Faculty List</a></Link> }
                    { !staff && !faculty && <Link href={{ pathname: "/faculty/approval", query: { menu: "active" } }}>
                        <a className = "list-group-item list-group-item-action list-group-item-success " id = { router.pathname === "/faculty/approval" ?  menu  : "inactive" }> 
                            Pending Approvals &nbsp;{props.approvalList.facultyCount > 0 && <span className="badge badge-danger">{props.approvalList.facultyCount}</span>}
                        </a>
                    </Link> }
                    { staff && <Link href={{ pathname: "/admin", query: { menu: "active" } }}><a className = "list-group-item list-group-item-action list-group-item-success " id = { router.pathname === "/admin" ?  menu  : "inactive" }>Faculty List</a></Link> }
		            { !staff && !faculty && props.roleAssignment && <Link href ={{ pathname: "/faculty/role-assignment", query: { menu: "active" } }}>
                        <a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/role-assignment" ?  menu  : "inactive" }>
                            Role Assignment &nbsp;<span className="badge badge-danger">!</span>
                        </a>
                    </Link> }
                    { !staff && !faculty && !props.roleAssignment && <Link href ={{ pathname: "/faculty/role-assignment", query: { menu: "active" } }}>
                        <a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/role-assignment" ?  menu  : "inactive" }>
                            Role Assignment
                        </a>
                    </Link> }
                </div>
                </div>
                <div className="list-group">
                    <Link href="/student"><a className = "list-group-item list-group-item-action list-group-item-secondary">Student</a></Link>
                </div>
                <div className="list-group">
                    <Link href="/alumni"><a className = "list-group-item list-group-item-action list-group-item-secondary">Alumni</a></Link>
                </div>
                <div className="list-group">
                    <Link href="/department-activities"><a className = "list-group-item list-group-item-action list-group-item-secondary">Department Activities</a></Link>
                </div>
		        <div className="list-group">
                    <Link href="/login"><a className = "list-group-item list-group-item-action list-group-item-danger" onClick={handleRemoveCookie}>Log Out</a></Link>
                </div>

		<style jsx>{`
			.col-2 {
  				background-color: #017823;
			}
			.list-group-item-success{
				text-indent:20%;
			}
			#active{
				background-color: #005919;
				color: #fff;
			}
		`}</style>
            </div>           
    )
  }
  
  export default Sidebar
