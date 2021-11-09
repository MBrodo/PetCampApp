import React from 'react'
import { Text, Pressable } from 'react-native'
import { styles } from './style'

export const SubmitButton = (props) => {
	return (
		<Pressable
			style={styles.button}
			onPress={() => {
				props.checkState()
			}}
		>
			<Text style={styles.buttonText}>{props.name}</Text>
		</Pressable>
	)
}
