import axios from "axios"

export default async function addPublicService(data, formData) {
	try {
		let token = null
		const tokenRes = await axios.post("http://localhost:3001/api/login", {
			upemail: "jpcristobal1@upm.edu.ph",
			password: "password"
		})

		if(tokenRes.data.success) {
			token = tokenRes.data.result.token
			try {
				if(formData.get('endDate') == "") {
					formData.delete('endDate')
				}
				for (var value of formData.values()) {
 					  console.log(value);
				}
				const response = await axios({
				    method: 'POST',
				    url: 'http://localhost:3001/api/faculty/accomplishment/add/public-service',
				    data: formData,
				    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
			    })	
			    .then(function (response) {
			        //handle success
			        console.log(response);
			    })
			    .catch(function (response) {
			        //handle error
			        console.log(response);
			    });
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