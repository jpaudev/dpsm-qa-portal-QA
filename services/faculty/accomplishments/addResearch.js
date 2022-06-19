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
                    if(pair[0] == 'ResearchAuthorDPSM[]') {
                    	researchers.push(pair[1])
                    }
                }

				if(researchers[0] == "") researchers[0] = facultyId.toString()
				else researchers.push(facultyId.toString())
				formData.delete('ResearchAuthorDPSM[]')

                formData.append('facultyId', facultyId)
				formData.append('dpsmResearchers', JSON.stringify(researchers))
               	
               	let proof = formData.get('proof')
				const response = await axios({
				    method: 'POST',
				    url: process.env.API_URL + '/faculty/accomplishment/add/research-grant',
				    data: formData,
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