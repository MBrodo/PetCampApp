import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'

export const BookPetInfo = (props) => {
	return (
		<View style={styles.bookPointContainer}>
			<Text>{props.title}</Text>
			<Text style={styles.bookPointText}>{props.item}</Text>
		</View>
	)
}
