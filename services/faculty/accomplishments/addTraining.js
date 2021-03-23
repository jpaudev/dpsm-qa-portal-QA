import axios from "axios"

export default async function addPublication(data) {
	try {
		let token = null
		const tokenRes = await axios.post("http://localhost:3001/api/login", {
			upemail: "jpcristobal1@upm.edu.ph",
			password: "password"
		})

		if(tokenRes.data.success) {
			token = tokenRes.data.result.token
			try {
				const response = await axios.post("http://localhost:3001/api/faculty/accomplishment/add/training-seminar", {
					facultyId: "9",
					title: `${data.title}`,
		            role: `${data.role}`,
		            dateFrom: `${data.dateFrom}`,
		            dateTo: `${data.dateTo}`,
		            venue: `${data.venue}`,
		            proof: `${data.proof}`
				}, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
				if (response.data.success) {
					console.log(response.data)
					return response.data
				} else {
					console.error(response.message)
					return response.data
				}	
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