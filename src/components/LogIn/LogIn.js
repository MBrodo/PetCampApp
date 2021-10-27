import React, { useState } from 'react'
import { View } from 'react-native'
import { SignInContainer } from './SignIn/SignInContainer'
import { Profile } from '../../screens/Profile'

export const LogIn = () => {
	const [authenticate, setAuthenticate] = useState(false)

	const checkAuthentication = () => {
		return authenticate ? (
			<Profile />
		) : (
			<SignInContainer authenticate={(authenticate, setAuthenticate)} />
		)
	}
	return <View>{checkAuthentication()}</View>
}
