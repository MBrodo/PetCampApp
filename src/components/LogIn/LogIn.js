import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { SignInContainer } from './SignIn/SignInContainer'
import { Profile } from '../../screens/Profile'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../redux/slices/authentication/authSlice'

export const LogIn = () => {
	const [authenticate, setAuthenticate] = useState(false)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setAuth(authenticate))
	}, [authenticate])

	const checkAuthentication = () => {
		return authenticate ? <Profile /> : <SignInContainer setAuthenticate={setAuthenticate} />
	}
	return <View>{checkAuthentication()}</View>
}
