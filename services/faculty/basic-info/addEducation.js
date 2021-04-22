import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function addEducation(formData, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
		if (token) {
			try {
				if(formData.get('endDate') == "") {
					formData.delete('endDate')
				}
				formData.append('facultyId', facultyId)
				formData.append('status', 'Pending')
				for (var value of formData.values()) {
                    console.log(value)
                }
				const response = await axios({
				    method: 'POST',
				    url: 'http://localhost:3001/api/faculty/basic-info/add/education',
				    data: formData,
				    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
			    })	
			    .then(function (response) {
			        //handle success
			        console.log(response);
			    })
			    .catch(function (response) {
			        //handle error
			        console.log(response);
			    });
			} catch (err) {
				console.error(err)
				return err
			}
		}
	} catch (err) {
		console.error(err)
		return err
	}
}