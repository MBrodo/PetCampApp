import React, { useState } from 'react'
import { Alert, Text } from 'react-native'

import registrationController from '../../../controllers/authorization/registrationController'
import { SignUpView } from './SignUpView'
import { styles } from '../style'

export const SignUpContainer = () => {
	const [signUp, setSignUp] = useState({
		email: '',
		userName: '',
		password: '',
		hidePass: true,
		middleName: '',
		surname: '',
		mobileNumber: '',
		isPasswordValid: false,
		isEmailValid: false,
		isNameValid: false,
		isMiddleNameValid: false,
		isSurnameValid: false,
		isPhoneValid: false,
	})

	const hidePassword = () => {
		setSignUp((prevState) => ({
			...prevState,
			hidePass: !prevState.hidePass,
		}))
	}

	const showInvalidMessage = (firstName, secondName) => {
		return !signUp[firstName] ? (
			signUp[secondName].length > 0 ? (
				<Text style={styles.passwordMessageText}>
					Dolor duis pariatur sint dolor. Adipisicing nisi mollit officia tempor consectetur labore
					laboris.
				</Text>
			) : null
		) : null
	}

	const checkValidation = (firstName, secondName) => {
		return signUp[firstName]
			? styles.passwordInputValid
			: signUp[secondName].length === 0
			? styles.passwordInput
			: styles.passwordInputInValid
	}
	const changeState = (firstName, secondName, item, regular) => {
		setSignUp((prevState) => ({
			...prevState,
			[firstName]: item,
			[secondName]: regular,
		}))
	}

	const SignUpSubmit = () => {
		registrationController(
			signUp.email,
			signUp.userName,
			signUp.middleName,
			signUp.surname,
			signUp.mobileNumber,
			signUp.password,
			1
		).then((res) => {
			if (res.status === 200) {
				Alert.alert('Confirm your e-mail to finish registration')
				// setPassword('0')
			} else if (res.status === 409) {
				Alert.alert(res.data.message)
			}
		})
	}

	return (
		<SignUpView
			showInvalidMessage={showInvalidMessage}
			hidePassword={hidePassword}
			signUp={signUp}
			isEmailValid={signUp.isEmailValid}
			checkValidation={checkValidation}
			changeState={changeState}
			SignUpSubmit={SignUpSubmit}
		/>
	)
}
