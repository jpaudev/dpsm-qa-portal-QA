import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function addResearch(formData, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
		if (token) {
			try {
				for (var value of formData.values()) {
                    console.log(value)
                }
               	let proof = formData.get('proof')
				const response = await axios({
				    method: 'POST',
				    url: 'http://localhost:3001/api/faculty/accomplishment/add/research-grant',
				    data: formData,
				    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
			    })
				console.log(response)
				
				let bodData = new FormData()
		    	bodData.append('facultyId', facultyId)
		    	bodData.append('researchId', response.data.result.researchId)
				bodData.append('proof', proof)
				for (var key of bodData.keys()) {
                    console.log(key)
                }
		    	for (var value of bodData.values()) {
                    console.log(value)
                }
		        const res = await axios({
		        	method: 'POST',
				    url: 'http://localhost:3001/api/faculty/accomplishment/add/researcher',
				    data: bodData,
				    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
		        })
				return response.data
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