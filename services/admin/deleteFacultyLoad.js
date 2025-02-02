import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function deleteFacultyLoad(data, token, facultyId) {
	try {
		if (token) {
			try {
				const response = await axios.delete(process.env.API_URL + "/faculty/load/" + facultyId, {
					headers: {
						Authorization: `Bearer ${token}`
					},
					data: {
						recordId: `${data}`
					}
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