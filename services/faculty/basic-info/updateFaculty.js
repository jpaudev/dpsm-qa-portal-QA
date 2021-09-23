import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function updateFaculty(data, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
	    if (token) {	      
	        let url = 'https://api.dpsmqaportal.com/api/faculty/basic-info/' + facultyId;
		    
	        try {
				const response = await axios.put(url + "/personal", {
					firstName: `${data.firstName}`, 
					lastName: `${data.lastName}`,
					middleName: `${data.middleName}`,
					suffix: `${data.suffix}`,
					permanentAddress: `${data.permanentAddress}`,
					presentAddress: `${data.presentAddress}`,
					mobile: `${data.mobile}`,
					landline: `${data.landline}`,
					email: `${data.email}`,
					civilStatus: `${data.civilStatus}`,
					religion: `${data.religion}`,
					emergencyContactPerson: `${data.emergencyContactPerson}`,
	  				emergencyContactNumber: `${data.emergencyContactNumber}`,
					teachingPhilosophy: `${data.philosophy}`,
				}, {
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