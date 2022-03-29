import axios from "axios"

export default async function comparePassword(password, userId, token) {
	try {
        if (token) {

			let url = process.env.API_URL + '/user/validate-password';
            const response = await axios({
                method: 'POST',
                url: url,
                data: {
                    userId: userId,
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