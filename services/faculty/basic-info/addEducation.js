import axios from "axios"

export default async function addEducation(data) {
	try {
		let token = null
		const tokenRes = await axios.post("https://sp-api-test.alun.app/api/token", {
			username: "username",
			password: "password"
		})

		if(tokenRes.data.success) {
			token = tokenRes.data.result
			try {
				const response = await axios.post("https://sp-api-test.alun.app/api/faculty/basic-info/add/education", {
					facultyId: "9",
					institutionSchool: `${data.institutionSchool}`,
					degreeCert: `${data.degreeCert}`,
					majorSpecialization: `${data.majorSpecialization}`,
					startDate: `${data.startDate}`,
					endDate: `${data.endDate}`,
					proof: `${data.proof}`,
					status: "For Verification"
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