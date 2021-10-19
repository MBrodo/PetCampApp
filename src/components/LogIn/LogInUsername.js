import { styles } from './style'
import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'

export const LogInUsername = () => {
	const [username] = useState()

	return (
		<View>
			<View>
				<Text style={styles.logInText}>Phone or e-mail</Text>
				<TextInput
					style={styles.input}
					onChange={username}
					placeholder="Enter your phone number of e-mail"
					autoCorrect={false}
				/>
			</View>
		</View>
	)
}
