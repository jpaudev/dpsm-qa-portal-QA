import axios from "axios"

export default async function deleteWorkExp(data) {
	try {
		let token = null
		const tokenRes = await axios.post("http://localhost:3001/api/login", {
			upemail: "jpcristobal1@upm.edu.ph",
			password: "password"
		})
		
		if(tokenRes.data.success) {
			token = tokenRes.data.result.token
			try {
				console.log(data)
				const response = await axios.delete("http://localhost:3001/api/faculty/basic-info/1/work-exp", {
					headers: {
						Authorization: `Bearer ${token}`
					},
					data: {
						workExpId: `${data}`
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