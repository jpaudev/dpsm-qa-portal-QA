import Link from 'next/link'

function Sidebar() {
    return (
            <div className="col-3">
                <div className="nav flex-column list-group">
                    <Link href="/faculty"><a>Faculty</a></Link>
                    <Link href="/faculty/basic-info"><a>Basic Information</a></Link>
                    <Link href="/faculty/accomplishment"><a>Accomplishment</a></Link>
                    <Link href="/faculty/class"><a>Class</a></Link>
                    <Link href="/faculty/evaluation"><a>Evaluation</a></Link>
                </div>
                <div className="list-group">
                    <Link href="/student"><a>Student</a></Link>
                </div>
                <div className="list-group">
                    <Link href="/alumni"><a>Alumni</a></Link>
                </div>
                <div className="list-group">
                    <Link href="/department-activities"><a>Department Activities</a></Link>
                </div>
            </div>        
    )
  }
  
  export default Sidebar