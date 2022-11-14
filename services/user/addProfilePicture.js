import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function addProfilePicture(formData, token) {
	let cookieData = jwt.decode(token)
    let userId = cookieData.userId
    
	try {
		if (token) {
			try {
				formData.append('userId', userId)
				
				const response = await axios({
				    method: 'POST',
				    url: process.env.API_URL + '/user/add/image',
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