import React, { useState } from 'react'

import { LoggedBookContainer } from './BookOptionsLogged/LoggedBookContainer'
import { UnLoggedBookContainer } from './BookOptionsLogged/BookOptionsUnLogged/UnLoggedBookContainer'
import { useSelector, useDispatch } from 'react-redux'
import { setAuth } from '../../../../redux/slices/authentication/authSlice'
export const BookOptions = (props) => {
	const dispatch = useDispatch()
	const authenticate = useSelector((state) => state.auth.status)
	const [userID] = useState(useSelector((state) => state.user.id.length))

	if (authenticate.length === 0) {
		dispatch(setAuth(false))
	}
	const petInformation = useSelector((state) => state.pets.petInformation)

	const checkProfile = () => {
		if (userID === 0) {
			return authenticate
		} else {
			return true
		}
	}
	const checkStore = () => {
		return (userID === 0 ? authenticate : true) ? (
			<LoggedBookContainer information={petInformation} />
		) : (
			<UnLoggedBookContainer information={petInformation} />
		)
	}

	return checkStore()
}
