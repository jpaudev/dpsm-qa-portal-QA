import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function getProfilePicture(token) {
	
    
	try {
		if (token) {
			let cookieData = jwt.decode(token)
    		let userId = cookieData.userId
			try {
				const response = await axios({
				    method: 'GET',
				    url: process.env.API_URL + '/user/image/' + userId,
				    headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
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