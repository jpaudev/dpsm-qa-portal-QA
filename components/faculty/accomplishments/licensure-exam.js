import Link from 'next/link'
import LicensureExamForm from './licensure-exam-form'

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
                <LicensureExamForm />
            </div>   

            </div>
	)
}

export default LicensureExam
