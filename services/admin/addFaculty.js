import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function addFaculty(data, token) {
	let cookieData = jwt.decode(token)
	console.log(cookieData)
	try {
	    if (token) {	      
	        let url = 'http://localhost:3001/api/user/add';
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
		  				emergencyContactNumber: `${data.emergencyContactNumber}`
		  			}
		  		}
				const response = await axios.post(url, body)
				let facultyId = response.data.result.facultyId

				// const unit = await axios({
				// 	method: 'POST',
				// 	url: 'http://localhost:3001/api/faculty/basic-info/add/unit',
				// 	data: {
				// 		"facultyId": facultyId,
				// 		"unitId": `${data.unit}`
				// 	},
				// 	headers: header
				// })	

				// url = 'http://localhost:3001/api/faculty/basic-info/add/employment';
				// const employ = await axios.post(url, {
				// 	"facultyId": facultyId,
				// 	"employmentPositionId": `${data.employmentPosition}`,
				// 	"startDate": `${data.startDate}`
				// }, {
				// 	headers: {
				// 		Authorization: `Bearer ${token}`
				// 	}
				// })

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