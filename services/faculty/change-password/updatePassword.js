import axios from "axios"

export default async function updatePassword(password, userId, token) {
	try {
        if (token) {
			let url = 'http://agila.upm.edu.ph:3001/api/user/' + userId;
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