import Link from 'next/link'

function PersonalInfo() {
    return (
        <div>
            <form action="">
                <div class = "form-row">
                    <div class = "form-group col-md-4">
                        <label for = "FirstName"> First Name </label>
                        <input class = "form-control" type = "text" name = "FirstName" value = "Jodie Lee Diane" disabled required />
                    </div>
                    <div class = "form-group col-md-4">
                        <label for = "MiddleName"> Middle Name </label>
                        <input class = "form-control" type = "text" name = "MiddleName" value = "Pacay" required />
                    </div>
                    <div class = "form-group col-md-4">
                        <label for = "LastName"> Last Name </label>
                        <input class = "form-control" type = "text" name = "LastName" value = "Cristobal" required />
                    </div>
                </div>
                <div class = "form-row">
                    <div class = "form-group col-md-4">
                        <label for = "Gender"> Gender </label>
                        <input class = "form-control" type = "text" name = "Gender" value = "Female" disabled required />
                    </div>
                    <div class = "form-group col-md-4">
                        <label for = "DateOfBirth"> Date of Birth </label>
                        <input class = "form-control" type = "text" name = "DateOfBirth" value = "1994-01-06" disabled required />
                    </div>
                    <div class = "form-group col-md-4">
                        <label for = "PlaceOfBirth"> Place of Birth </label>
                        <input class = "form-control" type = "text" name = "PlaceOfBirth" value = "Cristobal" disabled required />
                    </div>
                </div>
                <br />
                <div class = "form-group">
                    <label for = "PresentAddress"> Present Address </label>
                    <input class = "form-control" type = "text" name = "PresentAddress" value = "Input address" required />
                </div>
                <div class = "form-group">
                    <label for = "PermanentAddress"> Permanent Address </label>
                    <input class = "form-control" type = "text" name = "PermanentAddress" value = "Input address" required />
                </div>
                <label> Civil Status </label> <br />
                <div class = "form-check">
                    <input class = "form-check-input" type = "radio" name = "CivilStatus" id = "CivilStatusSingle" value = "single" selected required />
                    <label class = "form-check-label" for = "CivilStatusSingle"> Single </label>
                    <br />
                    <input class = "form-check-input" type = "radio" name = "CivilStatus" id = "CivilStatusMarried" value = "married" required />
                    <label class = "form-check-label" for = "CivilStatusMarried"> Married </label>
                    <br />
                    <input class = "form-check-input" type = "radio" name = "CivilStatus" id = "CivilStatusDivorced" value = "divorced" required />
                    <label class = "form-check-label" for = "CivilStatusDivorced"> Divorced </label>
                    <br />
                    <input class = "form-check-input" type = "radio" name = "CivilStatus" id = "CivilStatusSeparated" value = "separated" required />
                    <label class = "form-check-label" for = "CivilStatusSeparated"> Separated </label>
                    <br />
                    <input class = "form-check-input" type = "radio" name = "CivilStatus" id = "CivilStatusWidowed" value = "widowed" required />
                    <label class = "form-check-label" for = "CivilStatusWidowed"> Widowed </label>
                </div>
                <br />
                <div class = "form-group">
                    <label for = "Religion"> Religion </label>
                    <input class = "form-control" type = "text" name = "Religion" value = "Input religion" required />
                </div>
                <div class = "form-row">
                    <div class = "form-group col-md-6">
                        <label for = "ContactNumber"> Contact Number </label>
                        <input class = "form-control" type = "text" name = "ContactNumber" value = "Input contact number" required />
                    </div>
                    <div class = "form-group col-md-6">
                        <label for = "EmailAddress"> Email Address </label>
                        <input class = "form-control" type = "email" name = "EmailAddress" value = "Input email address" required />
                    </div>
                </div>
                <div class = "form-row">
                    <div class = "form-group col-md-6">
                        <label for = "EmergencyContact"> Emergency Contact </label>
                        <input class = "form-control" type = "text" name = "EmergencyContact" value = "Input emergency contact" required />
                    </div>
                    <div class = "form-group col-md-6">
                        <label for = "EmergencyContactNumber"> Emergency Contact Number </label>
                        <input class = "form-control" type = "text" name = "EmergencyContactNumber" value = "Input emergency contact number" required />
                    </div>
                </div>
            </form>
        </div>     
    )
  }
  
  export default PersonalInfo