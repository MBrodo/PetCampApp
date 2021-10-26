import React, { useState } from 'react'
import { Alert } from 'react-native'

import loginController from '../../../controllers/authorization/loginController'
import EncryptedStorage from 'react-native-encrypted-storage'

import { SignInView } from './SignInView'

export const SignInContainer = (props) => {
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

	const SignInSubmit = () => {
		loginController(email, password, 1).then((res) => {
			if (res.status === 200) {
				setPassword('0')
				Alert.alert('Welcome to the Pet Camp!')
				storeUserSession(res)
				props.authenticate(true)
				console.log(password)
			} else if (res.status === 400) {
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
