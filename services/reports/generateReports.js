import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function generateReports(token, checked, id) {
	try {
		if (token) {
			
			let header = {
				headers: { Authorization: `Bearer ${token}` }
			}
			let data = []
			try { 
				let url = ''
				if (id !== null) {
					url = process.env.API_URL + "/faculty/reports/accomplishment/download?unitId=" + id
				} else {
					url = process.env.API_URL + "/faculty/reports/accomplishment/download"
				}
				const response = await axios({
					url: url,
					method: 'POST',
					data: checked,
					headers: { Authorization: `Bearer ${token}`},
					responseType: 'blob'
				}).then((response) => {
					if(response.data.type == 'application/json') {
						console.log(response.data)
						return response.data
					}
 					const url = window.URL.createObjectURL(new Blob([response.data]));
					const link = document.createElement('a');
					link.href = url;
					link.setAttribute('download', 'reports.xlsx'); //or any other extension
					document.body.appendChild(link);
					link.click();
					return true
				})
				
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