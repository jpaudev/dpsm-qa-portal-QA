import axios from "axios"

export default async function addWorkExp(data) {
	try {
		let token = null
		const tokenRes = await axios.post("http://localhost:3001/api/login", {
			upemail: "jpcristobal1@upm.edu.ph",
			password: "password"
		})

		if(tokenRes.data.success) {
			token = tokenRes.data.result.token
			let bod = null
			if(`${data.endDate}` == "") {
				bod = {
					facultyId: "1",
					employerName: `${data.employerName}`,
					position: `${data.position}`,
					startDate: `${data.startDate}`,
					description: `${data.description}`
				}
			} else {
				bod = {
					facultyId: "1",
					employerName: `${data.employerName}`,
					position: `${data.position}`,
					startDate: `${data.startDate}`,
					endDate: `${data.endDate}`,
					description: `${data.description}`
				}
			}
			console.log(bod)
			try {
				const response = await axios.post("http://localhost:3001/api/faculty/basic-info/add/work-exp", bod, {
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