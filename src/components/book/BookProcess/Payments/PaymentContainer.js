import React from 'react'
import { PaymentView } from './PaymentView'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

export const PaymentContainer = (props) => {
	const navigation = useNavigation()
	const selectedPet = useSelector((state) => state.pets.selected)

	const goToPayment = () => {
		navigation.navigate('PaymentScreen', {
			campID: props.route.params.campID,
			bookingDateStart: props.route.params.bookingDateStart,
			bookingDateEnds: props.route.params.bookingDateEnds,
		})
	}
	return (
		<PaymentView
			checkImage={props.route.params.checkImage}
			totalPrice={props.route.params.totalPrice}
			bookingDateStart={props.route.params.bookingDateStart}
			bookingDateEnds={props.route.params.bookingDateEnds}
			pet={selectedPet[0]}
			goToPayment={goToPayment}
		/>
	)
}
