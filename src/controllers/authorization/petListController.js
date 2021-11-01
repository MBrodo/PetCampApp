import axios from 'axios'

const petListController = () =>
	new Promise((resolve) => {
		axios
			.get(`http://192.168.100.10:80/client/clientProfileInfo/1a9ce77a-95c3-448d-83de-ec24fa64834c`)
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default petListController
