import axios from "axios"

export default async function addResearch(data) {
	try {
		let token = null
		const tokenRes = await axios.post("http://localhost:3001/api/login", {
			upemail: "jpcristobal1@upm.edu.ph",
			password: "password"
		})

		if(tokenRes.data.success) {
			token = tokenRes.data.result.token
			let bod = {
				researchName: `${data.researchName}`,
				granter: `${data.granter}`,
				amount: `${data.amount}`,
				projectedStart: `${data.projectedStart}`,
				projectedEnd: `${data.projectedEnd}`,
				actualStart: `${data.actualStart}`,
				actualEnd: `${data.actualEnd}`,
				researchProgress: `${data.researchProgress}`,
				nonFacultyResearchers: `${data.nonFacultyResearchers}`
			}
			try {
				console.log(bod)
				const response = await axios.post("http://localhost:3001/api/faculty/accomplishment/add/research-grant", {
					researchName: `${data.researchName}`,
					granter: `${data.granter}`,
					amount: `${data.amount}`,
					projectedStart: `${data.projectedStart}`,
					projectedEnd: `${data.projectedEnd}`,
					actualStart: `${data.actualStart}`,
					actualEnd: `${data.actualEnd}`,
					researchProgress: `${data.researchProgress}`,
					nonFacultyResearchers: `${data.nonFacultyResearchers}`
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