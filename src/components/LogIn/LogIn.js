import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { SignInContainer } from './SignIn/SignInContainer'
import { Profile } from '../../screens/Profile'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '../../redux/slices/authentication/authSlice'

export const LogIn = () => {
	const [userID] = useState(useSelector((state) => state.user.id.length))
	const [authenticate, setAuthenticate] = useState(false)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setAuth(authenticate))
	}, [authenticate])

	const checkAuthentication = () => {
		return (userID === 0 ? authenticate : true) ? (
			<Profile />
		) : (
			<SignInContainer setAuthenticate={setAuthenticate} />
		)
	}

	return <View>{checkAuthentication()}</View>
}
