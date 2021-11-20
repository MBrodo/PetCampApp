import URLS from '../authUrls'
import { IP } from '../hostIP'
import axios from 'axios'

const getSettingsController = async (id, token) =>
	new Promise((resolve) => {
		axios
			.get(`${IP.HOST}${URLS.SEND_SETTINGS}/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default getSettingsController
