import Layout from '../../components/layout'
import Router from 'next/router'
import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../helpers"
import AccomplishmentCount from '../../components/unit-head/dashboard/accomplishment-count/accomplishment-count'
import EmploymentStatus from '../../components/unit-head/dashboard/employment-status/employment-status'
import DegreeCount from '../../components/unit-head/dashboard/degree/degree'
import Link from 'next/link'

import MUIDataTable from "mui-datatables";
import BarGraph from '../../components/dashboard/BarGraph'
import Widget from '../../components/dashboard/Widget'
import Filter from '../../components/dashboard/Filter'

import * as React from 'react'
import getAccomplishments from '../../services/reports/getAccomplishments'
const Dashboard = (props) =>{ 

    const filterRef = React.useRef()
    const [activeTab, setActiveTab] = React.useState("accomplishment")
    const [dashboardData, setDashboardData] = React.useState()

    // Table
    const [tableColumn, setTableColumn] = React.useState([])

    const employmentTableColumn = [
        {
            name: "degreeCert",
            label: "Degree",
            options : {
              filter: false,
              customBodyRender : (value, tableMeta, updateValue) => {
                return (
                  <div>{value}</div>
                )
              }
            }
        }
    ]
    const getData = async (reqParams) => {
        let tempColumns = []

        if(activeTab == "accomplishment") {
            let res = await getAccomplishments({
                // unitId: 1,
                // startDate: "2022-08-01",
                // endDate: "2022-10-01",
            }, props.token.user)
            console.log(res)

            const graphData = [
                {
                  "AccomplishmentType": "Public Service",
                  "MCSU": 0,
                  "Chem": 2,
                  "Physics/Geology": 0,
                },
                {
                  "AccomplishmentType": "Publications",
                  "MCSU": 0,
                  "Chem": 0,
                  "Physics/Geology": 0,
                },
                {
                  "AccomplishmentType": "Research Grants",
                  "MCSU": 0,
                  "Chem": 0,
                  "Physics/Geology": 0,
                },
                {
                  "AccomplishmentType": "Training/Seminars",
                  "MCSU": 0,
                  "Chem": 0,
                  "Physics/Geology": 0,
                }
              ]

            let arr;
            res.result.forEach(element => {
                let department = {
                    "1": "Chem",
                    "2": "MCSU",
                    "3": "Physics/Geology",
                }

              
                graphData.forEach((val,index) => {
                    if(val["AccomplishmentType"] == "Public Service") {
                        graphData[index][department[element.faculty_unit.unitId]] += element.faculty_public_services.length
                    } else if(val["AccomplishmentType"] == "Publications") {
                        graphData[index][department[element.faculty_unit.unitId]] += element.faculty_publishers.length
                    } else if(val["AccomplishmentType"] == "Research Grants") {
                        graphData[index][department[element.faculty_unit.unitId]] += element.faculty_researchers.length
                    } else if(val["AccomplishmentType"] == "Training/Seminars") {
                        graphData[index][department[element.faculty_unit.unitId]] += element.faculty_training_seminars.length
                    }
                });
            });
            
            console.log(graphData,"Test")

        }else if(activeTab == "employment") {
            let res = await getAccomplishments({
                unitId: 1,
                startDate: "2022-08-01",
                endDate: "2022-10-01",
            }, props.token.user)
            console.log(res)
        } else if(activeTab == "degree") {
            let res = await getAccomplishments({
                unitId: 1,
                startDate: "2022-08-01",
                endDate: "2022-10-01",
            }, props.token.user)
            console.log(res)
        } 
        
    } 

    React.useEffect(()=>{
        getData()
    },[activeTab])

    //Table data
    const data = [
        {
            degreeCert: "1",
            degreeType: "2",
            institutionSchool: "3"
        },
        {
            degreeCert: "1",
            degreeType: "2",
            institutionSchool: "3"
        },
        {
            degreeCert: "1",
            degreeType: "2",
            institutionSchool: "3"
        },
        {
            degreeCert: "1",
            degreeType: "2",
            institutionSchool: "3"
        },
        {
            degreeCert: "1",
            degreeType: "2",
            institutionSchool: "3"
        }
    ]
    const columns = [
        {
          name: "degreeCert",
          label: "Degree",
          options : {
            filter: false,
            customBodyRender : (value, tableMeta, updateValue) => {
              return (
                <div>{value}</div>
              )
            }
          }
        }
      ];

      const options = {
        searchOpen : true,
        searchPlaceholder: "Search",
        sort: true,
        jumpToPage: true,
        rowsPerPage: 5,
        rowsPerPageOptions : [5,10,20,100,500,1000],
        filter: true,
        filterType: "dropdown",
        selectableRows: "none"
      }; 

      const test = (a) => {
        console.log(a)
      }
	if(props.data.role == 1) {
		return (<Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} />)
	} else if(props.data.role == 2 || props.data.role == 3){ 
		return (
	        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag} >

	                <div className="row">
                        <div className="col-8">
                            <nav>
                                <div className="nav nav-tabs nav-fill nav-justified">
                                    <a 
                                        className="nav-item nav-link nav-top active" 
                                        id="accomplishment-count-tab" 
                                        data-bs-toggle="tab" 
                                        href="#accomplishment-count" 
                                        role="tab" 
                                        aria-controls="accomplishment-count" 
                                        aria-selected="true"
                                        onClick={()=> setActiveTab("accomplishment")}
                                    >
                                        <span className="material-icons-sharp">military_tech</span>
                                        <h3>Accomplishment Count</h3>
                                    </a>
                                    <a 
                                        className="nav-item nav-link nav-top" 
                                        id="employment-status-tab" 
                                        data-bs-toggle="tab" 
                                        href="#employment-status" 
                                        role="tab" 
                                        aria-controls="employment-status" 
                                        aria-selected="false"
                                        onClick={()=> setActiveTab("employment")}
                                    >
                                        <span className="material-icons-sharp">badge</span>
                                        <h3>Employment Status</h3>
                                    </a>
                                    <a 
                                        className="nav-item nav-link nav-top" 
                                        id="degree-tab" 
                                        data-bs-toggle="tab" 
                                        href="#degree" 
                                        role="tab" 
                                        aria-controls="degree" 
                                        aria-selected="false"
                                        onClick={()=> setActiveTab("degree")}
                                    >
                                        <span className="material-icons-sharp">history_edu</span>
                                        <h3>Attained Degrees</h3>
                                    </a>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <ul class="nav nav-pills justify-content-end my-3">
                                    <li class="nav-item">
                                        <a class="btn maroon active" data-bs-toggle="pill" href="#home"><span className="material-icons-sharp">bar_chart</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn maroon" data-bs-toggle="pill" href="#menu1"><span className="material-icons-sharp">format_list_bulleted</span></a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div id="home" class="card  tab-pane active">
                                        <BarGraph data={props.accompList}></BarGraph>
                                    </div>
                                    <div id="menu1" class="  tab-pane fade">
                                        <MUIDataTable
                                            data={data} 
                                            columns={columns}
                                            options={options}
                                        />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <Filter ref={filterRef} handle={getData}></Filter>
                            <Widget></Widget>
                            <Link href = {{ pathname: "/faculty/generate-reports"}}>
                                <button className = "btn customButton maroon w-100">
                                    <span className="material-icons-sharp">file_download</span>
                                    Get All Info
                                </button>
                            </Link>
                        </div>
	                </div>

	        </Layout>
	    )	
	}
}

