import React from 'react'
import { PaymentView } from './PaymentView'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'
import sendBookController from '../../../../controllers/authorization/sendBookController'

export const PaymentContainer = (props) => {
	const navigation = useNavigation()
	const goToPayment = () => {
		navigation.navigate('Congrats')
		SendBook()
	}
	const SendBook = () => {
		sendBookController(
			'1a9ce77a-95c3-448d-83de-ec24fa64834c',
			props.route.params.pet.id,
			'3fca765e-3d50-4935-a36c-3e6eb1afa3f5',
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
	return (
		<PaymentView
			totalPrice={props.route.params.totalPrice}
			dateStart={props.route.params.dateText}
			dateEnd={props.route.params.dateTextEnd}
			pet={props.route.params.pet}
			goToPayment={goToPayment}
		/>
	)
}
