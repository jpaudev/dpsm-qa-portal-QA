import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function addFaculty(data, token) {
	let cookieData = jwt.decode(token)
	
	try {
	    if (token) {	      
	    	if(data.unit == "" || data.unit == null) {
				data.unit = 1
			}
	    	if(data.category == "" || data.category == null) {
				data.category = "Permanent"
			}
			if(data.status == "" || data.status == null) {
				data.status = "Full-time"
			}
			if(data.employmentPosition == "" || data.employmentPosition == null) {
				data.employmentPosition = 1
			}
	        let url = process.env.API_URL + '/user/add';
		    let header = {
		        headers: {
		            'Authorization': 'Bearer ' + token
		        }
		    }
	        try {
	        	let body = {
					"role": "1",
					"upemail": `${data.upemail}`,
					"password": "password",
					"personalInfo": {
						firstName: `${data.firstName}`, 
						lastName: `${data.lastName}`,
						middleName: `${data.middleName}`,
						suffix: `${data.suffix}`,
						gender: `${data.gender}`,
						dateOfBirth: `${data.dateOfBirth}`,
						placeOfBirth: `${data.placeOfBirth}`,
						permanentAddress: `${data.permanentAddress}`,
						presentAddress: `${data.presentAddress}`,
						mobile: `${data.mobile}`,
						landline: `${data.landline}`,
						email: `${data.email}`,
						civilStatus: `${data.civilStatus}`,
						religion: `${data.religion}`,
						emergencyContactPerson: `${data.emergencyContactPerson}`,
		  				emergencyContactNumber: `${data.emergencyContactNumber}`,
						teachingPhilosophy: `${data.philosophy}`
		  			},
					"unitId": `${data.unit}`,
					"employmentPositionId": `${data.employmentPosition}`,
					"status": `${data.status}`,
					"category": `${data.category}`,
					"startDate": `${data.startDate}`
		  		}
				
				const response = await axios.post(url, body)
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