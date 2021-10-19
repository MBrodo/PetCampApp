import URLS from '../authUrls'
import { IP } from '../hostIP'
import axios from 'axios'

const loginController = async (email, password, role) =>
	new Promise((resolve) => {
		axios
			.post(`http:/${IP.HOST}${URLS.SIGN_IN}`, {
				email,
				password,
				role,
			})
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default loginController
