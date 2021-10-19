import React, { useState } from 'react'
import { View } from 'react-native'
import { SignIn } from './SignIn'
import { Profile } from '../../screens/Profile'

export const LogIn = () => {
	const [authenticate, setAuthenticate] = useState(false)

	return (
		<View>
			{authenticate ? <Profile /> : <SignIn authenticate={(authenticate, setAuthenticate)} />}
		</View>
	)
}
