import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function updateEmployment(data, token, facultyId) {
	try {
	    if (token) {
	        let url = process.env.API_URL + '/faculty/basic-info/' + facultyId;
		    let bod = {
                employmentInfoId: `${data.employmentInfoId}`,
                startDate: `${data.startDate}`
            }
		    if(data.endDate == "" || data.endDate == null) 
		    	bod.endDate = null
            else bod.endDate = `${data.endDate}`
	        try { 
				const response = await axios.put(url + "/employment", bod, {
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