import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function getEmployments(data,token) {
	try {
		if (token) {
			let cookieData = jwt.decode(token)

			try {
				const response = await axios({
				    method: 'GET',
				    url: process.env.API_URL + '/faculty/reports/employments',
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