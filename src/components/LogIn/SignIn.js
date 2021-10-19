import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import React, { useState } from 'react'
import { Text, View, TextInput, TouchableHighlight, Modal, Alert } from 'react-native'
import { SignUp } from './SignUp'

import loginController from '../../controllers/authorization/loginController'
import EncryptedStorage from 'react-native-encrypted-storage'

export const SignIn = (props) => {
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
		loginController(email, password, 'client').then((res) => {
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
		<View style={styles.wrapper}>
			<Modal visible={modalWindow}>
				<Icon
					style={styles.closeIcon}
					name="times"
					size={30}
					onPress={() => setModalWindow(false)}
				/>
				<SignUp setModalWindow={modalWindow} />
			</Modal>

			<View style={styles.logInSection}>
				<Text style={styles.logInTitle}>Log In</Text>
				<View>
					<Text style={styles.logInText}>Phone or e-mail</Text>
					<TextInput
						style={styles.input}
						onChangeText={setEmail}
						placeholder="Text"
						autoCorrect={false}
					/>
				</View>

				<View>
					<Text style={styles.logInText}>password</Text>
					<View style={styles.passwordInput}>
						<TextInput
							style={styles.passwordText}
							onChangeText={setPassword}
							placeholder="12345678"
							autoCorrect={false}
							secureTextEntry={hidePass}
						/>
						<Icon
							style={styles.passwordIcon}
							name={hidePass ? 'eye-slash' : 'eye'}
							size={20}
							color="grey"
							onPress={() => setHidePass(hidePass ? false : true)}
						/>
					</View>

					<Text>forgot your password?</Text>
				</View>

				<TouchableHighlight
					style={styles.logInButton}
					onPress={() => Alert.alert('Now you are logged in!')}
					underlayColor="#4A4CBF"
				>
					<Text style={styles.logInButtonText}>log in</Text>
				</TouchableHighlight>

				<View style={styles.textWithLines}>
					<View style={styles.alternativeLine} />
					<View>
						<Text style={styles.logInAlternativeText}>or</Text>
					</View>
					<View style={styles.alternativeLine} />
				</View>

				<View style={styles.subContainer}>
					<Icon style={styles.fbicon} name="facebook" size={50} />
					<View style={styles.subContainerText}>
						<Text style={styles.subContainerTitle}>I'm a new client.</Text>
						<Text style={styles.subContainerLink} onPress={() => setModalWindow(true)}>
							Sign Up
						</Text>
					</View>
				</View>
			</View>
		</View>
	)
}
