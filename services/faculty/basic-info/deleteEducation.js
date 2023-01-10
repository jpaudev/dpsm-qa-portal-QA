import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function deleteEducation(data, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId

	let dataObj = {}
	dataObj['educInfoId'] = data

	try {
		if (token) {
			try {
				const response = await axios.delete(process.env.API_URL + "/faculty/basic-info/" + facultyId + "/education", {
					headers: {
						Authorization: `Bearer ${token}`
					},
					data: dataObj
				})
				return response.data
			}  catch (err) {
				console.error(err)
				return err
			}
		}
	} catch (err) {
		console.error(err)
		return err
	}
}