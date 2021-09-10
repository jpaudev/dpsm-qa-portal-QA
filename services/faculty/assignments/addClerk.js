import axios from "axios"

export default async function addClerk(formData, token) {
	
	try {
		if (token) {
			try {
				formData.append('password', 'password')
				formData.append('role', '5')
				
				const response = await axios({
				    method: 'POST',
				    url: 'https://api.dpsmqaportal.com/api/user/add',
				    data: formData,
				    headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
			    })	
			    return response.data
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