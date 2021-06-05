import axios from "axios"

export default async function approveUnitHead(currentUser, incomingUser, unitId, remarks, token) {
	try {
		if (token) {
			if(!remarks) {
				let url = 'http://localhost:3001/api/user/' + currentUser;
				const response = await axios({
					method: 'PUT',
					url: url,
					data: {
						role: '1'
					},
					headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
				})	
				if(response.data.success == true) {
					let url = 'http://localhost:3001/api/user/' + incomingUser;
					const response = await axios({
						method: 'PUT',
						url: url,
						data: {
							role: '2'
						},
						headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
					})	
					if(response.data.success == true) {
						let url = 'http://localhost:3001/api/faculty/basic-info/unit/' + unitId;
						const response = await axios.delete(url, {
							headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
						})	
					}
					return response.data
				}
			} else {
				let url = 'http://localhost:3001/api/faculty/basic-info/unit/' + unitId;
				const response = await axios({
					method: 'PUT',
					url: url,
					data: {
						approverRemarks: remarks
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