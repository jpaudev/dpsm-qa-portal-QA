import axios from "axios"

export default async function deleteEmployment(data, token, facultyId) { 
	try {
		if (token) {
			try {
				const response = await axios.delete("https://api.dpsmqaportal.com/api/faculty/basic-info/" + facultyId + "/employment", {
					headers: {
						Authorization: `Bearer ${token}`
					},
					data: {
						employmentInfoId: `${data}`
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