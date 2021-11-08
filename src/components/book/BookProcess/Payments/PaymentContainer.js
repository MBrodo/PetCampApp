import React from 'react'
import { PaymentView } from './PaymentView'
import { useNavigation } from '@react-navigation/native'

export const PaymentContainer = (props) => {
	const navigation = useNavigation()
	console.log(props)
	const goToPayment = () => {
		navigation.navigate('PaymentScreen', {
			pet: props.route.params.pet.id,
			campID: props.route.params.campID,
			bookingDateStart: props.route.params.bookingDateStart,
			bookingDateEnds: props.route.params.bookingDateEnds,
		})
	}
	return (
		<PaymentView
			totalPrice={props.route.params.totalPrice}
			bookingDateStart={props.route.params.bookingDateStart}
			bookingDateEnds={props.route.params.bookingDateEnds}
			pet={props.route.params.pet}
			goToPayment={goToPayment}
		/>
	)
}
