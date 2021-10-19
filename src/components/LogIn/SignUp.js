import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import React from 'react'
import { Text, View, TouchableHighlight, Alert } from 'react-native'
import { LogInUsername } from './LogInUsername'
import { LogInPassword } from './LogInPassword'

export const SignUp = () => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.logInSection}>
				<Text style={styles.logInTitle}>Sign Up</Text>
				<LogInUsername />
				<LogInPassword />

				<TouchableHighlight
					style={styles.logInButton}
					onPress={() => Alert.alert('Registration completed')}
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
