import React, { useState } from 'react'
import { Alert } from 'react-native'

import { PHONE_VALIDATION, EMAIL_VALIDATION, PASSWORD_VALIDATION } from '../validation'
import registrationController from '../../../controllers/authorization/registrationController'
import { SignUpView } from './SignUpView'

export const SignUpContainer = () => {
	const [email, setEmail] = useState('')
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [hidePass, setHidePass] = useState(true)

	const [isPasswordValid, setPasswordValid] = useState(true)
	const [isLoginValid, setIsLoginValid] = useState(false)

	const validatePassword = (e) => {
		setPasswordValid(PASSWORD_VALIDATION.test(e))
	}

	const validateLogin = (e) => {
		setIsLoginValid(PHONE_VALIDATION.test(e) || EMAIL_VALIDATION.test(e))
	}

	const passwordChange = (e) => {
		setPassword(e)
		validatePassword(e)
	}

	const loginChange = (e) => {
		setEmail(e)
		validateLogin(e)
	}

	const SignUpSubmit = () => {
		registrationController(userName, email, password, 1).then((res) => {
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
			setUserName={setUserName}
			loginChange={loginChange}
			passwordChange={passwordChange}
			hidePass={hidePass}
			setHidePass={setHidePass}
			SignUpSubmit={SignUpSubmit}
			isPasswordValid={isPasswordValid}
			isLoginValid={isLoginValid}
		/>
	)
}
