import React, { useState } from 'react'
import { View } from 'react-native'
import { SignInContainer } from './SignIn/SignInContainer'
import { Profile } from '../../screens/Profile'

export const LogIn = (props) => {
	const checkAuthentication = () => {
		return props.authenticate ? (
			<Profile />
		) : (
			<SignInContainer setAuthenticate={props.setAuthenticate} />
		)
	}
	return <View>{checkAuthentication()}</View>
}
