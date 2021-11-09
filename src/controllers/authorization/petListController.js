import axios from 'axios'
import URLS from '../authUrls'
import { IP } from '../hostIP'

const petListController = (id) =>
	new Promise((resolve) => {
		axios
			.get(`${IP.HOST}${URLS.PET_LIST}/${id}`)
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default petListController
