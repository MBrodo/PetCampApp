import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from './style'

export const DefaultButton = (props) => {
	return (
		<View style={styles.ButtonContainer}>
			<Pressable onPress={props.onPress} style={styles.cancleButton}>
				<Text style={styles.cancleButtonText}>{props.textButton}</Text>
			</Pressable>
		</View>
	)
}
