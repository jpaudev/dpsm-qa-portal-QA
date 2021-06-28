import Router from 'next/router'
import comparePassword from '../services/faculty/change-password/comparePassword'
import updatePassword from '../services/faculty/change-password/updatePassword'

function ChangePassword(props) { 
    let validated
    
    return (
        <div>
            <br />
            <h4 align = "center"> Change Password </h4>
            <div className ="alert alert-success" role="alert" id="changepassalert" style={{visibility:"hidden"}}></div>
            <form>
                <div className = "form-group col-md-6">
                    <label htmlFor="old-password">Current Password:</label>
                    <input className = "form-control" type="password" id="old-password" name="old-password" required onBlur={async () => {
                        let alert = document.getElementById("changepassalert")

                        const oldPassword = document.getElementById('old-password').value
                        let res = await comparePassword(oldPassword, props.children.userId, props.token)

                        if(res.success == true) {
                            alert.style = "visibility: hidden"
                            setValidate(true)
                        } else {
                            alert.className = "alert alert-danger"
                            alert.style = "visibility: visible"
                            alert.innerHTML = 'The current password is incorrect'

                            setValidate(false)
                        }
                    }} />
                </div>
                <div className = "form-group col-md-6">
                    <label htmlFor="new-password">New Password:</label>
                    <input className = "form-control" type="password" id="new-password" name="new-password" required />
                </div>
                <div className = "form-group col-md-6">
                    <label htmlFor="confirm-new-password">Confirm New Password:</label>
                    <input className = "form-control" type="password" id="confirm-new-password" name="confirm-new-password" required onChange={async () => {
                        let alert = document.getElementById("changepassalert")
                            
                        const newPassword = document.getElementById('new-password').value
                        const confirmPassword = document.getElementById('confirm-new-password').value

                        if(newPassword != confirmPassword) {
                            alert.className = "alert alert-danger"
                            alert.style = "visibility: visible"
                            alert.innerHTML = 'The passwords do not match'

                            setValidate(false)

                        } else {
                            alert.style = "visibility: hidden"
                            setValidate(true)
                        }
                    }} />
                </div>
                <button type="button" className = "btn btn-primary" onClick = {async (e) => {
                            let alert = document.getElementById("changepassalert")
                            
                            if(!validated) e.preventDefault()
                            else {
                                const newPassword = document.getElementById('new-password').value
                                let res = await updatePassword(newPassword, props.children.userId, props.token)

                                if(res.success == true) { 
                                    alert.className ="alert alert-success"
                                    alert.style = "visibility: visible"
                                    alert.innerHTML = res.message
    
                                    $("#changepassalert").fadeTo(5000, 500).slideUp(500, function(){
                                        $("#changepassalert").slideUp(500);
                                        Router.push('/login', '/login')
                                    });
                                } else { 
                                    alert.className = "alert alert-danger"
                                    alert.style = "visibility: visible"
                                    if(res.error) alert.innerHTML = res.error[0].message
                                    else alert.innerHTML = res.message
                                }
                            }
                            
                        }}>Change Password</button>
            </form>
        </div>
    )
    
    function setValidate(bool) {
        validated = bool
    }
  }

  
  export default ChangePassword