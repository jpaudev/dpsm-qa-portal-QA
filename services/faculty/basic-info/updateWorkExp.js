import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function updateWorkExp(data, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
	    if (token) {
	        let url = 'http://localhost:3001/api/faculty/basic-info/' + facultyId;
		    let header = {
		        headers: {
		            'Authorization': 'Bearer ' + token
		        }
		    }
		    let bod = null
		    if(data.endDate == "" || data.endDate == null) {
		    	bod = {
		    		workExpId: `${data.workExpId}`,
					employerName: `${data.employerName}`,
					position: `${data.position}`,
					startDate: `${data.startDate}`,
					description: `${data.description}`
		    	}
		    } else {
		    	bod = {
		    		workExpId: `${data.workExpId}`,
					employerName: `${data.employerName}`,
					position: `${data.position}`,
					startDate: `${data.startDate}`,
					endDate: `${data.endDate}`,
					description: `${data.description}`
		    	}
		    }
		    console.log(bod)
	        try { 
				const response = await axios.put(url + "/work-exp", bod, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
				if (response.data.success) {
					console.log(response.data)
					return response.data
				} else {
					console.error(response.message)
					return response.data
				}	
			} catch (err) {
				console.error(err)
				return err
			}
	    } else {
	        console.log(access.result.message)
		}
	} catch (err) {
		console.error(err)
		return err
	}
}