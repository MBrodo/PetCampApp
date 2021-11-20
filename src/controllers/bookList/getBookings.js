import URLS from '../authUrls'
import { IP } from '../hostIP'
import axios from 'axios'

const getBookingController = async (id, token) =>
	new Promise((resolve) => {
		axios
			.get(`${IP.HOST}${URLS.LIST_OF_BOOKINGS}/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default getBookingController
