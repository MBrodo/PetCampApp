import { styles } from '../style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import React from 'react'
import { Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native'
import {
	PHONE_VALIDATION,
	NAME_VALIDATION,
	EMAIL_VALIDATION,
	PASSWORD_VALIDATION,
} from '../validation'

export const SignUpView = (props) => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.logInSection}>
				<Text style={styles.logInTitle}>Sign Up</Text>
				<View>
					<Text style={styles.logInText}>e-mail</Text>
					<TextInput
						style={props.checkValidation('isEmailValid')}
						onChangeText={(e) =>
							props.changeState('email', 'isEmailValid', e, EMAIL_VALIDATION.test(e))
						}
						placeholder="Email or phone number"
						autoCorrect={false}
					/>
				</View>
				<View>
					<Text style={styles.logInText}>Name</Text>
					<TextInput
						style={props.checkValidation('isNameValid')}
						onChangeText={(e) =>
							props.changeState('userName', 'isNameValid', e, NAME_VALIDATION.test(e))
						}
						placeholder="Name"
						autoCorrect={false}
					/>
				</View>
				<View>
					<Text style={styles.logInText}>middle name</Text>
					<TextInput
						style={props.checkValidation('isMiddleNameValid')}
						onChangeText={(e) =>
							props.changeState('middleName', 'isMiddleNameValid', e, NAME_VALIDATION.test(e))
						}
						placeholder="middle name"
						autoCorrect={false}
					/>
				</View>
				<View>
					<Text style={styles.logInText}>surname</Text>
					<TextInput
						style={props.checkValidation('isSurnameValid')}
						onChangeText={(e) =>
							props.changeState('surname', 'isSurnameValid', e, NAME_VALIDATION.test(e))
						}
						placeholder="surname"
						autoCorrect={false}
					/>
				</View>
				<View>
					<Text style={styles.logInText}>mobile number</Text>
					<TextInput
						style={props.checkValidation('isPhoneValid')}
						onChangeText={(e) =>
							props.changeState('mobileNumber', 'isPhoneValid', e, PHONE_VALIDATION.test(e))
						}
						placeholder="mobile number"
						autoCorrect={false}
					/>
				</View>
				<View>
					<Text style={styles.logInText}>password</Text>
					<View style={props.checkValidation('isPasswordValid')}>
						<TextInput
							style={styles.passwordText}
							onChangeText={(e) =>
								props.changeState('password', 'isPasswordValid', e, PASSWORD_VALIDATION.test(e))
							}
							placeholder="Passrowd"
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
					onPress={props.SignUpSubmit}
					underlayColor="#4A4CBF"
					disabled={!(props.isPasswordValid && props.isLoginValid)}
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
