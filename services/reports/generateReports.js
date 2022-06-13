import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function generateReports(token, checked) {
	try {
		if (token) {
			
			let header = {
				headers: { Authorization: `Bearer ${token}` }
			}
			let data = []
			try { 
				const response = await axios({
					url: process.env.API_URL + "/faculty/reports/accomplishment/download",
					method: 'POST',
					data: checked,
					headers: { Authorization: `Bearer ${token}`},
					responseType: 'blob'
				}).then((response) => {
					const url = window.URL.createObjectURL(new Blob([response.data]));
					const link = document.createElement('a');
					link.href = url;
					link.setAttribute('download', 'reports.xlsx'); //or any other extension
					document.body.appendChild(link);
					link.click();
				})
				return true
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