import React, { useState } from 'react'

import { LoggedBookContainer } from './BookOptionsLogged/LoggedBookContainer'
import { UnLoggedBookContainer } from './BookOptionsUnLogged/UnLoggedBookContainer'
import EncryptedStorage from 'react-native-encrypted-storage'

export const BookOptions = (props) => {
	const checkStore = () => {
		if (props.authenticate) {
			return (
				<LoggedBookContainer
					dateText={props.dateText}
					dateTextEnd={props.dateTextEnd}
					information={props.information}
				/>
			)
		} else {
			return <UnLoggedBookContainer information={props.information} />
		}
	}

	return checkStore()
}
