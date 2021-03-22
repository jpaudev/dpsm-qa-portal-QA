import axios from "axios"

export default async function downloadProof(data) {
	try {
		let token = null
		const tokenRes = await axios.post("http://localhost:3001/api/login", {
			upemail: "jpcristobal1@upm.edu.ph",
			password: "password"
		})

		if(tokenRes.data.success) {
			token = tokenRes.data.result.token
			try {
				const response = await axios({
					url: `http://localhost:3001/api/download/${data}`,
					method: 'GET',
					headers: { Authorization: `Bearer ${token}` },
					responseType: 'blob'
				}).then((response) => {
					console.log(response)
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