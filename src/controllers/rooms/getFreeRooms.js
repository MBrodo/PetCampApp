import URLS from '../authUrls'
import { IP } from '../hostIP'
import axios from 'axios'

const getFreeRooms = async (id, start, end, token) =>
	new Promise((resolve) => {
		axios
			.get(`${IP.HOST}${URLS.GET_FREE_ROOMS}/${id}/${start}/${end}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default getFreeRooms
