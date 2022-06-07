import Router from 'next/router'
import assignDeptChair from '../../../services/faculty/assignments/assignDeptChair'
// import Select from 'react-select'

function AssignDeptChair(props) {
    let faculty
    if(props.children != null) {
        faculty = Object.keys(props.children).map(key => 
            {
                return(
                    <option value={props.children[key].userId} key = {props.children[key].userId}>
                        {props.children[key].lastName + ', ' + props.children[key].firstName}
                    </option>
                )
            }
        )        

        // faculty = Object.keys(props.children).map(key => {
        //     return(
        //         {value: props.children[key].facultyId, label: props.children[key].lastName + ', ' + props.children[key].firstName}
        //     );
        // });
    }

    return (
        <div>
            <h2 align = "center"> Department Chair Assignment </h2>
            <div className ="alert alert-success" role="alert" id="deptchairalert" style={{visibility:"hidden"}}></div>
            <br />
            <div className = "jumbotron">
                <div className = "form-group col-md-8">
                    <label htmlFor = "deptChair"> Select New Department Chair </label>
			        {/* <Select
                        className = "col-md-8"
                        name = "deptChair"
                        id = "deptChair"
                        options = {faculty}
                        required />*/}
                    <select className = "form-control" name = "deptChair" id="deptChair" required>
                        <option value="0" key = "0">-- SELECT FACULTY --</option>
                        {faculty}
                    </select>
                </div>
                <button className = "btn btn-danger" data-toggle="modal" data-target="#assignDeptChair">Assign New Department Chair</button>
            </div>
		

            <div className="modal fade" id="assignDeptChair" tabIndex="-1" role="dialog" aria-labelledby="assignDeptChairLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="assignDeptChairLabel">Assign New Department Chair</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> 
                            Are you sure you want to assign this user as the new department chair?
                            You will lose access to all department chair-specific functionalities, and the user you assigned will gain access to said functionalities.
                            Once you finalize this decision, you will be logged out immediately, and your account will be reverted to a standard faculty account when you
                            log in again.
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't assign</button>
			            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick = {async () => {
                            let alert = document.getElementById("deptchairalert")
                            $('#assignDeptChair').modal('toggle');

                            let incomingDeptChair = document.getElementById('deptChair').value
                            // console.log(incomingDeptChair)

                            if(incomingDeptChair != 0) {
                                let res = await assignDeptChair(incomingDeptChair, props.token)
                                if(res.success == true) { 
                                    alert.className ="alert alert-success"
                                    alert.style = "visibility: visible"
                                    alert.innerHTML = res.message
    
                                    $("#deptchairalert").fadeTo(5000, 500).slideUp(500, function(){
                                        $("#deptchairalert").slideUp(500);
                                        Router.push('/login', '/login')
                                    });
                                } else {
                                    alert.className = "alert alert-danger"
                                    if(res.error) alert.innerHTML = res.error[0].message
                                    else alert.innerHTML = res.message
    
                                    $("#deptchairalert").fadeTo(5000, 500).slideUp(500, function(){
                                        $("#deptchairalert").slideUp(500);
                                    });
                                    Router.push('/faculty/role-assignment', '/faculty/role-assignment')
                                }
                            }
                        }}>Yes, assign</button>
                    </div>
                    </div>
                </div>
            </div>       
        </div>
	
	
    )
  }
  
  export default AssignDeptChair
