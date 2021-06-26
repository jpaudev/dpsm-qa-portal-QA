import Layout from '../../components/layout'
import Link from 'next/link'
import Router from 'next/router'
import jwt from 'jsonwebtoken'
import { parseCookies } from "../../helpers"
import Faculty from "../../components/faculty/facultyList"

function FacultyList(props) {
    return (
        <Layout userId={props.data.userId} role={props.data.role} name={props.data.name}>
			<br />
			<h2 align="center">Faculty List</h2>
            <Link href = "/admin/faculty"><button type="button" className="btn btn-primary float-right">Add Faculty</button></Link>
            <br />
            <Faculty path="admin">{props.facultyList}</Faculty>
        </Layout>
    )
  }

  export async function getServerSideProps(context) {
    const token = parseCookies(context.req)
    let data
    let facultyList

    if (context.res) {
        if (Object.keys(token).length === 0 && token.constructor === Object) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            }
        } else {
            data = jwt.decode(token.user)
        
            let header = {
                headers: {
                    'Authorization': 'Bearer ' + token.user
                }
            }
            
            const faculty = await fetch('http://localhost:3001/api/faculty/basic-info', header)
            facultyList = await faculty.json()

        }
    } 

    return {
        props: {
            token: token && token,
            data,
            facultyList: facultyList.result,
        }
	}
}
  
  export default FacultyList
