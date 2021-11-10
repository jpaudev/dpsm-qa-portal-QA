import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function updateResearch(formData, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
	    if (token) {
	        let url = 'https://api.dpsmqaportal.com/api/faculty/accomplishment/' + facultyId;
		    let header = {
		        headers: {
		            'Authorization': 'Bearer ' + token
		        }
		    }
		    if(formData.get('proof') == "") {
				formData.delete('proof')
			}

		    const response = await axios({
			    method: 'PUT',
			    url: url + '/research-grant',
			    data: formData,
			    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
		    })	

		    let bodData
		    for(var pair of formData.entries()) {
		    	if(pair[0] == 'add_res') {
		    		bodData = new FormData()
		    		bodData.append('facultyId', pair[1])
		    		bodData.append('researchId', formData.get('researchId'))
		    		bodData.append('status', 'Pending')

		    		const auth = await axios({
			        	method: 'POST',
					    url: 'https://api.dpsmqaportal.com/api/faculty/accomplishment/add/researcher',
					    data: bodData,
					    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
			        })
		    	}
            }

            for(var pair of formData.entries()) {
		    	if(pair[0] == 'rem_res') {
		    		const auth = await axios.delete("https://api.dpsmqaportal.com/api/faculty/accomplishment/" + pair[1] + "/researcher", {
						headers: {
							Authorization: `Bearer ${token}`
						},
						data: {
							researchId: `${formData.get('researchId')}`
						}
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