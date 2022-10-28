import React from 'react'
import Router from 'next/router';
import updateFaculty from '../../services/faculty/basic-info/updateFaculty'
import PopupModal from "../PopupModal"
import { Formik, Form, Field } from 'formik'

const PersonalInformation = (props) => {
  let personalInfo = {
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    gender: 'Male',
    dateOfBirth: '',
    placeOfBirth: '',
    presentAddress: '',
    permanentAddress: '',
    mobile: '',
    landline: '',
    civilStatus: 'single',
    religion: '',
    email: '',
    upemail: '',
    emergencyContactPerson: '',
    emergencyContactNumber: '',
    teachingPhilosophy: '',
  }

  const [data, setData] = React.useState(props.data ? props.data.personalInfo : personalInfo )
  const [editable, setEditable] = React.useState(false)
  const [modalContent, setModalContent] = React.useState()
  const [showModal, setShowModal] = React.useState(false); 
 
  const onEdit= (e) => {
    setEditable(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <>
      {/* MODAL */}
      <PopupModal content={modalContent} visibility={showModal} closeModal={closeModal}></PopupModal>

      <div className="card">
        { !editable ?
            <div className="row">
                <div className="d-grid d-md-flex justify-content-md-end">
                    <button type = "submit" className = "customButton maroon" onClick={onEdit}><span className="material-icons-sharp">edit</span>Edit </button> 
                </div>
            </div>
          :""
        }
        <h2 className="center pb-3">Personal Information</h2>
        <Formik
            initialValues={data}
            onSubmit={async (values) => {
              const res = await updateFaculty(values, props.data.token.user) 

              if(res.success){
                Router.push('/user-profile')
                .then(() => {
                  setShowModal(true)
                  setModalContent({
                    icon: "check_circle",
                    title: "Success",
                    message: res.message,
                    btnConfirm: "Okay"
                  }) 
                  setEditable(false)
                })
              } else {
                Router.push('/user-profile')
                .then(() => {
                  setShowModal(true)
                  setModalContent({
                    icon: "error",
                    title: "Error",
                    message: res.message,
                    btnConfirm: "Okay"
                  }) 
                  setEditable(false)
                })
              } 
            }}
            >
            {({ values, errors, touched, isSubmitting }) => (
              <Form>
                  <div className="row pt-3">
                      <div className="col-3 form-group required">
                          <label className = "control-label" htmlFor="firstName">First Name</label>
                          <Field className="form-control" id="firstName" name="firstName" placeholder="" disabled={!editable} required/>
                      </div>
                      <div className="col-3">
                          <label className = "control-label" htmlFor="middleName">Middle Name</label>
                          <Field className="form-control" id="middleName" name="middleName" placeholder="" disabled={!editable}/>
                      </div>
                      <div className="col-3">
                          <label className = "control-label" htmlFor="lastName">Last Name</label>
                          <Field className="form-control" id="lastName" name="lastName" placeholder="" disabled={!editable}/>
                      </div>
                      <div className="col-3">
                          <label className = "control-label" htmlFor="suffix">Suffix</label>
                          <Field className="form-control" id="lassuffixtName" name="suffix" placeholder="-" disabled={!editable}/>
                      </div>
                  </div>

                  <div className="row pt-3">
                      <div className="col-4">
                          <label className = "control-label" htmlFor="gender">Sex</label>
                          <Field as = "select" className = "form-control" style={{height:"2.45rem"}} name = "gender" id = "gender" required disabled={!editable}>
                              <option value = "female">Female</option>
                              <option value = "male">Male</option>
                          </Field>
                      </div>
                      <div className="col-4">
                          <label className = "control-label" htmlFor="dateOfBirth">Birth Date</label>
                          <Field name="dateOfBirth" type="date" className="form-control" id="dateOfBirth" disabled={!editable}/>
                      </div>
                      <div className="col-4">
                          <label className = "control-label" htmlFor="placeOfBirth">Birth Place</label>
                          <Field className="form-control" id="placeOfBirth" name="placeOfBirth" placeholder="" disabled={!editable}/>
                      </div>
                  </div>

                  <div className="row pt-3">
                      <div>
                          <label className = "control-label" htmlFor="presentAddress">Present Address</label>
                          <Field className="form-control" id="presentAddress" name="presentAddress" placeholder="Manila" disabled={!editable}/>
                      </div>
                  </div>

                  <div className="rowpt-3">
                      <div>
                          <label className = "control-label" htmlFor="permanentAddress">Permanent Address</label>
                          <Field className="form-control" id="permanentAddress" name="permanentAddress" placeholder="Manila" disabled={!editable}/>
                      </div>
                  </div>

                  <div className="row pt-3">
                      <div className="col-3">
                          <label className = "control-label" htmlFor="mobile">Mobile Number</label>
                          <Field className="form-control" id="mobile" name="mobile" placeholder="09#########" disabled={!editable}/>
                      </div>
                      <div className="col-3">
                          <label className = "control-label" htmlFor="landline">Landline Number</label>
                          <Field className="form-control" id="landline" name="landline" placeholder="Enter 10 Digits" disabled={!editable}/>
                      </div>
                      <div className="col-3">
                          <label className = "control-label" htmlFor="civilStatus">Civil Status</label>
                          <Field as = "select" className = "form-control" style={{height:"2.45rem"}} name = "civilStatus" id = "civilStatus" required disabled={!editable}>
                              <option value = "single">Single</option>
                              <option value = "married">Married</option>
                              <option value = "separated">Separated</option>
                              <option value = "divorced">Divorced</option>
                              <option value = "widowed">Widowed</option>
                          </Field>
                      </div>
                      <div className="col-3">
                          <label className = "control-label" htmlFor="religion">Religion</label>
                          <Field className="form-control" id="religion" name="religion" placeholder="" disabled={!editable}/>
                      </div>
                  </div>

                  <div className="row pt-3">
                      <div className="col-6">
                          <label className = "control-label" htmlFor="email">Personal E-mail Address</label>
                          <Field className="form-control" type="email" id="email" name="email" placeholder="" disabled={!editable}/>
                      </div>
                      <div className="col-6">
                          <label className = "control-label" htmlFor="upemail">UP E-mail Address</label>
                          <Field className="form-control" type="email" id="upemail" name="upemail" placeholder="" disabled={!editable}/>
                      </div>
                  </div>

                  <div className="row pt-3">
                      <div className="col-6">
                          <label className = "control-label" htmlFor="emergencyContactPerson">Emergency Contact</label>
                          <Field className="form-control" id="emergencyContactPerson" name="emergencyContactPerson" placeholder=""  disabled={!editable}/>
                      </div>
                      <div className="col-6">
                          <label className = "control-label" htmlFor="emergencyContactNumber">Emergency Contact Number</label>
                          <Field className="form-control" id="emergencyContactNumber" name="emergencyContactNumber" placeholder="" disabled={!editable}/>
                      </div>
                  </div>

                  <div className="row pt-3">
                      <div>
                          <label className = "control-label" htmlFor="teachingPhilosophy">Teaching Philosopy</label>
                          <Field className = "form-control" component = "textarea" rows = {5} name = "teachingPhilosophy" id="teachingPhilosophy" required disabled={!editable}/>
                      </div>
                  </div>
                  <br/>
                  { editable?
                      <div className="center">
                          <button type = "submit" className = "customButton maroon" disabled = {isSubmitting}> 
                              <span className="material-icons-sharp">update</span>
                              Update 
                          </button> 
                      </div>
                    :""
                  }
                  
              </Form>
            )}
        </Formik>
      </div>
    </>
  )
}

export default PersonalInformation