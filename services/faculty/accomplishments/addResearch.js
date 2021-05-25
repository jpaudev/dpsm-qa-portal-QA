import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function addResearch(formData, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
		if (token) {
			try {
				let researchers = []
				for (var pair of formData.entries()) {
                    if(pair[0] == 'ResearchAuthorDPSM[]' && pair[1] != facultyId) {
                    	researchers.push(pair[1])
                    }
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
		        const res = await axios({
		        	method: 'POST',
				    url: 'http://localhost:3001/api/faculty/accomplishment/add/researcher',
				    data: bodData,
				    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
		        })
		        bodData.delete('proof')

		        for(var value of researchers) {
		        	bodData.set('facultyId', value)
		        	const auth = await axios({
			        	method: 'POST',
					    url: 'http://localhost:3001/api/faculty/accomplishment/add/researcher',
					    data: bodData,
					    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
			        })
		        }
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