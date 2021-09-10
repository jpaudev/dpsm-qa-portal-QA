import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function updateFacultyLoad(formData, token, facultyId) {
	try {
	    if (token) {
	        let url = 'https://api.dpsmqaportal.com/api/faculty/load/' + facultyId;
		    if(formData.get('setResults') == "") {
				formData.delete('setResults')
			}
			for(var value of formData.entries()) {
				console.log(value[0] + ' ' + value[1])
			}
		    const response = await axios({
			    method: 'PUT',
			    url: url,
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