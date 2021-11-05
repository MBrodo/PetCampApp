import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from './style'

export const PetInfo = (props) => {
	return (
		<View style={styles.pointContainer}>
			<Text>{props.title}</Text>
			<Text style={styles.pointText}>{props.item}</Text>
		</View>
	)
}
