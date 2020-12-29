import axios from "axios"

export default async function updateFaculty(data) {
	try {
		let token = null
		const tokenRes = await axios.post("https://sp-api-test.alun.app/api/token", {
			username: "username",
			password: "password"
		})

		if(tokenRes.data.success) {
			token = tokenRes.data.result
			try {
				const response = await axios.put("https://sp-api-test.alun.app/api/faculty/basic-info/9/personal", {
					lastName: `${data.lastName}`,
					middleName: `${data.middleName}`,
					permanentAddress: `${data.permanentAddress}`,
					presentAddress: `${data.presentAddress}`,
					mobile: `${data.mobile}`,
					landline: `${data.landline}`,
					email: `${data.email}`,
					civilStatus: `${data.civilStatus}`,
					religion: `${data.lastName}`,
					emergencyContactPerson: `${data.emergencyContactPerson}`,
	  				emergencyContactNumber: `${data.emergencyContactNumber}`
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