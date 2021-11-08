import URLS from '../../authUrls'
import { IP } from '../../hostIP'
import axios from 'axios'

const sendNewCardController = async (
	id,
	name,
	type,
	breed,
	gender,
	owner,
	age,
	sterilized,
	passport,
	info
) =>
	new Promise((resolve) => {
		axios
			.post(`${IP.HOST}${URLS.BOOK_LIST}/${id}`, {
				id,
				name,
				type,
				breed,
				gender,
				owner,
				age,
				sterilized,
				passport,
				info,
			})
			.then((response) => resolve(response))
			.catch((e) => resolve(e.response))
	})

export default sendNewCardController
