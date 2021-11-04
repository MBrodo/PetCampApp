import axios from 'axios'
import URLS from '../authUrls'
import { IP } from '../hostIP'

const fullpetListController = (id) =>
	new Promise((resolve) => {
		axios
			.get(`http:/${IP.HOST}${URLS.BOOK_LIST}/${id}`)
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default fullpetListController
