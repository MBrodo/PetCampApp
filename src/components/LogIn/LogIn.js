import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { SignInContainer } from './SignIn/SignInContainer'
import { Profile } from '../../screens/Profile'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '../../redux/slices/authentication/authSlice'
import EncryptedStorage from 'react-native-encrypted-storage'

export const LogIn = () => {
	const [userID] = useState(useSelector((state) => state.user.id.length))
	const [authenticate, setAuthenticate] = useState(false)
	const dispatch = useDispatch()

	async function retrieveUserSession() {
		try {
			const session = await EncryptedStorage.getItem('user_session')
			console.log(session, 'login')
		} catch (error) {}
	}
	retrieveUserSession()

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
