import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from './style'

export const BookingButton = (props) => {
	console.log(props)
	return (
		<View style={styles.acceptButtonContainer}>
			<Pressable onPress={() => props.secondStep()} style={styles.acceptButton}>
				<Text style={styles.acceptButtonText}>Next</Text>
			</Pressable>
		</View>
	)
}
