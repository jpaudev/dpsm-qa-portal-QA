import axios from "axios"

export default async function updateUser(data, token) {
	try {
        if (token) {
			let url = 'http://localhost:3001/api/user/' + `${data.userId}`;
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