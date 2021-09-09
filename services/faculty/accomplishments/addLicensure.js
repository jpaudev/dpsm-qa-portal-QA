import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function addLicensure(formData, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
		if (token) {
			try {
				formData.append('facultyId', facultyId)
				formData.append('status', 'Pending')
				
				const response = await axios({
				    method: 'POST',
				    url: 'http://agila.upm.edu.ph:3001/api/faculty/accomplishment/add/licensure-exam',
				    data: formData,
				    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
			    })	
				return response.data
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