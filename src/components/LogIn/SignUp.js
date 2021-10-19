import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import React, { useState } from 'react'
import { Text, View, TextInput, Button, Alert } from 'react-native'

import registrationController from '../../controllers/authorization/registrationController'

export const SignUp = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [hidePass, setHidePass] = useState(true)

	const SignUpSubmit = () => {
		registrationController(email, password, 'client').then((res) => {
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

				<View style={{ marginVertical: 30 }}>
					<Button title="sign up" color="#5D5FEF" onPress={SignUpSubmit} />
				</View>

				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
					<View>
						<Text style={styles.logInAlternativeText}>or</Text>
					</View>
					<View style={{ flex: 1, height: 1, backgroundColor: 'black', margin: 0 }} />
				</View>

				<View style={{ alignItems: 'center' }}>
					<Icon style={{ color: '#4267B2', marginVertical: 10 }} name="facebook" size={50} />
				</View>
			</View>
		</View>
	)
}
