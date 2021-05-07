import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function addWorkExp(data, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
		if (token) {
			let bod = null
			if(`${data.endDate}` == "") {
				bod = {
					facultyId: `${facultyId}`,
					employerName: `${data.employerName}`,
					position: `${data.position}`,
					startDate: `${data.startDate}`,
					description: `${data.description}`
				}
			} else {
				bod = {
					facultyId: `${facultyId}`,
					employerName: `${data.employerName}`,
					position: `${data.position}`,
					startDate: `${data.startDate}`,
					endDate: `${data.endDate}`,
					description: `${data.description}`
				}
			}
			try {
				const response = await axios.post("http://localhost:3001/api/faculty/basic-info/add/work-exp", bod, {
					headers: {
						Authorization: `Bearer ${token}`
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