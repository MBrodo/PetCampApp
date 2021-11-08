import React from 'react'

import { LoggedBookContainer } from './BookOptionsLogged/LoggedBookContainer'
import { UnLoggedBookContainer } from './BookOptionsLogged/BookOptionsUnLogged/UnLoggedBookContainer'
import { useSelector, useDispatch } from 'react-redux'
import { setAuth } from '../../../../redux/slices/authentication/authSlice'
export const BookOptions = (props) => {
	const checkStore = () => {
		const dispatch = useDispatch()
		const authenticate = useSelector((state) => state.auth.status)

		if (authenticate.length === 0) {
			dispatch(setAuth(false))
		}
		const petInformation = useSelector((state) => state.camps.camps)
		if (!authenticate) {
			return <UnLoggedBookContainer information={petInformation} />
		} else {
			return <LoggedBookContainer information={petInformation} />
		}
	}

	return checkStore()
}
