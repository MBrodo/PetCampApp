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

	const showInvalidMessage = (isValid, field) => {
		return !signUp[isValid] && signUp[field].length > 0 ? (
			<Text style={styles.passwordMessageText}>Invalid value. Please correct and try again</Text>
		) : null
	}

	const changeState = (state, validation, item, regular) => {
		setSignUp((prevState) => ({
			...prevState,
			[state]: item,
			[validation]: regular,
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
			changeState={changeState}
			SignUpSubmit={SignUpSubmit}
		/>
	)
}
