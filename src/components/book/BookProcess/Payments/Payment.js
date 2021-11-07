import { CardField, useStripe } from '@stripe/stripe-react-native'
import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import sendBookController from '../../../../controllers/authorization/sendBookController'

export const Payment = (props) => {
	const userId = useSelector((state) => state.user.user)
	const SendBook = () => {
		sendBookController(
			userId,
			props.route.params.pet,
			props.route.params.campID,
			props.route.params.dateText,
			props.route.params.dateTextEnd,
			true
		).then((res) => {
			if (res.status === 200) {
				console.log('success')
			} else if (res.status === 401 || res.status === 400) {
				console.log('fail')
			}
		})
	}

	const navigation = useNavigation()
	const handlePayPress = () => {
		navigation.navigate('Congrats')
		SendBook()
	}
	return (
		<View style={styles.paymentContainer}>
			<CardField
				postalCodeEnabled={true}
				placeholder={{
					number: '4242 4242 4242 4242',
				}}
				cardStyle={{
					backgroundColor: '#F2F2F2',
					textColor: '#000000',
					borderColor: '#000000',
					borderWidth: 1,
					borderRadius: 5,
				}}
				style={{
					width: '95%',
					height: 50,
					marginVertical: 30,
					marginHorizontal: 10,
				}}
				onCardChange={(cardDetails) => {
					console.log('cardDetails', cardDetails)
				}}
				onFocus={(focusedField) => {
					console.log('focusField', focusedField)
				}}
			/>
			<Pressable onPress={handlePayPress} style={styles.paymentButton}>
				<Text style={styles.paymentText}>Pay</Text>
			</Pressable>
		</View>
	)
}
