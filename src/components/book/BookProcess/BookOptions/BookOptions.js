import React, { useState } from 'react'

import { LoggedBookContainer } from './BookOptionsLogged/LoggedBookContainer'
import { UnLoggedBookContainer } from './BookOptionsUnLogged/UnLoggedBookContainer'
import EncryptedStorage from 'react-native-encrypted-storage'

export const BookOptions = (props) => {
	const [storageItem, setStorageItem] = useState()
	async function retrieveUserSession() {
		try {
			// await EncryptedStorage.removeItem('user_session')
			const session = await EncryptedStorage.getItem('user_session')
			setStorageItem(session)
		} catch (error) {}
	}
	retrieveUserSession()
	const checkStore = (item) => {
		if (item !== null) {
			return (
				<LoggedBookContainer
					dateText={props.route.params.dateText}
					dateTextEnd={props.route.params.dateTextEnd}
					information={props.route.params.information}
				/>
			)
		} else {
			return <UnLoggedBookContainer information={props.route.params.information} />
		}
	}

	return checkStore(storageItem)
}
