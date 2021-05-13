import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function updateEducation(formData, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
	    if (token) {
	        let url = 'http://localhost:3001/api/faculty/basic-info/' + facultyId;
		    let header = {
		        headers: {
		            'Authorization': 'Bearer ' + token
		        }
		    }
		    if(formData.get('proof') == "") {
				formData.delete('proof')
			}
			if(formData.get('endDate') == "") {
				formData.delete('endDate')
			}
		    for (var value of formData.values()) {
                console.log(value)
            }
		    const response = await axios({
			    method: 'PUT',
			    url: url + '/education',
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