import URLS from '../authUrls'
import { IP } from '../hostIP'
import axios from 'axios'

const sendBookController = async (user, pets, camp, bookingStart, bookingEnd, isActive = true) =>
	new Promise((resolve) => {
		axios
			.post(`${IP.HOST}${URLS.SEND_BOOK}`, {
				user,
				pets,
				camp,
				bookingStart,
				bookingEnd,
				isActive,
			})
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default sendBookController
