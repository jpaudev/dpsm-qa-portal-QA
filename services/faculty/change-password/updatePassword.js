import axios from "axios"

export default async function updatePassword(password, userId, token) {
	try {
        if (token) {
			let url = process.env.API_URL + '/user/' + userId;
            const response = await axios({
                method: 'PUT',
                url: url,
                data: {
                    password: password
                },
                headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
            })
            return response.data
            
		}
	} catch (err) {
		console.error(err)
		return err
	}
}