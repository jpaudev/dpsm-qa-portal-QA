import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function addPublication(formData, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
		if (token) {
			try {
				let authors = []
				for (var pair of formData.entries()) {
                    if(pair[0] == 'PublicationAuthorDPSM[]' && pair[1] != facultyId) {
                    	authors.push(pair[1])
                    }
                }

               	let proof = formData.get('proof')
				const response = await axios({
				    method: 'POST',
				    url: 'http://agila.upm.edu.ph:3001/api/faculty/accomplishment/add/publication',
				    data: formData,
				    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
			    })
				
				let bodData = new FormData()
		    	bodData.append('facultyId', facultyId)
		    	bodData.append('publicationId', response.data.result.publicationId)
				bodData.append('proof', proof)
		        const res = await axios({
		        	method: 'POST',
				    url: 'http://agila.upm.edu.ph:3001/api/faculty/accomplishment/add/publisher',
				    data: bodData,
				    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
		        })
		        bodData.delete('proof')

				for(var value of authors) {
		        	bodData.set('facultyId', value)
		        	const auth = await axios({
			        	method: 'POST',
					    url: 'http://agila.upm.edu.ph:3001/api/faculty/accomplishment/add/publisher',
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