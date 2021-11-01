import React from 'react'

import { LoggedBookContainer } from './BookOptionsLogged/LoggedBookContainer'
import { UnLoggedBookContainer } from './BookOptionsUnLogged/UnLoggedBookContainer'

export const BookOptions = (props) => {
	const checkStore = () => {
		if (props.authenticate) {
			return (
				<LoggedBookContainer
					Quantity={props.Quantity}
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
