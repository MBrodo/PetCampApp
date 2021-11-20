import axios from 'axios'
import URLS from './authUrls'
import { IP } from './hostIP'

const petTypeController = (id, type, token) =>
	new Promise((resolve) => {
		axios
			.get(`${IP.HOST}${URLS.TYPE_PET}/${type}/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default petTypeController
