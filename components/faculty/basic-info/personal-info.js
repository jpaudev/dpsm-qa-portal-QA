import Link from 'next/link'

function PersonalInfo(props) {
    return (
        <div>
            { JSON.stringify(props) }
            <form action="">
                <div className = "form-row">
                    <div className = "form-group col-md-4">
                        <label htmlFor = "FirstName"> First Name </label>
                        <input className = "form-control" type = "text" name = "FirstName" defaultValue = { props.children.firstName } disabled required />
                    </div>
                    <div className = "form-group col-md-4">
                        <label htmlFor = "MiddleName"> Middle Name </label>
                        <input className = "form-control" type = "text" name = "MiddleName" defaultValue = { props.children.middleName } required />
                    </div>
                    <div className = "form-group col-md-4">
                        <label htmlFor = "LastName"> Last Name </label>
                        <input className = "form-control" type = "text" name = "LastName" defaultValue = "Cristobal" required />
                    </div>
                </div>
                <div className = "form-row">
                    <div className = "form-group col-md-4">
                        <label htmlFor = "Gender"> Gender </label>
                        <input className = "form-control" type = "text" name = "Gender" defaultValue = "Female" disabled required />
                    </div>
                    <div className = "form-group col-md-4">
                        <label htmlFor = "DateOfBirth"> Date of Birth </label>
                        <input className = "form-control" type = "text" name = "DateOfBirth" defaultValue = "1994-01-06" disabled required />
                    </div>
                    <div className = "form-group col-md-4">
                        <label htmlFor = "PlaceOfBirth"> Place of Birth </label>
                        <input className = "form-control" type = "text" name = "PlaceOfBirth" defaultValue = "Cristobal" disabled required />
                    </div>
                </div>
                <br />
                <div className = "form-group">
                    <label htmlFor = "PresentAddress"> Present Address </label>
                    <input className = "form-control" type = "text" name = "PresentAddress" defaultValue = "Input address" required />
                </div>
                <div className = "form-group">
                    <label htmlFor = "PermanentAddress"> Permanent Address </label>
                    <input className = "form-control" type = "text" name = "PermanentAddress" defaultValue = "Input address" required />
                </div>
		<div className = "form-row">
                	<div className = "form-group col-md-6">
				<label htmlFor ="CivilStatus"> Civil Status </label>
                    		<select className = "form-control" name = "CivilStatus">
					<option>Single</option>
					<option>Married</option>
					<option>Separated</option>
					<option>Divorced</option>
					<option>Widowed</option>
				</select>
                	</div>
               		<div className = "form-group col-md-6">
                    		<label htmlFor = "Religion"> Religion </label>
                    		<input className = "form-control" type = "text" name = "Religion" defaultValue = "Input religion" required />
                	</div>
		</div>
                <div className = "form-row">
                    <div className = "form-group col-md-4">
                        <label htmlFor = "ContactNumber"> Contact Number (Landline) </label>
                        <input className = "form-control" type = "text" name = "ContactNumberLandline" defaultValue = "Input landline number" required />
                    </div>
		    <div className = "form-group col-md-4">
                        <label htmlFor = "ContactNumber"> Contact Number (Mobile) </label>
                        <input className = "form-control" type = "text" name = "ContactNumberMobile" defaultValue = "Input mobile number" required />
                    </div>
                    <div className = "form-group col-md-4">
                        <label htmlFor = "EmailAddress"> Email Address </label>
                        <input className = "form-control" type = "email" name = "EmailAddress" defaultValue = "Input email address" required />
                    </div>
                </div>
                <div className = "form-row">
                    <div className = "form-group col-md-6">
                        <label htmlFor = "EmergencyContact"> Emergency Contact </label>
                        <input className = "form-control" type = "text" name = "EmergencyContact" defaultValue = "Input emergency contact" required />
                    </div>
                    <div className = "form-group col-md-6">
                        <label htmlFor = "EmergencyContactNumber"> Emergency Contact Number </label>
                        <input className = "form-control" type = "text" name = "EmergencyContactNumber" defaultValue = "Input emergency contact number" required />
                    </div>
                </div>
		<br />
		<button type = "submit" className = "btn btn-primary"> Update </button>
            </form>
        </div>     
    )
  }
  
  export default PersonalInfo
