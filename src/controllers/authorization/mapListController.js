import URLS from '../authUrls'
import { IP } from '../hostIP'
import axios from 'axios'

const mapListController = () =>
	new Promise((resolve) => {
		axios
			.get(`http:/${IP.HOST}${URLS.MAP_LIST}`)
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default mapListController
