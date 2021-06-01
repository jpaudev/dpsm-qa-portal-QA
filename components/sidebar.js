import Link from 'next/link'
import { useCookies } from "react-cookie";

function Sidebar(props) { 
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
                    { !staff && !faculty && <Link href="/unit-head"><a className = "list-group-item list-group-item-action list-group-item-success">Dashboard</a></Link> }
                    { !staff && <Link href="/faculty/basic-info"><a className = "list-group-item list-group-item-action list-group-item-success">Basic Information</a></Link> }
                    { !staff && <Link href="/faculty/accomplishment"><a className = "list-group-item list-group-item-action list-group-item-success">Accomplishment</a></Link> }
                    { !staff && <Link href="/faculty/faculty-load"><a className = "list-group-item list-group-item-action list-group-item-success">Faculty Load</a></Link> }
                    { !staff && <Link href="/faculty/evaluation"><a className = "list-group-item list-group-item-action list-group-item-success ">Peer Evaluation</a></Link> }
                    { !staff && !faculty && <Link href="/faculty/view/all"><a className = "list-group-item list-group-item-action list-group-item-success ">Faculty List</a></Link> }
                    { !staff && !faculty && <Link href="/faculty/approval">
                        <a className = "list-group-item list-group-item-action list-group-item-success "> 
                            Pending Approvals &nbsp;<span className="badge badge-danger">{props.approvalList.facultyCount}</span>
                        </a>
                    </Link> }
                    { staff && <Link href="/admin"><a className = "list-group-item list-group-item-action list-group-item-success ">Faculty List</a></Link> }
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
		`}</style>
            </div>           
    )
  }
  
  export default Sidebar
