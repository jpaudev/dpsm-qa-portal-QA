import axios from "axios"

export default async function getApprovalListInfo(token, decodedData) {

	try {
		if (token) {
    		let facultyId = decodedData.facultyId
            let url = process.env.API_URL + '/faculty/approval/' + facultyId
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