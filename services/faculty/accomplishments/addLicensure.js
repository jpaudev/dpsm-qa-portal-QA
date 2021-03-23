import axios from "axios"

export default async function addLicensure(data) {
	try {
		let token = null
		const tokenRes = await axios.post("http://localhost:3001/api/login", {
			upemail: "jpcristobal1@upm.edu.ph",
			password: "password"
		})

		if(tokenRes.data.success) {
			token = tokenRes.data.result.token
			try {
				const response = await axios.post("http://localhost:3001/api/faculty/accomplishment/add/licensure-exam",{
					facultyId: "9",
					examName: `${data.examName}`,
		            examDate: `${data.examDate}`,
		            licenseNumber: `${data.licenseNumber}`,
		            rank: `${data.rank}`,
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