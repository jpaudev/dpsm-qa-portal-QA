import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function updatePublicService(formData, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
	    if (token) {
	        let url = 'http://agila.upm.edu.ph:3000/api/faculty/accomplishment/' + facultyId;
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
		    const response = await axios({
			    method: 'PUT',
			    url: url + '/public-service',
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