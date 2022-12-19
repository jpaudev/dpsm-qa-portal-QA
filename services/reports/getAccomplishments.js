import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function getAccomplishments(data,token) {
	try {
		if (token) {
			let cookieData = jwt.decode(token)
    		let userId = cookieData.userId
			try {
				const response = await axios({
				    method: 'GET',
				    url: process.env.API_URL + '/faculty/reports/accomplishments',
				    headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`},
					params : {
						unitId : data.unitId,
						startDate : data.startDate,
						endDate : data.endDate
					}
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