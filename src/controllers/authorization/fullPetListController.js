import axios from 'axios'
import URLS from '../authUrls'
import { IP } from '../hostIP'

const fullpetListController = (id, token) =>
	new Promise((resolve) => {
		axios
			.get(`${IP.HOST}${URLS.BOOK_LIST}/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default fullpetListController
