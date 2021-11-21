import URLS from '../authUrls'
import { IP } from '../hostIP'
import axios from 'axios'

const deletePet = async (id) =>
	new Promise((resolve) => {
		axios
			.delete(`${IP.HOST}${URLS.DELETE_PET}/${id}`)
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default deletePet