export async function getServerSideProps(context) { 
    const token = parseCookies(context.req)
    let data
    let personalInfo
    let approvalList
    let accompList
    let empList
    let educList
    let roleAssignmentFlag = false
    let queryList

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
        
            let facultyId = data.facultyId
        
            let header = {
                headers: {
                    'Authorization': 'Bearer ' + token.user
                }
            }
            
            const personal = await fetch(process.env.API_URL + '/faculty/basic-info/' + facultyId, header)
            personalInfo = await personal.json()

            let approvalURL = process.env.API_URL + '/faculty/approval/' + facultyId
            let accompURL = process.env.API_URL + '/faculty/reports/accomplishment'
            let empURL = process.env.API_URL + '/faculty/reports/employment'
            let educURL = process.env.API_URL + '/faculty/reports/education'
            let roleAssignmentURL = process.env.API_URL + '/faculty/basic-info/unit/assignment'
            
            if(data.role == 2 || data.role == 3) {
                if(data.role == 2) {
                    approvalURL += '?unitId=' + data.unitId
                    roleAssignmentURL += '?unitId=' + data.unitId

                    accompURL += '?unitId=' + data.unitId
                    empURL += '?unitId=' + data.unitId
                    educURL += '?unitId=' + data.unitId
                } else if(data.role == 3) {
                    if(context.query.accomplishment == 1) {
                        accompURL += '?'
                        if(context.query.unitId && context.query.unitId != 0) accompURL += 'unitId=' + context.query.unitId
                    } else if(context.query.employment == 1) {
                        empURL += '?'
                        if(context.query.unitId) empURL += 'unitId=' + context.query.unitId
                    } else if(context.query.degree == 1) {
                        educURL += '?'
                        if(context.query.unitId) educURL += 'unitId=' + context.query.unitId
                    }
                }

                if(context.query.accomplishment == 1) {
                    if(context.query.startDate) accompURL += '&startDate=' + context.query.startDate
                    if(context.query.endDate) accompURL += '&endDate=' + context.query.endDate
                } else if(context.query.employment == 1) {
                    if(context.query.startDate) empURL += '&startDate=' + context.query.startDate
                    if(context.query.endDate) empURL += '&endDate=' + context.query.endDate
                } else if(context.query.degree == 1) {
                    if(context.query.startDate) educURL += '&startDate=' + context.query.startDate
                    if(context.query.endDate) educURL += '&endDate=' + context.query.endDate
                }
                
                const approval = await fetch(approvalURL, header)
                approvalList = await approval.json()
                approvalList = approvalList.result

                const accompReports = await fetch(accompURL, header)
                accompList = await accompReports.json()
                accompList = accompList.result

                const empReports = await fetch(empURL, header)
                empList = await empReports.json()
                empList = empList.result

                const educReports = await fetch(educURL, header)
                educList = await educReports.json()
                educList = educList.result

                const roleAssignments = await fetch(roleAssignmentURL, header)
                let roleAssignmentList = await roleAssignments.json()
                roleAssignmentList = roleAssignmentList.result

                if(data.role == 2) {
                    if(roleAssignmentList && roleAssignmentList.approverRemarks != null) roleAssignmentFlag = true
                } else if(data.role == 3 && roleAssignmentList) {
                    roleAssignmentFlag = true 
                }
            } else if(data.role == 1) { 
                return {
                    redirect: {
                        destination: '/faculty/basic-info',
                        permanent: true,
                    },
                }
            }
        }
    } 

    return {
        props: {
            token: token && token,
            data,
            personalInfo: personalInfo.result,
            approvalList: approvalList,
            accompList: accompList,
            empList,
            educList: educList || null,
            roleAssignmentFlag,
            queryList: context.query
        }
	}
}
  
export default Dashboard
