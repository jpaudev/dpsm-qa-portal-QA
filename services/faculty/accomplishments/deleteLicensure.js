import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function deleteLicensure(data, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
		if(token) {
			try {
				const response = await axios.delete("http://localhost:3001/api/faculty/accomplishment/" + facultyId + "/licensure-exam", {
					headers: {
						Authorization: `Bearer ${token}`
					},
					data: {
						licenseId: `${data}`
					}
				})
				if (response.data.success) {
					console.log(response.data)
					return response.data
				} else {
					console.error(response.message)
					return response.data
				}	
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