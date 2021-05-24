import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function updatePublication(formData, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
	    if (token) {
	        let url = 'http://localhost:3001/api/faculty/accomplishment/' + facultyId;
		    let header = {
		        headers: {
		            'Authorization': 'Bearer ' + token
		        }
		    }
		    if(formData.get('proof') == "") {
				formData.delete('proof')
			}
		    for (var value of formData.values()) {
                console.log(value)
            }
		    const response = await axios({
			    method: 'PUT',
			    url: url + '/publication',
			    data: formData,
			    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
		    })	
		    console.log(response.data)
			return response.data
	    } else {
	        console.log(access.result.message)
		}
	} catch (err) {
		console.error(err)
		return err
	}
}