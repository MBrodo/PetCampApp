import axios from 'axios'
import URLS from '../authUrls'
import { IP } from '../hostIP'

const bookList = () =>
	new Promise((resolve) => {
		axios
			.get(`http:/${IP.HOST}${URLS.PET_LIST}`)
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default bookList
