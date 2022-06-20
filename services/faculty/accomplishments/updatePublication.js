import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function updatePublication(formData, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
	    if (token) {
	        let url = process.env.API_URL + '/faculty/accomplishment/' + facultyId;

		    if(formData.get('proof') == "") {
				formData.delete('proof')
			}
			
		    const response = await axios({
			    method: 'PUT',
			    url: url + '/publication',
			    data: formData,
			    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
		    })

		    let bodData
		    for(var pair of formData.entries()) {
		    	if(pair[0] == 'add_auth') {
		    		bodData = new FormData()
		    		if(pair[1] == 0) {
		    			bodData.append('facultyId', facultyId)
		    		} else {
		    			bodData.append('facultyId', pair[1])
		    		}
		    		bodData.append('publicationId', formData.get('publicationId'))

		    		const auth = await axios({
			        	method: 'POST',
					    url: process.env.API_URL + '/faculty/accomplishment/add/publisher',
					    data: bodData,
					    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
			        })
		    	}
            }

		    console.log(response.data)
			return response.data
	    } else {
	        console.log(access.result.message)
		}
	} catch (err) {
		console.error(err)
		return err
	}
}