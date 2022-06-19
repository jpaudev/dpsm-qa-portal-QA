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
                    if(pair[0] == 'PublicationAuthorDPSM[]') {
                    	authors.push(pair[1])
                    }
                }
                
				if(authors[0] == "") authors[0] = facultyId.toString()
				else authors.push(facultyId.toString())
				formData.delete('PublicationAuthorDPSM[]')
                if(formData.get('url') == ''){
                	formData.delete('url')	
                }
                formData.append('facultyId', facultyId)
				
				formData.append('dpsmAuthors', JSON.stringify(authors))
               	
				const response = await axios({
				    method: 'POST',
				    url: process.env.API_URL + '/faculty/accomplishment/add/publication',
				    data: formData,
				    headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
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