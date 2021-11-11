import URLS from '../authUrls'
import { IP } from '../hostIP'
import axios from 'axios'

const sendSettingsController = async (
	userId,
	name,
	middlename,
	surname,
	email,
	city,
	street,
	phone
) =>
	new Promise((resolve) => {
		axios
			.put(`${IP.HOST}${URLS.SEND_SETTINGS}`, {
				userId,
				name,
				middlename,
				surname,
				email,
				city,
				street,
				phone,
			})
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default sendSettingsController
