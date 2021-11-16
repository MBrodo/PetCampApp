import React, { useState } from 'react'
import { Alert } from 'react-native'

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

	const checkValidation = (name) => {
		return signUp[name] ? styles.passwordInputValid : styles.passwordInput
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
			hidePassword={hidePassword}
			signUp={signUp}
			isEmailValid={signUp.isEmailValid}
			checkValidation={checkValidation}
			changeState={changeState}
			SignUpSubmit={SignUpSubmit}
		/>
	)
}
