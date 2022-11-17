import axios from "axios"

export default async function getUnitAssignmentInfo(token, decodedData) {

	try {
		if (token) {
            let url = process.env.API_URL + '/faculty/basic-info/unit/assignment'
            url += decodedData.role == 2 ? '?unitId=' + decodedData.unitId : ""

                try {
                    const response = await axios({
                        method: 'GET',
                        url: url,
                        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
                    })	
                    return response.data
                } catch (err) {
                    return err
                }
		}
	} catch (err) {
		return err
	}
}