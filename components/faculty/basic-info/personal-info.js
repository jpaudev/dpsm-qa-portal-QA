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
		<div className = "form-row">
			<div className = "form-group col-md-3">
				<label htmlFor = "Unit"> Unit </label>
				<select className = "form-control" name = "Unit">
					<option>Mathematical and Computing Sciences</option>
					<option>Chemistry</option>
					<option>Physics and Geology</option>
				</select>
			</div>
			<div className = "form-group col-md-3">
				<label htmlFor = "Type"> Type </label>
				<select className = "form-control" name = "Type">
					<option>Part-Time</option>
					<option>Full-Time</option>
				</select>
			</div>
			<div className = "form-group col-md-3">
				<label htmlFor = "Position"> Position </label>
				<select className = "form-control" name = "Position">
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
			<div className = "form-group col-md-3">
				<label htmlFor = "Status"> Status </label>
				<select className = "form-control" name = "Status">
					<option>Active</option>
					<option>Study Leave</option>
					<option>Sabbatical Leave</option>
				</select>
			</div>
		</div>
            </form>
        </div>     
    )
  }
  
  export default PersonalInfo
