import axios from "axios"

export default async function addPublication(data) {
	try {
		let token = null
		const tokenRes = await axios.post("http://localhost:3001/api/login", {
			upemail: "jpcristobal1@upm.edu.ph",
			password: "password"
		})

		if(tokenRes.data.success) {
			token = tokenRes.data.result.token
			try {
				const response = await axios.post("http://localhost:3001/api/faculty/accomplishment/add/publication", {
					title: `${data.title}`,
					citation: `${data.citation}`,
					url: `${data.url}`,
					publicationDate:`${data.publicationDate}`,
					nonFacultyAuthors: `${data.nonFacultyAuthors}`
				}, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
				if (response.data.success) {
					console.log(response.data.result.publicationId)
					let bod = [{
						facultyId: "9",
						publicationId: response.data.result.publicationId,
						status: "Pending"
					}]
					console.log(bod)
					try {
						const pub = await axios.post("http://localhost:3001/api/faculty/accomplishment/add/publisher", bod, {
							headers: {
								Authorization: `Bearer ${token}`
							}
						})
						if (pub.data.success) {
							console.log(pub.data)
							return pub.data	
						} else {
							console.error(pub.message)
							return pub.data
						}
					} catch (err) {
						console.error(err)
						return err
					}	
				} else {
					console.error(response.message)
					return response.data
				}	
			} catch (err) {
				console.error(err)
				return err
			}
		}
	} catch (err) {
		console.error(err)
		return err
	}
}