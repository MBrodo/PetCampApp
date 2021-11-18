import React from 'react'
import { HomeView } from './HomeView'
import { useSelector, useDispatch } from 'react-redux'
import { setAuth } from '../../../redux/slices/authentication/authSlice'

export const HomeContainer = ({ navigation }) => {
	const authenticate = useSelector((state) => state.auth.status)
	const dispatch = useDispatch()

	if (authenticate.length === 0) {
		dispatch(setAuth(false))
	}

	return <HomeView navigation={navigation} />
}
