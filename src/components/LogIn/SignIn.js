import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import React, { useState } from 'react'
import { Text, View, TextInput, Button, Alert, Modal, ScrollView } from 'react-native'
import { SignUp } from './SignUp'

export const SignIn = () => {
	const [username] = useState()
	const [password] = useState()
	const [hidePass, setHidePass] = useState(true)
	const [modalWindow, setModalWindow] = useState(false)

	return (
		<View style={styles.wrapper}>
			<Modal visible={modalWindow}>
				<Icon
					style={styles.closeIcon}
					name="times"
					size={30}
					onPress={() => setModalWindow(false)}
				/>
				<SignUp />
			</Modal>

			<View style={styles.logInSection}>
				<Text style={styles.logInTitle}>Log In</Text>
				<View>
					<Text style={styles.logInText}>Phone or e-mail</Text>
					<TextInput
						style={styles.input}
						onChange={username}
						placeholder="Text"
						autoCorrect={false}
					/>
				</View>

				<View>
					<Text style={styles.logInText}>password</Text>
					<View style={styles.passwordInput}>
						<TextInput
							style={styles.passwordText}
							onChange={password}
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

				<View style={styles.logInButton}>
					<Button
						title="log in"
						color="#5D5FEF"
						onPress={() => Alert.alert('Now you are logged in!')}
					/>
				</View>

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