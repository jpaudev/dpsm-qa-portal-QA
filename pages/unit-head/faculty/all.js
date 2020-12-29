import LayoutUnitHead from '../../../components/layout-unit-head'
import Link from 'next/link'

function FacultyList() {
    return (
        <LayoutUnitHead>
            <h4 align = "center"> Mathematics and Computing Sciences Unit </h4>
		<div className = "list-group">
			<Link href = "/unit-head/faculty/faculty-view"><a href = "" className = "list-group-item list-group-item-action list-group-item-light">Baes, Gregorio</a></Link>
			<a href = "" className = "list-group-item list-group-item-action list-group-item-light">Billones, Liza</a>
			<a href = "" className = "list-group-item list-group-item-action list-group-item-light">Cabalo, Francis</a>
			<a href = "" className = "list-group-item list-group-item-action list-group-item-light">Chua, Richard Bryann</a>
			<a href = "" className = "list-group-item list-group-item-action list-group-item-light">Yu, Berwin Jarret</a>
		</div>
        </LayoutUnitHead>
    )
  }
  
  export default FacultyList