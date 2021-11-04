import axios from 'axios'
import URLS from '../authUrls'
import { IP } from '../hostIP'

const bookList = (id) =>
	new Promise((resolve) => {
		axios
			.get(`http:/${IP.HOST}${URLS.BOOK_LIST}/${id}`)
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default bookList
