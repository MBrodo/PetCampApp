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
					placeholder="Text"
					autoCorrect={false}
				/>
			</View>
		</View>
	)
}
