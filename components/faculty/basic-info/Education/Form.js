import React from 'react'

import { Formik, Form, Field } from 'formik'
import Router from 'next/router'

import addEducation from '../../../../services/faculty/basic-info/addEducation'
import ResponseAlert from '../../../ResponseAlert'

const EducationForm = (props) => {
    const proofRef = React.useRef(null)
    let EducationDetails = {
        institutionSchool: "",
        degreeType: "AA",
        degreeCert: "",
        majorSpecialization: "",
        startDate: "",
        endDate: "",
        proof: ""
    }
    const [proof, setProof] = React.useState("")

    // RESPONSE ALERT
    const [showAlert, setShowAlert] = React.useState(false); 
    const [alertProps, setAlertProps] = React.useState({
      message : "",
      bgColor : "",
      severity: ""
    })

    // RESPONSE ALERT FUNCTIONS
    const closeAlert = () => {
        setShowAlert(false)
    }
  return (
    <>
        <div className="collapse mb-5" id="addForm">
            <div className="card">
                <Formik
                    initialValues={EducationDetails}
                    onSubmit={async (values, {resetForm}) => {
                        
                        let formData = new FormData()
                        
                        Object.keys(values).forEach(key => 
                            formData.append(key, values[key] ? values[key] : "")
                        );
                        formData.set('proof', proof)
                        
                        let res = await addEducation(formData, props.token)
                        
                        
                        Router.push('/faculty/basic-info')
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
                        
                        resetForm()
                        proofRef.current.value = "";
                        setProof(proofRef.current.value)
                    }}
                >
                    <Form id="educForm">
                        {/* 1st Row */}
                        <div className="row pb-3">
                            <div className="form-group col-md-12">
                                <label htmlFor="institutionSchool" className="required-label"> Institution </label>
                                <Field className="form-control" type="text" name="institutionSchool" id="institutionSchool" placeholder="Input name of Institution or School" required />
                            </div>
                        </div>

                        {/* 2nd Row */}
                        <div className="row pb-3">
                            <div className="form-group col-md-2 required">
                                <label className="control-label required-label" htmlFor="degreeType"> Degree Type </label>
                                    <Field as="select" className="form-control" name="degreeType" id="degreeType" required>
                                        <option value = "AA">AA</option>
                                        <option value = "AS">AS</option>
                                        <option value = "BA">BA</option>
                                        <option value = "BS">BS</option>
                                        <option value = "MA">MA</option>
                                        <option value = "MS">MS</option>
                                        <option value = "MD">MD</option>
                                        <option value = "PhD">PhD</option>
                                        <option value = "DEng">DEng</option>
                                        <option value = "DrPH">DrPH</option>
                                    </Field>
                            </div>
                            <div className="form-group col-md-5">
                                <label htmlFor="degreeCert" className="required-label"> Degree/Certification </label>
                                <Field className="form-control" type="text" name="degreeCert" id="degreeCert" placeholder="Input degree" required />
                            </div>

                            <div className="form-group col-md-5">
                                <label htmlFor="majorSpecialization"> Major/Specialization </label>
                                <Field className="form-control" type="text" name="majorSpecialization" id="majorSpecialization" placeholder="Input major" />
                            </div>
                        </div>

                        {/* 3rd Row */}
                        <div className="row pb-3">
                                <div className="form-group col-md-4">
                                    <label htmlFor="startDate" className="required-label"> Start Date </label>
                                    <Field type="date" className="form-control" name="startDate" id="startDate" required />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="endDate" > End Date </label>
                                    <Field type="date" className="form-control" name="endDate" id="endDate" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="proof" > Proof: </label><br/>
                                    <input 
                                        ref={proofRef}
                                        type="file" 
                                        className="hidden-file-input" 
                                        id="proof"
                                        name="proof" 
                                        // value={proof}
                                        onChange={(event) => {
                                            setProof(event.currentTarget.files[0]);
                                        }}/>
                                    {/* Custom file input */}
                                    <div class="input-group mb-3">
                                        <button 
                                            class="btn maroon" 
                                            type="button" 
                                            onClick={()=>proofRef.current.click()}>
                                            <span className="material-icons-sharp">file_present</span>
                                            Upload
                                        </button>
                                        <div class="form-control custom-file-upload">{proofRef.current !== null && proofRef.current.value !== "" ? proofRef.current.files[0].name : "" }</div>
                                    </div>
                                </div>
                        </div>
                        <br />
                        <div className="center">
                            <button type="submit" className="btn customButton maroon">
                                Submit
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
        <ResponseAlert show={showAlert} data={alertProps} close={closeAlert}></ResponseAlert>
    </>
  )
}

export default EducationForm