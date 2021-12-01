import React, { useState, useContext } from 'react'
import { Alert, Text } from 'react-native'

import loginController from '../../../controllers/authorization/loginController'
import getSettingsController from '../../../controllers/settings/getSettingsController'
import EncryptedStorage from 'react-native-encrypted-storage'
import { setUser, setUserId, setSettings } from '../../../redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '../../../redux/slices/authentication/authSlice'
import { Context } from '../../../context'
import { SignInView } from './SignInView'
import { styles } from '../style'

export const SignInContainer = (props) => {
	const token = useContext(Context)
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
	const [signIn, setSignIn] = useState({
		email: '',
		password: '',
		isPasswordValid: false,
		isEmailValid: false,
	})
	const changeState = (firstName, secondName, item, regular) => {
		setSignIn((prevState) => ({
			...prevState,
			[firstName]: item,
			[secondName]: regular,
		}))
	}
	const showInvalidMessage = (firstName, secondName) => {
		return !signIn[firstName] ? (
			signIn[secondName].length > 0 ? (
				<Text style={styles.passwordMessageText}>
					Dolor duis pariatur sint dolor. Adipisicing nisi mollit officia tempor consectetur labore
					laboris.
				</Text>
			) : null
		) : null
	}
	const checkValidation = (firstName, secondName) => {
		return signIn[firstName]
			? styles.passwordInputValid
			: signIn[secondName].length === 0
			? styles.passwordInput
			: styles.passwordInputInValid
	}

	const setProfileSettings = (userID) => {
		getSettingsController(userID, token).then((res) => {
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
				dispatch(setAuth(true))
				storeUserSession(res)
				dispatch(setUserId(res.data.id))
				dispatch(setUser(res.data.token))
				setProfileSettings(res.data.id)
				props.setAuthenticate(true)
				Alert.alert('Welcome to the Pet Camp!')
			} else if (res.status === 401 || res.status === 400) {
				Alert.alert('Login or password is incorrect')
			}
		})
	}

	return (
		<SignInView
			showInvalidMessage={showInvalidMessage}
			checkValidation={checkValidation}
			changeState={changeState}
			signIn={signIn}
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
