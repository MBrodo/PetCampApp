import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from './style'

export const BookingButton = (props) => {
	return (
		<View style={styles.acceptButtonContainer}>
			<Pressable
				onPress={() => {
					props.secondStep()
				}}
				disabled={props.checkPoints}
				style={styles.acceptButton}
			>
				<Text style={styles.acceptButtonText}>Next</Text>
			</Pressable>
		</View>
	)
}
