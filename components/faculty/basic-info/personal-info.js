import Link from 'next/link'
import { MenuItem } from '@material-ui/core'
import { Formik, Form, Field } from "formik"

import updateFaculty from '../../../services/faculty/basic-info/updateFaculty'

function PersonalInfo(props) {
    let FacultyDetails = {
        lastName: props.children.lastName,
        middleName: props.children.middleName,
        permanentAddress: props.children.permanentAddress,
        presentAddress: props.children.presentAddress,
        mobile: props.children.mobile,
        landline: props.children.landline,
        email: props.children.email,
        civilStatus: props.children.civilStatus,
        religion: props.children.religion,
        emergencyContactPerson: props.children.emergencyContactPerson,
        emergencyContactNumber: props.children.emergencyContactNumber
    }
    return (
        <div>
		<h6>Required</h6>
		<Formik
            initialValues={FacultyDetails}
            onSubmit={async (values) => {await updateFaculty(values)}}
        >
            {({ values, errors, touched, isSubmitting }) => (
                <Form>
                    <br />
                    <div className = "form-row">
                        <div className = "form-group col-md-3 required">
                            <label className = "control-label" htmlFor = "FirstName"> First Name </label>
                            <input className = "form-control" type = "text" name = "FirstName" defaultValue = { props.children.firstName } required />
                        </div>
                        <div className = "form-group col-md-3">
                            <label htmlFor = "MiddleName"> Middle Name </label>
                            <Field className = "form-control" type = "text" name = "middleName" defaultValue = { props.children.middleName } required />
                        </div>
                        <div className = "form-group col-md-3 required">
                            <label className = "control-label" htmlFor = "LastName"> Last Name </label>
                            <Field className = "form-control" type = "text" name = "lastName" defaultValue = { props.children.lastName } required />
                        </div>
                        <div className = "form-group col-md-3">
                            <label htmlFor = "Suffix"> Suffix </label>
                            <input className = "form-control" type = "text" name = "Suffix" />
                        </div>
                    </div>
                    <div className = "form-row">
                        <div className = "form-group col-md-4" required>
                            <label className = "control-label" htmlFor = "Sex"> Sex </label>
                            <select className = "form-control" name = "Sex" defaultValue = { props.children.gender } required>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "DateOfBirth"> Date of Birth </label>
                            <input className = "form-control" type = "date" name = "DateOfBirth" defaultValue = { props.children.dateOfBirth } required />
                        </div>
                        <div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "PlaceOfBirth"> Place of Birth </label>
                            <input className = "form-control" type = "text" name = "PlaceOfBirth" defaultValue = { props.children.placeOfBirth } required />
                        </div>
                    </div>
                    <br />
                    <div className = "form-group required">
                        <label className = "control-label" htmlFor = "PresentAddress"> Present Address </label>
                        <Field className = "form-control" type = "text" name = "presentAddress" defaultValue = { props.children.presentAddress } required />
                    </div>
                    <div className = "form-group required">
                        <label className = "control-label" htmlFor = "PermanentAddress"> Permanent Address </label>
                        <Field className = "form-control" type = "text" name = "permanentAddress" defaultValue = { props.children.permanentAddress } required />
                    </div>
                    <div className = "form-row">
                        <div className = "form-group col-md-6 required">
                            <label className = "control-label" htmlFor ="CivilStatus"> Civil Status </label>
                            <select className = "form-control" name = "CivilStatus" defaultValue = { props.children.civilStatus } required>
                                <option>Single</option>
                                <option>Married</option>
                                <option>Separated (Legally)</option>
                                <option>Divorced</option>
                                <option>Widowed</option>
                            </select>
                        </div>
                        <div className = "form-group col-md-6">
                                <label htmlFor = "Religion"> Religion </label>
                                <Field className = "form-control" type = "text" name = "Religion" defaultValue = { props.children.religion } required />
                        </div>
                    </div>
                    <div className = "form-row">
                        <div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "ContactNumber"> Contact Number (Landline) </label>
                            <Field className = "form-control" type = "tel" name = "landline" pattern = "[0-9]{8}" defaultValue = { props.children.landline } required />
                        </div>
                    <div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "ContactNumber"> Contact Number (Mobile) </label>
                            <Field className = "form-control" type = "tel" name = "mobile" pattern = "[0]{1}[9]{1}[0-9]{9}" defaultValue = { props.children.mobile } required />
                        </div>
                        <div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "EmailAddress"> Email Address </label>
                            <Field className = "form-control" type = "email" name = "email" defaultValue = { props.children.email } required />
                        </div>
                    </div>
                    <div className = "form-row">
                        <div className = "form-group col-md-6 required">
                            <label className = "control-label" htmlFor = "EmergencyContact"> Emergency Contact </label>
                            <Field className = "form-control" type = "text" name = "emergencyContactPerson" defaultValue = { props.children.emergencyContactPerson } required />
                        </div>
                        <div className = "form-group col-md-6 required">
                            <label className = "control-label" htmlFor = "EmergencyContactNumber"> Emergency Contact Number </label>
                            <Field className = "form-control" type = "tel" name = "emergencyContactNumber" pattern = "[0]{1}[9]{1}[0-9]{9}" defaultValue = { props.children.emergencyContactNumber } required />
                        </div>
                    </div>
                    {/* <div className = "form-row">
                        <div className = "form-group col-md-3 required">
                            <label className = "control-label" htmlFor ="Unit"> Unit </label>
                                        <select className = "form-control" name = "Unit">
                                <option>Mathematics and Computer Science</option>
                                <option>Physics and Geology</option>
                                <option>Chemistry</option>
                            </select>
                                </div>
                        <div className = "form-group col-md-6 required">
                            <label className = "control-label" htmlFor ="Position"> Position </label>
                                        <select className = "form-control" name = "Position" required>
                                <option>Instructor 1</option>
                                <option>Instructor 2</option>
                                <option>Instructor 3</option>
                                <option>Instructor 4</option>
                                <option>Instructor 5</option>
                                <option>Instructor 6</option>
                                <option>Instructor 7</option>
                                <option>Assistant Professor 1</option>
                                <option>Assistant Professor 2</option>
                                <option>Assistant Professor 3</option>
                                <option>Assistant Professor 4</option>
                                <option>Assistant Professor 5</option>
                                <option>Assistant Professor 6</option>
                                <option>Assistant Professor 7</option>
                                <option>Associate Professor 1</option>
                                <option>Associate Professor 2</option>
                                <option>Associate Professor 3</option>
                                <option>Associate Professor 4</option>
                                <option>Associate Professor 5</option>
                                <option>Associate Professor 6</option>
                                <option>Associate Professor 7</option>
                                <option>Professor 1</option>
                                <option>Professor 2</option>
                                <option>Professor 3</option>
                                <option>Professor 4</option>
                                <option>Professor 5</option>
                                <option>Professor 6</option>
                                <option>Professor 7</option>
                                <option>Professor 8</option>
                                <option>Professor 9</option>
                                <option>Professor 10</option>
                                <option>Professor 11</option>
                                <option>Professor 12</option>
                                <option>Lecturer 1</option>
                                <option>Lecturer 2</option>
                                <option>Lecturer 3</option>
                                <option>Senior Lecturer 1</option>
                                <option>Senior Lecturer 2</option>
                                <option>Senior Lecturer 3</option>
                            </select>
                                </div>
                        <div className = "form-group col-md-3 required">
                            <label className = "control-label" htmlFor ="PositionType"> Type </label>
                                        <select className = "form-control" name = "PositionType" required>
                                <option>Part-time</option>
                                <option>Full-time</option>
                            </select>
                                </div>
                            </div> */}
                    <br />
                    <button 
                        type = "submit" 
                        className = "btn btn-primary"
                        disabled = {isSubmitting}
                    > 
                        Update
                    </button>
                </Form>
            )}
        </Formik>
	<style jsx>{`
		.form-group.required .control-label:after{
			content: "*";
			color: #f00;
		}
		h6:before{
			content: "* ";
			color: #f00;
		}
	`}</style>
        </div>     
    )
  }
  
  export default PersonalInfo