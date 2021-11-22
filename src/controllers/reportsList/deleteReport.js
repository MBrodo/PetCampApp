import URLS from '../authUrls'
import { IP } from '../hostIP'
import axios from 'axios'

const deleteReport = async (id) =>
	new Promise((resolve) => {
		axios
			.delete(`${IP.HOST}${URLS.DELETE_REPORT}/${id}`)
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default deleteReport
