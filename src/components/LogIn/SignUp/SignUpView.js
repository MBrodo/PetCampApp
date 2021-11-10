import { styles } from '../style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import React from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'

export const SignUpView = (props) => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.logInSection}>
				<Text style={styles.logInTitle}>Sign Up</Text>
				<View>
					<Text style={styles.logInText}>Name</Text>
					<View style={styles.passwordInput}>
						<TextInput
							style={styles.passwordText}
							onChangeText={props.setUserName}
							placeholder="Name"
							autoCorrect={false}
						/>
					</View>
				</View>
				<View>
					<Text style={styles.logInText}>phone or e-mail</Text>
					<TextInput
						style={styles.input}
						onChangeText={props.loginChange}
						placeholder="Email or phone number"
						autoCorrect={false}
					/>
				</View>
				<View>
					<Text style={styles.logInText}>password</Text>
					<View style={styles.passwordInput}>
						<TextInput
							style={styles.passwordText}
							onChangeText={props.passwordChange}
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
