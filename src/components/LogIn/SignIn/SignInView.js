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
	Pressable,
} from 'react-native'
import { SignUpContainer } from '../SignUp/SignUpContainer'
import { EMAIL_VALIDATION, PASSWORD_VALIDATION } from '../validation'
import checkValidation from '../../../utils/checkValidation'

export const SignInView = (props) => {
	return (
		<ScrollView>
			<KeyboardAvoidingView>
				<View style={styles.wrapper}>
					<Modal visible={props.modalWindow}>
						<ScrollView>
							<Pressable style={styles.closeIcon} onPress={() => props.setModalWindow(false)}>
								<Icon name="times" size={30} />
							</Pressable>
							<SignUpContainer setModalWindow={props.modalWindow} />
						</ScrollView>
					</Modal>

					<View style={styles.logInSection}>
						<Text style={styles.logInTitle}>Log In</Text>
						<View>
							<Text style={styles.logInText}>e-mail</Text>
							<TextInput
								style={checkValidation(props.signIn, 'isEmailValid', 'email')}
								onChangeText={(e) =>
									props.changeState('email', 'isEmailValid', e, EMAIL_VALIDATION.test(e))
								}
								placeholder="Enter your email"
								autoCorrect={false}
							/>
							{props.showInvalidMessage('isEmailValid', 'email')}
						</View>

						<View>
							<Text style={styles.logInText}>password</Text>
							<View style={checkValidation(props.signIn, 'isPasswordValid', 'password')}>
								<TextInput
									style={styles.passwordText}
									onChangeText={(e) =>
										props.changeState('password', 'isPasswordValid', e, PASSWORD_VALIDATION.test(e))
									}
									placeholder="Password"
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
							{props.showInvalidMessage('isPasswordValid', 'password')}
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
