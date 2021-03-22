import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function updateFaculty(data) {
	try {
		let url = 'http://localhost:3001/api/'
	    const res = await fetch(url + 'login',
	    {
	        body: JSON.stringify({"upemail": "jpcristobal1@upm.edu.ph", "password": "password"}),
	        headers: {
	            'Content-Type': 'application/json'
	        },
	        method: 'POST'
	    })
	    
	    const access = await res.json()
	    let token = access.result.token
	    let facultyId = 0;
	    if (token) {
	        const json = jwt.decode(token)
	        console.log(json)
	        facultyId = json.facultyId
	        url = 'http://localhost:3001/api/faculty/basic-info/' + facultyId;
		    let header = {
		        headers: {
		            'Authorization': 'Bearer ' + token
		        }
		    }
	        try {
				const response = await axios.put(url + "/personal", {
					lastName: `${data.lastName}`,
					middleName: `${data.middleName}`,
					permanentAddress: `${data.permanentAddress}`,
					presentAddress: `${data.presentAddress}`,
					mobile: `${data.mobile}`,
					landline: `${data.landline}`,
					email: `${data.email}`,
					civilStatus: `${data.civilStatus}`,
					religion: `${data.religion}`,
					emergencyContactPerson: `${data.emergencyContactPerson}`,
	  				emergencyContactNumber: `${data.emergencyContactNumber}`
				}, {
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