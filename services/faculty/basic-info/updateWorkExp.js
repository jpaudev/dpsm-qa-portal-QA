import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function updateWorkExp(data, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
	    if (token) {
	        let url = 'http://agila.upm.edu.ph:3001/api/faculty/basic-info/' + facultyId;
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
		    
	        try { 
				const response = await axios.put(url + "/work-exp", bod, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
				return response.data
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