import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'

export const LogInPassword = () => {
	const [password] = useState()
	const [hidePass, setHidePass] = useState(true)

	return (
		<View>
			<Text style={styles.logInText}>password</Text>
			<View style={styles.passwordInput}>
				<TextInput
					style={styles.passwordText}
					onChange={password}
					placeholder="Enter your password"
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
		</View>
	)
}
