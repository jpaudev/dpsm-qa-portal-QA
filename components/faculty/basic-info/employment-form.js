import React from 'react';
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addEmployment from '../../../services/faculty/basic-info/addEmployment'

class EmploymentForm extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		let WorkDetails = {
			employmentPositionId: "",
			startDate: "",
			endDate: ""
		}
        let positions = []

        if(this.props.positionsList) {
            this.props.positionsList.forEach(key => {
                positions.push(
                    <option value = {key.employmentPositionId}>{key.position}</option>    
                )
            });
        }

		return(
			<Formik
				initialValues={WorkDetails}
				onSubmit={async (values, {resetForm}) => {
					let alert = document.getElementById("workexpalert")
					let res = await addEmployment(values, this.props.token, this.props.facultyId)
					if(res.success == true) { 
						alert.className ="alert alert-success"
						alert.style = "visibility: visible"
						alert.innerHTML = res.message
					} else {
						alert.className = "alert alert-danger"
						if(res.error) alert.innerHTML = res.error[0].message
						else alert.innerHTML = res.message
					}
					$("#workexpalert").fadeTo(5000, 500).slideUp(500, function(){
						$("#workexpalert").slideUp(500);
					});
					
					resetForm()
					Router.push('/admin/' + this.props.facultyId, '/admin/' + this.props.facultyId)
				}}
			>
				{({ values, errors, touched, isSubmitting }) => (
					<Form>
                        <hr />
                        <br />
                        <div className = "form-row">
                            <div className = "form-group col-md-3">
                                <label htmlFor = "Position[]"> Position *</label>
                                <Field as = "select" className = "form-control" name = "employmentPositionId" id = "employmentPositionId" required>
                                    <option value="0" key = "0">-- SELECT POSITION --</option>
                                    {positions}
                                </Field>
                            </div>
                            <div className = "form-group col-md-3">
                                <label htmlFor = "StartDateEmployment[]"> Start Date *</label>
                                <Field type = "date" className = "form-control" name = "startDate" required />
                            </div>
                            <div className = "form-group col-md-3">
                                <label htmlFor = "EndDateEmployment[]"> End Date </label>
                                <Field type = "date" className = "form-control" name = "endDate" />
                            </div>
                        </div>
                        <br />
                        <button type = "submit" className = "btn btn-primary" disabled = {isSubmitting}>Submit</button>
                    </Form>
				)}
			</Formik>
		)
	}

}

export default EmploymentForm;
