import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function addPublication(formData, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
		if (token) {
			try {
				for (var value of formData.values()) {
                    console.log(value)
                }
				const response = await axios({
				    method: 'POST',
				    url: 'http://localhost:3001/api/faculty/accomplishment/add/publication',
				    data: formData,
				    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
			    })	
			    .then(async function (response) {
			        //handle success
			        console.log(response);
			        let bod = [{
			    		"facultyId": facultyId,
			    		"publicationId": response.data.result.publicationId,
			    		"status": "Pending",
			    		"proof": formData.get('proof')
			    	}]
			    	console.log(bod)
			        const res = await axios({
			        	method: 'POST',
					    url: 'http://localhost:3001/api/faculty/accomplishment/add/publisher',
					    data: bod,
					    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
			        })
			        .then(async function (res) {
			        	//handle success
			        	console.log(res);
			        })
			        .catch(function (res) {
				        //handle error
				        console.log(res);
				    });
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