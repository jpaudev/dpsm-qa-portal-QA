import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function updateTraining(formData, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
	    if (token) {
	        let url = 'http://agila.upm.edu.ph:3001/api/faculty/accomplishment/' + facultyId;
		    let header = {
		        headers: {
		            'Authorization': 'Bearer ' + token
		        }
		    }
		    if(formData.get('proof') == "") {
				formData.delete('proof')
			}
		    const response = await axios({
			    method: 'PUT',
			    url: url + '/training-seminar',
			    data: formData,
			    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
		    })	
			return response.data
	    } else {
	        console.log(access.result.message)
		}
	} catch (err) {
		console.error(err)
		return err
	}
}