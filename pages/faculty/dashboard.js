import * as React from 'react'
import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../helpers"
import Link from 'next/link'

import MUIDataTable from "mui-datatables";
import BarGraph from '../../components/dashboard/BarGraph'
import Widget from '../../components/dashboard/Widget'
import Filter from '../../components/dashboard/Filter'

import getAccomplishments from '../../services/reports/getAccomplishments'
import getEmployments from '../../services/reports/getEmployments'
import getEducations from '../../services/reports/getEducations'

const Dashboard = (props) =>{ 
    
    const filterRef = React.useRef()
    const [activeTab, setActiveTab] = React.useState("accomplishment")
    const [activeView, setActiveView] = React.useState("graph")
    const [dashboardData, setDashboardData] = React.useState([])
    const [graphLegend, setGraphLegend] = React.useState()
    const [graphIndex, setGraphIndex] = React.useState()
    const [count, setCount] = React.useState()

    // Table
    const [tableData, setTableData] = React.useState([])
    const [tableColumn, setTableColumn] = React.useState([])
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

    const getData = async (reqParams) => {
        
        let graphData = []
        let department = {
            "1": "Chem",
            "2": "MCSU",
            "3": "Physics/Geology",
        }
        let unitId = props.data.role == 2 ? props.data.unitId : reqParams ? reqParams.unitId : ""

        // reqParams = reqParams ? { unitId: reqParams.unitId, startDate: reqParams.startDate, endDate: reqParams.endDate } : {}

        reqParams = reqParams ? { unitId: unitId, startDate: reqParams.startDate, endDate: reqParams.endDate } :  { unitId: unitId }

        if(activeTab == "accomplishment") {
            let res = await getAccomplishments(reqParams, props.token.user)
        
            graphData = [
                {
                  "AccomplishmentType": "Public Service",
                  "MCSU": 0,
                  "Chem": 0,
                  "Physics/Geology": 0
                },
                {
                  "AccomplishmentType": "Publications",
                  "MCSU": 0,
                  "Chem": 0,
                  "Physics/Geology": 0
                },
                {
                  "AccomplishmentType": "Research Grants",
                  "MCSU": 0,
                  "Chem": 0,
                  "Physics/Geology": 0
                },
                {
                  "AccomplishmentType": "Training/Seminars",
                  "MCSU": 0,
                  "Chem": 0,
                  "Physics/Geology": 0
                }
              ]
              let data = []
            if(res.result){
                res.result.forEach(element => {
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
                   
                    if(activeView == "list") {

                        let accomplishments = [
                            {
                                name: ["faculty_public_services"],
                                title: ["position","organization"],
                                category: "Public Service",
                                date: ["startDate", "endDate"]
                            },
                            {
                                name: ["faculty_publishers","faculty_publication"],
                                title: ["title"],
                                category: "Publication",
                                date: ["publicationDate"]
                            },
                            {
                                name: ["faculty_researchers","faculty_research_grant"],
                                title: ["researchName"],
                                category: "Research Grant",
                                date: ["actualStart", "actualEnd"]
                            },
                            {
                                name: ["faculty_training_seminars"],
                                title: ["role","title"],
                                category: "Training/Seminar",
                                date: ["dateFrom", "dateTo"]
                            }
                        ]
                        accomplishments.forEach(accomplishment => {
                            element[accomplishment.name[0]].forEach(item => {
                                let itemData = accomplishment.name.length > 1 ? item[accomplishment.name[1]] : item
                                data.push({
                                    name : [element.firstName, element.lastName].join(" "),
                                    accomplishment : accomplishment.title.length > 1 ? [itemData[accomplishment.title[0]], itemData[accomplishment.title[1]]].join("-") : itemData[accomplishment.title[0]],
                                    category: accomplishment.category,
                                    date: accomplishment.date.length < 2 ? itemData[accomplishment.date[0]] : "",
                                    startDate: itemData[accomplishment.date[0]],
                                    endDate : itemData[accomplishment.date[1]]
                                })
                            })
                        })

                        let columns = [
                            { name : "name", label:  "Faculty Name"},
                            { name : "accomplishment", label:  "Accomplishment"},
                            { name : "category", label:  "Category"},
                            { name : "date", label:  "Date"},
                            { name : "startDate", label:  "Start Date"},
                            { name : "endDate", label:  "End Date"}
                        ]
                        let columnData = []
                        columns.forEach(column => {
                            columnData.push({
                                name: column.name,
                                label: column.label,
                                options : {
                                    filter: false,
                                    customBodyRender : (value, tableMeta, updateValue) => {
                                    return (
                                        <div>{value}</div>
                                    )
                                    }
                                }
                            })
                        })   
                    
                        setTableData(data)
                        setTableColumn(columnData)
                    }
                });
            }  
        
            setGraphLegend("Accomplishment Type")
            setGraphIndex("AccomplishmentType")

        }else if(activeTab == "employment") {
            let res = await getEmployments(reqParams, props.token.user)
          
            graphData = [
                {
                  "EmploymentStatus": "Part-time",
                  "MCSU": 0,
                  "Chem": 0,
                  "Physics/Geology": 0,
                },
                {
                  "EmploymentStatus": "Full-time",
                  "MCSU": 0,
                  "Chem": 0,
                  "Physics/Geology": 0,
                },
                {
                  "EmploymentStatus": "Lecturer",
                  "MCSU": 0,
                  "Chem": 0,
                  "Physics/Geology": 0,
                }
            ]
            let data = []

            if(res.result){
                res.result.forEach(element => {
    
                    graphData.forEach((val,index) => {
                        if(val["EmploymentStatus"] == "Part-time") {
                            graphData[index][department[element.faculty_unit.unitId]] += element.faculty_employment_infos.filter((employment) => {
                                return employment.status == "Part-time"
                            }).length
                        } else if(val["EmploymentStatus"] == "Full-time") {
                            graphData[index][department[element.faculty_unit.unitId]] += element.faculty_employment_infos.filter((employment) => {
                                return employment.status == "Full-time"
                            }).length
                        } else if(val["EmploymentStatus"] == "Lecturer") {
                            graphData[index][department[element.faculty_unit.unitId]] += element.faculty_employment_infos.filter((employment) => {
                                return employment.status == "Lecturer"
                            }).length
                        }
                    });

                    if(activeView == "list") {

                        element.faculty_employment_infos.forEach(employmentInfo => {
                            data.push({
                                name : [element.firstName, element.lastName].join(" "),
                                position: employmentInfo.faculty_employment_position["position"],
                                status: employmentInfo.status,
                                category: employmentInfo.category,
                                startDate: employmentInfo.startDate,
                            })
                        })

                        let columns = [
                            { name : "name", label:  "Faculty Name"},
                            { name : "position", label:  "Position"},
                            { name : "status", label:  "Status"},
                            { name : "category", label:  "Category"},
                            { name : "startDate", label:  "Start Date"},
                        ]

                        let columnData = []
                        columns.forEach(column => {
                            columnData.push({
                                name: column.name,
                                label: column.label,
                                options : {
                                    filter: false,
                                    customBodyRender : (value, tableMeta, updateValue) => {
                                    return (
                                        <div>{value}</div>
                                    )
                                    }
                                }
                            })
                        })   
                        
                        setTableData(data)
                        setTableColumn(columnData)
                    }
                });
            }  
            setGraphLegend("Employment Status")
            setGraphIndex("EmploymentStatus")
            
        } else if(activeTab == "degree") {
            
            let res = await getEducations(reqParams, props.token.user)
         
            graphData = [
                {
                    "DegreeAttained": "Bachelor's",
                    "MCSU": 0,
                    "Chem": 0,
                    "Physics/Geology": 0,
                },
                {
                    "DegreeAttained": "Master's",
                    "MCSU": 0,
                    "Chem": 0,
                    "Physics/Geology": 0,
                },
                {
                    "DegreeAttained": "Doctorate",
                    "MCSU": 0,
                    "Chem": 0,
                    "Physics/Geology": 0,
                },
                {
                    "DegreeAttained": "Other",
                    "MCSU": 0,
                    "Chem": 0,
                    "Physics/Geology": 0,
                }
            ]
            
            let degree = ["BA","BS", "MA","MS","PhD"]
            let data = []

            if(res.result){
                res.result.forEach(element => {
    
                    graphData.forEach((val,index) => {
                        if(val["DegreeAttained"] == "Bachelor's") {
                            graphData[index][department[element.faculty_unit.unitId]] += element.faculty_education_infos.filter((education) => {
                                return education.degreeType == "BA" || education.degreeType == "BS"
                            }).length
                        } else if(val["DegreeAttained"] == "Master's") {
                            graphData[index][department[element.faculty_unit.unitId]] += element.faculty_education_infos.filter((education) => {
                                return education.degreeType == "MA" || education.degreeType == "MS"
                            }).length
                        } else if(val["DegreeAttained"] == "Doctorate") {
                            graphData[index][department[element.faculty_unit.unitId]] += element.faculty_education_infos.filter((education) => {
                                return education.degreeType == "PhD"
                            }).length
                        } else {
                            graphData[index][department[element.faculty_unit.unitId]] += element.faculty_education_infos.filter((education) => {
                                return !degree.includes(education.degreeType)
                            }).length
                        }
                    });

                    if(activeView == "list") {

                        element.faculty_education_infos.forEach(educationInfo => {
                            data.push({
                                name : [element.firstName, element.lastName].join(" "),
                                degree: educationInfo.degreeCert,
                                degreeType: educationInfo.degreeType,
                                dateEarned: educationInfo.endDate,
                            })
                        })

                        let columns = [
                            { name : "name", label:  "Faculty Name"},
                            { name : "degree", label:  "Degree"},
                            { name : "degreeType", label:  "Degree Type"},
                            { name : "dateEarned", label:  "Date Earned"}
                        ]

                        let columnData = []
                        columns.forEach(column => {
                            columnData.push({
                                name: column.name,
                                label: column.label,
                                options : {
                                    filter: false,
                                    customBodyRender : (value, tableMeta, updateValue) => {
                                    return (
                                        <div>{value}</div>
                                    )
                                    }
                                }
                            })
                        })   
                        
                        setTableData(data)
                        setTableColumn(columnData)
                    }
                });
            }  
            setGraphLegend("Degree Attained")
            setGraphIndex("DegreeAttained")
        } 
        setDashboardData(graphData)
    } 

    React.useEffect(()=>{
        getData()
    },[activeTab, activeView])
  
	if(props.data.role == 1) {
		return (<></>)
	} else if(props.data.role == 2 || props.data.role == 3){ 
		return (
	        <>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8">
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
                            <ul className="nav nav-pills justify-content-end my-3">
                                <li className="nav-item">
                                    <a 
                                        className="btn maroon active" 
                                        data-bs-toggle="pill" 
                                        href="#graph"
                                        onClick={()=> setActiveView("graph")}
                                    >
                                        <span className="material-icons-sharp">bar_chart</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a 
                                        className="btn maroon" 
                                        data-bs-toggle="pill" 
                                        href="#list"
                                        onClick={()=> setActiveView("list")}
                                    >
                                        <span className="material-icons-sharp">format_list_bulleted</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="graph" className="card  tab-pane active">
                                    <BarGraph data={dashboardData} index={graphIndex} legend={graphLegend}></BarGraph>
                                </div>
                                <div id="list" className="tab-pane fade">
                                    <MUIDataTable
                                        data={tableData} 
                                        columns={tableColumn}
                                        options={options}
                                    />
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-4">
                        {/* <Filter ref={filterRef} handle={getData}></Filter> */}
                        <Filter handle={getData} role={props.data.role}></Filter>
                        <Widget data={dashboardData} count={count}></Widget>
                        <Link href = {{ pathname: "/faculty/generate-reports"}}>
                            <button className = "btn customButton maroon w-100">
                                <span className="material-icons-sharp">file_download</span>
                                Get All Info
                            </button>
                        </Link>
                    </div>
                </div>
	        </>
	    )	
	}
}

export async function getServerSideProps(context) { 
    const token = parseCookies(context.req)
    let data

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
        }
    } 

    return {
        props: {
            token: token && token,
            data
        }
	}
}
  
export default Dashboard
