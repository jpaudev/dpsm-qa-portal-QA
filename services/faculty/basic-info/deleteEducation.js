import axios from "axios"

export default async function deleteEducation(data) {
	try {
		let token = null
		const tokenRes = await axios.post("https://sp-api-test.alun.app/api/login", {
			upemail: "username",
			password: "password"
		})

		if(tokenRes.data.success) {
			token = tokenRes.data.result
			try {
				console.log(data)
				const response = await axios.delete("https://sp-api-test.alun.app/api/faculty/basic-info/9/education", {
					headers: {
						Authorization: `Bearer ${token}`
					},
					data: {
						educInfoId: `${data}`
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