import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function deleteResearch(data, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
		if(token) {
			try {
				const response = await axios.delete("http://agila.upm.edu.ph:3001/api/faculty/accomplishment/" + facultyId + "/researcher", {
					headers: {
						Authorization: `Bearer ${token}`
					},
					data: {
						researchId: `${data}`
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