import * as React from 'react'
import { Formik, Form, Field } from 'formik'

const ModalForm = React.forwardRef((props, ref) => {
    const formDataRef = React.useRef("");

    let educationInfo = {
        degreeCert: '',
        degreeType: '',
        institutionSchool: '',
        majorSpecialization: '',
        startDate: '',
        endDate: '',
        proof: '',
        status: '',
        approverRemarks: ''
    }
    
    const [data, setData] = React.useState(props.data ? props.data : educationInfo )
    const [proof, setProof] = React.useState("")
    
    React.useImperativeHandle(ref, () => ({
        getFormData() {
            let formData = new FormData()
            let educForm = formDataRef.current.values

            Object.keys(educForm).forEach(key => 
                formData.append(key, educForm[key] ? educForm[key] : "")
            );
            formData.set('proof', proof)
          return formData
        }
    }))

  return (
    <>
        <div className='form-container'>
            <Formik
                initialValues={data}
                innerRef={formDataRef}
            >
                <Form >
                    <div className='form-row'>
                        <label htmlFor="institutionSchool"> School/Institution </label>
                        <Field className="form-control" type="text" name="institutionSchool" id="institutionSchool" placeholder="Input degree" disabled={props.disable} />
                    </div>
                    
                    <div className='form-row'>
                        <label htmlFor="degreeType"> Degree Type </label>
                        <Field className="form-control" type="text" name="degreeType" id="degreeType" placeholder="Input degree" disabled={props.disable}/>
                    </div>
                    
                    <div className='form-row'>
                        <label htmlFor="degreeCert"> Degree/Certification </label>
                        <Field className="form-control" type="text" name="degreeCert" id="degreeCert" placeholder="Input degree" disabled={props.disable}/>
                    </div>
                    
                    <div className='form-row'>
                        <label htmlFor="majorSpecialization"> Major/Specialization </label>
                        <Field className="form-control" type="text" name="majorSpecialization" id="majorSpecialization" placeholder="Input degree" disabled={props.disable}/>
                    </div>

                    <div className='form-row'>
                        <label htmlFor="startDate"> Start Date </label>
                        <Field className="form-control" type="date" name="startDate" id="startDate" placeholder="Input degree" disabled={props.disable}/>
                    </div>

                    <div className='form-row'>
                        <label htmlFor="endDate"> End Date </label>
                        <Field className="form-control" type="date" name="endDate" id="endDate" placeholder="Input degree" disabled={props.disable}/>
                    </div>

                    { !props.disable ?
                            <div className='form-row'>
                                <label htmlFor="proof"> Proof {data.proof ? `[Uploaded: ${data.proof}]` : ""}</label>
                                <Field className="form-control" type="file" name="proof" id="proof" value={undefined} onChange={(event) => {
                            setProof(event.currentTarget.files[0]);}}/>
                            </div>
                        :
                        <>
                            <div className='form-row'>
                                <label htmlFor="status"> Status </label>
                                <Field className="form-control" type="text" name="status" id="status" disabled={props.disable}/>
                            </div>

                            <div className='form-row'>
                                <label htmlFor="approverRemarks"> Approver Remark </label>
                                <Field className="form-control" type="textarea" name="approverRemarks" id="approverRemarks" disabled={props.disable}/>
                            </div>   
                        </>
                    }    
                </Form>
            </Formik>
        </div>
    </>
  )
})

export default ModalForm