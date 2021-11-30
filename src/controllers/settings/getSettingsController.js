import URLS from '../authUrls'
import { IP } from '../hostIP'
import axios from 'axios'

const getSettingsController = async (id) =>
	new Promise((resolve) => {
		axios
			.get(`${IP.HOST}${URLS.SEND_SETTINGS}/${id}`)
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default getSettingsController
