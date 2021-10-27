import { styles } from '../style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import React from 'react'
import {
	Text,
	View,
	TextInput,
	TouchableHighlight,
	Modal,
	KeyboardAvoidingView,
	ScrollView,
} from 'react-native'
import { SignUpContainer } from '../SignUp/SignUpContainer'

export const SignInView = (props) => {
	return (
		<ScrollView>
			<KeyboardAvoidingView>
				<View style={styles.wrapper}>
					<Modal visible={props.modalWindow}>
						<Icon
							style={styles.closeIcon}
							name="times"
							size={30}
							onPress={() => props.setModalWindow(false)}
						/>
						<SignUpContainer setModalWindow={props.modalWindow} />
					</Modal>

					<View style={styles.logInSection}>
						<Text style={styles.logInTitle}>Log In</Text>
						<View>
							<Text style={styles.logInText}>Phone or e-mail</Text>
							<TextInput
								style={styles.input}
								onChangeText={props.setEmail}
								placeholder="Text"
								autoCorrect={false}
							/>
						</View>

						<View>
							<Text style={styles.logInText}>password</Text>
							<View style={styles.passwordInput}>
								<TextInput
									style={styles.passwordText}
									onChangeText={props.setPassword}
									placeholder="12345678"
									autoCorrect={false}
									secureTextEntry={props.hidePass}
								/>
								<Icon
									style={styles.passwordIcon}
									name={props.hidePass ? 'eye-slash' : 'eye'}
									size={20}
									color="grey"
									onPress={() => props.setHidePass(props.hidePass ? false : true)}
								/>
							</View>

							<Text>forgot your password?</Text>
						</View>

						<TouchableHighlight
							style={styles.logInButton}
							onPress={props.SignInSubmit}
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
								<Text style={styles.subContainerLink} onPress={() => props.setModalWindow(true)}>
									Sign Up
								</Text>
							</View>
						</View>
					</View>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	)
}
