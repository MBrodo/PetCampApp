import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import React, { useState } from 'react'
import { Text, View, TouchableHighlight, Alert, Modal, ScrollView } from 'react-native'
import { SignUp } from './SignUp'
import { LogInUsername } from './LogInUsername'
import { LogInPassword } from './LogInPassword'
// import { ScrollView } from 'react-native-gesture-handler'

export const SignIn = () => {
	const [modalWindow, setModalWindow] = useState(false)

	return (
		<ScrollView>
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
					<LogInUsername />
					<LogInPassword />
					<Text>forgot your password?</Text>

					<TouchableHighlight
						style={styles.logInButton}
						onPress={() => Alert.alert('Now you are logged in!')}
						underlayColor="#4A4CBF"
					>
						<Text style={styles.logInButtonText}>log in</Text>
					</TouchableHighlight>

					<View style={styles.textWithLines}>
						<View style={styles.alternativeLine} />
						<Text style={styles.logInAlternativeText}>or</Text>
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
		</ScrollView>
	)
}
