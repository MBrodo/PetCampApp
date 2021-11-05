import React from 'react'

import { LoggedBookContainer } from './BookOptionsLogged/LoggedBookContainer'
import { UnLoggedBookContainer } from './BookOptionsUnLogged/UnLoggedBookContainer'
import { useSelector, useDispatch } from 'react-redux'
import { setAuth } from '../../../../redux/slices/authentication/authSlice'
export const BookOptions = (props) => {
	const checkStore = () => {
		const dispatch = useDispatch()
		const authenticate = useSelector((state) => state.auth.auth)

		if (authenticate.length === 0) {
			dispatch(setAuth(false))
		}

		if (!authenticate) {
			return <UnLoggedBookContainer information={props.information} />
		} else {
			return (
				<LoggedBookContainer
					Quantity={props.Quantity}
					dateText={props.dateText}
					dateTextEnd={props.dateTextEnd}
					information={props.information}
				/>
			)
		}
	}

	return checkStore()
}
