import URLS from '../authUrls'
import { IP } from '../hostIP'
import axios from 'axios'

const deleteBook = async (id) =>
	new Promise((resolve) => {
		axios
			.delete(`${IP.HOST}${URLS.DELETE_BOOKING}/${id}`)
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default deleteBook
