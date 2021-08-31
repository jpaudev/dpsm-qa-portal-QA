import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function downloadProof(data, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
		if (token) {
			try {
				const response = await axios({
					url: `http://agila.upm.edu.ph:3001/api/download/${data}`,
					method: 'GET',
					headers: { Authorization: `Bearer ${token}` },
					responseType: 'blob'
				}).then((response) => {
					const url = window.URL.createObjectURL(new Blob([response.data]));
					const link = document.createElement('a');
					link.href = url;
					link.setAttribute('download', `${data}`); //or any other extension
					document.body.appendChild(link);
					link.click();
				})
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