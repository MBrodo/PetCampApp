import React, { useState } from 'react'
import { View } from 'react-native'
import { SignInContainer } from './SignIn/SignInContainer'
import { Profile } from '../../screens/Profile'

export const LogIn = () => {
	const [authenticate, setAuthenticate] = useState(false)

	return (
		<View>
			{authenticate ? (
				<Profile />
			) : (
				<SignInContainer authenticate={(authenticate, setAuthenticate)} />
			)}
		</View>
	)
}
