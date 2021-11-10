import URLS from '../authUrls'
import { IP } from '../hostIP'
import axios from 'axios'

const registrationController = async (userName, email, password, role) =>
	new Promise((resolve) => {
		axios
			.post(`${IP.HOST}${URLS.SIGN_UP}`, {
				userName,
				email,
				password,
				role,
			})
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default registrationController
