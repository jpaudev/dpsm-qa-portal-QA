import Link from 'next/link'

function Sidebar() {
    return (
            <div className="col-1">
                <div className="dropdown">
		    <button className = "btn btn-success btn-lg dropdown-togggle" type = "button" id = "facultyDropdown" data-toggle = "dropdown" aria-haspopup = "true" aria-expanded = "false">
			Faculty
		    </button>
			<div className = "dropdown-menu" aria-labelledby = "facultyDropdown">
                    <Link href="/faculty"><a className = "dropdown-item">Faculty</a></Link>
                    <Link href="/faculty/basic-info"><a className = "dropdown-item">Basic Information</a></Link>
                    <Link href="/faculty/accomplishment"><a className = "dropdown-item">Accomplishment</a></Link>
                    <Link href="/faculty/class"><a className = "dropdown-item">Class</a></Link>
                    <Link href="/faculty/evaluation"><a className = "dropdown-item">Evaluation</a></Link>
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
			.col-1 {
  				background-color: #017823; 
			}
		`}</style>
            </div>           
    )
  }
  
  export default Sidebar
