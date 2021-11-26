import URLS from '../authUrls'
import { IP } from '../hostIP'
import axios from 'axios'

const deleteBook = async (id, token) =>
	new Promise((resolve) => {
		axios
			.delete(`${IP.HOST}${URLS.DELETE_BOOK}/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default deleteBook
