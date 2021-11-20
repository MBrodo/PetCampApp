import React, { useState } from 'react'
import { Alert } from 'react-native'

import loginController from '../../../controllers/authorization/loginController'
import getSettingsController from '../../../controllers/settings/getSettingsController'
import EncryptedStorage from 'react-native-encrypted-storage'
import { setUser, setUserId, setSettings } from '../../../redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'

import { SignInView } from './SignInView'

export const SignInContainer = (props) => {
	const userInfo = useSelector((state) => state.user.info.substring(19, 248))
	async function storeUserSession(res) {
		try {
			await EncryptedStorage.setItem(
				'user_session',
				JSON.stringify({
					token: res.data,
				})
			)
		} catch (error) {}
	}
	const [hidePass, setHidePass] = useState(true)
	const [modalWindow, setModalWindow] = useState(false)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	const setProfileSettings = (userID) => {
		getSettingsController(userID, userInfo).then((res) => {
			if (res.status === 200) {
				console.log('successs')
				dispatch(setSettings(res.data.mySettingsInfo))
			} else {
				console.log('fail')
			}
		})
	}
	const SignInSubmit = () => {
		loginController(email, password, 1).then((res) => {
			if (res.status === 200) {
				setPassword('0')
				Alert.alert('Welcome to the Pet Camp!')
				storeUserSession(res)
				dispatch(setUserId(res.data.id))
				dispatch(setUser(res.data))
				setProfileSettings(res.data.id)
				props.setAuthenticate(true)
			} else if (res.status === 401 || res.status === 400) {
				Alert.alert('Login or password is incorrect')
			}
		})
	}

	return (
		<SignInView
			hidePass={hidePass}
			setHidePass={setHidePass}
			modalWindow={modalWindow}
			setModalWindow={setModalWindow}
			email={email}
			setEmail={setEmail}
			password={password}
			setPassword={setPassword}
			SignInSubmit={SignInSubmit}
		/>
	)
}
