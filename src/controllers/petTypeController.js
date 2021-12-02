import axios from 'axios'
import URLS from './authUrls'
import { IP } from './hostIP'

const petTypeController = (id, type) =>
	new Promise((resolve) => {
		axios
			.get(`${IP.HOST}${URLS.TYPE_PET}/${type}/${id}`)
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default petTypeController
