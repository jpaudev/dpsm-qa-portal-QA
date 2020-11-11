import Link from 'next/link'

function PersonalInfo() {
    return (
        <div>
            <form action="">
                <div className = "form-row">
                    <div className = "form-group col-md-4">
                        <label htmlFor = "FirstName"> First Name </label>
                        <input className = "form-control" type = "text" name = "FirstName" value = "Jodie Lee Diane" disabled required />
                    </div>
                    <div className = "form-group col-md-4">
                        <label htmlFor = "MiddleName"> Middle Name </label>
                        <input className = "form-control" type = "text" name = "MiddleName" value = "Pacay" required />
                    </div>
                    <div className = "form-group col-md-4">
                        <label htmlFor = "LastName"> Last Name </label>
                        <input className = "form-control" type = "text" name = "LastName" value = "Cristobal" required />
                    </div>
                </div>
                <div className = "form-row">
                    <div className = "form-group col-md-4">
                        <label htmlFor = "Gender"> Gender </label>
                        <input className = "form-control" type = "text" name = "Gender" value = "Female" disabled required />
                    </div>
                    <div className = "form-group col-md-4">
                        <label htmlFor = "DateOfBirth"> Date of Birth </label>
                        <input className = "form-control" type = "text" name = "DateOfBirth" value = "1994-01-06" disabled required />
                    </div>
                    <div className = "form-group col-md-4">
                        <label htmlFor = "PlaceOfBirth"> Place of Birth </label>
                        <input className = "form-control" type = "text" name = "PlaceOfBirth" value = "Cristobal" disabled required />
                    </div>
                </div>
                <br />
                <div className = "form-group">
                    <label htmlFor = "PresentAddress"> Present Address </label>
                    <input className = "form-control" type = "text" name = "PresentAddress" value = "Input address" required />
                </div>
                <div className = "form-group">
                    <label htmlFor = "PermanentAddress"> Permanent Address </label>
                    <input className = "form-control" type = "text" name = "PermanentAddress" value = "Input address" required />
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
                    		<input className = "form-control" type = "text" name = "Religion" value = "Input religion" required />
                	</div>
		</div>
                <div className = "form-row">
                    <div className = "form-group col-md-4">
                        <label htmlFor = "ContactNumber"> Contact Number (Landline) </label>
                        <input className = "form-control" type = "text" name = "ContactNumberLandline" value = "Input landline number" required />
                    </div>
		    <div className = "form-group col-md-4">
                        <label htmlFor = "ContactNumber"> Contact Number (Mobile) </label>
                        <input className = "form-control" type = "text" name = "ContactNumberMobile" value = "Input mobile number" required />
                    </div>
                    <div className = "form-group col-md-4">
                        <label htmlFor = "EmailAddress"> Email Address </label>
                        <input className = "form-control" type = "email" name = "EmailAddress" value = "Input email address" required />
                    </div>
                </div>
                <div className = "form-row">
                    <div className = "form-group col-md-6">
                        <label htmlFor = "EmergencyContact"> Emergency Contact </label>
                        <input className = "form-control" type = "text" name = "EmergencyContact" value = "Input emergency contact" required />
                    </div>
                    <div className = "form-group col-md-6">
                        <label htmlFor = "EmergencyContactNumber"> Emergency Contact Number </label>
                        <input className = "form-control" type = "text" name = "EmergencyContactNumber" value = "Input emergency contact number" required />
                    </div>
                </div>
		<br />
		<button type = "submit" className = "btn btn-primary"> Update </button>
            </form>
        </div>     
    )
  }
  
  export default PersonalInfo
