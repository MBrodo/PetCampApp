import { CardField } from '@stripe/stripe-react-native'
import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from '../style'

export const PayCardView = (props) => {
	return (
		<View style={styles.paymentContainer}>
			<CardField
				postalCodeEnabled={true}
				placeholder={{
					number: '4242 4242 4242 4242',
				}}
				cardStyle={styles.card}
				style={styles.cardContainer}
				onCardChange={(cardDetails) => {
					console.log('cardDetails', cardDetails)
				}}
				onFocus={(focusedField) => {
					console.log('focusField', focusedField)
				}}
			/>
			<Pressable onPress={props.goToCongrats} style={styles.paymentButton}>
				<Text style={styles.paymentText}>Pay</Text>
			</Pressable>
		</View>
	)
}
