import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function assignDeptChair(incomingDeptChair, token) {
	try {
        if (token) {
            let cookieData = jwt.decode(token)
            let userId = cookieData.userId
            
			let url = 'http://localhost:3001/api/user/' + userId;
            const response = await axios({
                method: 'PUT',
                url: url,
                data: {
                    role: '1'
                },
                headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
            })	
            if(response.data.success == true) {
                let url = 'http://localhost:3001/api/user/' + incomingDeptChair;
                const response = await axios({
                    method: 'PUT',
                    url: url,
                    data: {
                        role: '3'
                    },
                    headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
                })	
                return response.data
            }
		}
	} catch (err) {
		console.error(err)
		return err
	}
}