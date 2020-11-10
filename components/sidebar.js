import Link from 'next/link'

function Sidebar() {
    return (
            <div className="col-2">
                <div className="list-group">
			<a className = "list-group-item list-group-item-action list-group-item-secondary" data-toggle = "collapse" href = "#faculty"> Faculty </a>
			<div id = "faculty" className = "collapse">
                    <Link href="/faculty"><a className = "list-group-item list-group-item-action list-group-item-success">Dashboard</a></Link>
                    <Link href="/faculty/basic-info"><a className = "list-group-item list-group-item-action list-group-item-success">Basic Information</a></Link>
                    <Link href="/faculty/accomplishment"><a className = "list-group-item list-group-item-action list-group-item-success">Accomplishment</a></Link>
                    <Link href="/faculty/class"><a className = "list-group-item list-group-item-action list-group-item-success">Class</a></Link>
                    <Link href="/faculty/evaluation"><a className = "list-group-item list-group-item-action list-group-item-success">Evaluation</a></Link>
			</div>
                </div>
                <div className="list-group">
                    <Link href="/student"><a className = "list-group-item list-group-item-action list-group-item-success">Student</a></Link>
                </div>
                <div className="list-group">
                    <Link href="/alumni"><a className = "list-group-item list-group-item-action list-group-item-success">Alumni</a></Link>
                </div>
                <div className="list-group">
                    <Link href="/department-activities"><a className = "list-group-item list-group-item-action list-group-item-success">Department Activities</a></Link>
                </div>

		<style jsx>{`
			.col-2 {
  				background-color: #017823; 
			}
		`}</style>
            </div>           
    )
  }
  
  export default Sidebar
