import React from 'react'
import Router from 'next/router';

import MUIDataTable from "mui-datatables";
import Chip from '@mui/material/Chip';


import PopupDialog from '../../../Dialog';
import ModalForm from './ModalForm';
import updateEducation from '../../../../services/faculty/basic-info/updateEducation';
import ResponseAlert from '../../../ResponseAlert';
import deleteEducation from '../../../../services/faculty/basic-info/deleteEducation';
const EducationTable = (props) => {
    //REF FOR CHILD COMPONENT(Modal Form)
    const formRef = React.useRef();

    // TABLE COLUMNS
    const columns = [
        {
          name: "degreeCert",
          label: "Degree",
          options : {
            filter: false,
            customBodyRender : (value, tableMeta, updateValue) => {
              return (
                <div className='tester'>{value}</div>
              )
            }
          }
        },
        {
          name: "degreeType",
          label: "Type",
          options : {
            filter: false,
            customBodyRender : (value, tableMeta, updateValue) => {
              return (
                <div className='tester'>{value}</div>
              )
            }
          }
        },
        {
          name: "institutionSchool",
          label: "Institution",
          options : {
            filter: false,
            customBodyRender : (value, tableMeta, updateValue) => {
              return (
                <div className='tester'>{value}</div>
              )
            }
          }
        }, 
        {
          name: "endDate",
          label: "End Date",
          options : {
            filter: false,
            customBodyRender : (value, tableMeta, updateValue) => {
              return (
                <div className='tester'>{value ? value : "Present"}</div>
              )
            }
          }
        }, 
        {
          name: "proof",
          label: "Proof",
          options : {
            filter: false,
            customBodyRender : (value, tableMeta, updateValue) => {
              return (
                <div className='tester'>
                    { value ? 
                        <div>
                            <button type="button" className="btn yellow m-2"><span className="material-icons-sharp align-middle">visibility</span></button>
                            <button type="button" className="btn blue m-2"><span className="material-icons-sharp align-middle">download</span></button>
                        </div>
                    : "None"}
                </div>
              )
            }
          }
        }, 
        {
          name: "status",
          label: "Status",
          options : {
            filter: true,
            filterOptions: {
              fullWidth: true
            },
            customBodyRender : (value, tableMeta, updateValue) => {
              let chipColor = value === "Active" ? "warning" : "default" ;
  
              return (
                <div className='tester'>
                  <Chip label={value} color={chipColor} variant="outlined"/> 
                </div>
              )
            }
          }
        }, 
        {
            name: "approverRemarks",
            label: "Remarks",
            options : {
              filter: false,
              customBodyRender : (value, tableMeta, updateValue) => {
                return (
                  <div className='tester'>{value ? value : "None"}</div>
                )
              }
            }
          }, 
        {
          name : "Action",
          options: {
              filter: false,
              sort: false,
              empty: true,
              customBodyRenderLite: (dataIndex, rowIndex) => {
                return (
                  <>
                  <div class="row">
                    <div class="col-md-12">
                      <button type="button" className="btn yellow m-2" onClick={() => handleAction(rowIndex,"view")}><span className="material-icons-sharp align-middle">visibility</span>View</button>
                      <button type="button" className="btn blue m-2"onClick={() => handleAction(rowIndex,"edit")}><span className="material-icons-sharp align-middle">edit</span>Edit</button>
                      <button type="button" className="btn delete m-2" onClick={() => handleAction(rowIndex,"delete")}><span className="material-icons-sharp align-middle">delete</span>Delete</button>
                      </div>            
                    </div>
                  </>
                );
              }
          },
        }
      ];
  
      const options = {
        searchPlaceholder: "Search",
        sort: true,
        // customSearchRender: debounceSearchRender(500),
        jumpToPage: true,
        rowsPerPage: 5,
        rowsPerPageOptions : [5,10,20,100,500,1000],
        filter: true,
        filterType: "dropdown",
        responsive: "scroll",
      };

    //EDUCATION DATA
    const [educationId, setEducationId] = React.useState()

    //DIALOG
    const [showDialog, setShowDialog] = React.useState(false); 
    const [dialogProps, setDialogProps] = React.useState({
        title :"",
        component :"",
        confirmBtnTxt: "",
        closeBtnTxt: "",
        modalWidth: "",
        fullWidth: true
    })
    const [dialogAction, setDialogAction] = React.useState();
    

    // RESPONSE ALERT
    const [showAlert, setShowAlert] = React.useState(false); 
    const [alertProps, setAlertProps] = React.useState({
      message : "",
      bgColor : "",
      severity: ""
    })

    // DIALOG FUNCTION
    const closeDialog = () => {
        setShowDialog(false)
    }
    // RESPONSE ALERT FUNCTIONS
    const closeAlert = () => {
      setShowAlert(false)
    }
    
  
    // TABLE ACTIONS' FUNCTION 
    const handleAction = (data, action) => {
    
        setEducationId(props.data[data].educInfoId)
        setShowDialog(true)

        if(action == "view") {
            setDialogProps({
              title :"View Education",
              component: <ModalForm data={props.data[data]} disable={true}></ModalForm>,
              confirmBtnTxt: null,
              closeBtnTxt: "close",
              modalWidth: "md",
              fullWidth: true
            })
        } else if(action == "edit") {
            setDialogProps({
              title :"Edit Education",
              component: <ModalForm data={props.data[data]} disable={false} ref={formRef}></ModalForm>,
              confirmBtnTxt: "save",
              closeBtnTxt: "cancel",
              modalWidth: "md",
              fullWidth: true
            })
            setDialogAction(() =>  { 
                return handleEdit
            })
        } else if(action == "delete") {
          setDialogProps({
            title :"Delete",
            component: <div>Are you sure you want to delete this record?</div>,
            confirmBtnTxt: "Yes",
            closeBtnTxt: "No",
            modalWidth: "sm",
            fullWidth: false
          })
          setDialogAction(() =>  { 
              return handleDelete
          })
      }
    }

    const handleEdit = async() => {
     
      let res = await updateEducation(formRef.current.getFormData(), props.token)
      setShowDialog(false)
      
      Router.push("/faculty/basic-info")
      .then(() => {
          if(res.success){
              setShowAlert(true)
              setAlertProps({
                message : res.message,
                bgColor : "#97bf97",
                severity: "success"
              })
          } else {
              setShowAlert(true)
              setAlertProps({
                message : res.message,
                bgColor : "#dc3545",
                severity: "error"
              })
          }
      })
    }
    const handleDelete = async() => {
      
        let res = await deleteEducation(educationId, props.token)
        setShowDialog(false)

        Router.push("/faculty/basic-info")
        .then(() => {
            if(res.success){
                setShowAlert(true)
                setAlertProps({
                    message : res.message,
                    bgColor : "#97bf97",
                    severity: "success"
                })
            } else {
                setShowAlert(true)
                setAlertProps({
                    message : res.message,
                    bgColor : "#dc3545",
                    severity: "error"
                    })
            }
        })
    }

  return (
    <>  
        <MUIDataTable
            title={"List of Education"}
            data={props.data}
            columns={columns}
            options={options}
        />

        <PopupDialog 
            data={dialogProps} 
            visibility={showDialog} 
            submit={dialogAction}
            close={closeDialog}>
        </PopupDialog>

        <ResponseAlert show={showAlert} data={alertProps} close={closeAlert}></ResponseAlert>
    </>
  )
}

export default EducationTable