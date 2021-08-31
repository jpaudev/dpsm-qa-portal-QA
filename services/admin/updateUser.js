import axios from "axios"

export default async function updateUser(data, token) {
	try {
        if (token) {
			let url = 'http://agila.upm.edu.ph:3000/api/user/' + `${data.userId}`;
            const response = await axios({
                method: 'PUT',
                url: url,
                data: {
                    status: `${data.status}`,
                    remarks: `${data.remarks}`
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