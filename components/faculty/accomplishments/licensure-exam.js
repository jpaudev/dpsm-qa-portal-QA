import Link from 'next/link'

function LicensureExam(){
	return(
	<div>
            <div>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>Licensure Exam</th>
                            <th>Date</th>
                            <th>Rank</th>
                        </tr>
                        <tr>
                            <td>Pharmacy</td>
                            <td>2020-12-25</td>
			    <td>8</td>
                        </tr>
                        <tr>
                            <td>Mechanical Engineering</td>
                            <td>2020-06-12</td>
			    <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <form>
                    <hr />
                    <div className = "form-row">
                        <div className = "col-auto">
                            <button type = "button" className = "btn btn-primary" id = "AddAccomplishment"> Add Licensure Exam </button>
                        </div>
                        <div className = "col-auto">
                            <button type = "button" className = "btn btn-danger" id = "RemoveAccomplishment"> Remove a Row </button>
                        </div>
                    </div>
                    <br />
                    <div className = "form-row">
                        <div className = "form-group col-md-2">
                            <label htmlFor = "LicensureExam[]"> Licensure Exam </label>
                            <input className = "form-control" type = "text" name = "LicensureExam[]" placeholder = "Input licensure exam" />
                        </div>
			<div className = "form-group col-md-2">
                            <label htmlFor = "LicensureExamDate[]"> Date </label>
                            <input type = "date" className = "form-control" name = "LicensureExamDate[]" />
                        </div>
			<div className = "form-group col-md-2">
                            <label htmlFor = "LicensureExamRank[]"> Rank </label>
                            <input className = "form-control" type = "text" name = "LicensureExamRank[]" placeholder = "Input rank" />
                        </div>
                    </div>
                    <div id = "LicensureExam">
                        {/* <!-- Duplicate fields will appear here --> */}
                    </div>
                    <br />
                    <button type = "submit" className = "btn btn-primary"> Submit </button>
                    <hr />
                    
                </form>
            </div>   

            </div>
	)
}

export default LicensureExam