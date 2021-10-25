import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import React, { useState } from 'react'
import { Text, View, TextInput, TouchableHighlight, Alert } from 'react-native'

import registrationController from '../../controllers/authorization/registrationController'

export const SignUp = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [hidePass, setHidePass] = useState(true)

	const SignUpSubmit = () => {
		registrationController(email, password, 1).then((res) => {
			if (res.status === 200) {
				Alert.alert(res.data.message)
				setPassword('0')
			} else if (res.status === 400) {
				Alert.alert(res.data.message)
			}
		})
	}

	return (
		<View style={styles.wrapper}>
			<View style={styles.logInSection}>
				<Text style={styles.logInTitle}>Sign Up</Text>
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
					onPress={SignUpSubmit}
					underlayColor="#4A4CBF"
				>
					<Text style={styles.logInButtonText}>sign up</Text>
				</TouchableHighlight>
				<View style={styles.textWithLines}>
					<View style={styles.alternativeLine} />
					<Text style={styles.logInAlternativeText}>or</Text>
					<View style={styles.alternativeLine} />
				</View>
				<View style={styles.subContainer}>
					<Icon style={styles.fbicon} name="facebook" size={50} />
				</View>
			</View>
		</View>
	)
}
