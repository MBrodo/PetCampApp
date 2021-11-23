import React from 'react'
import { PaymentView } from './PaymentView'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

export const PaymentContainer = (props) => {
	const navigation = useNavigation()
	const selectedPet = useSelector((state) => state.pets.selected)
	const campId = useSelector((state) => state.booking.currentCamp)
	const freeRooms = useSelector((state) => state.camps.rooms)

	const goToPayment = () => {
		navigation.navigate('PaymentScreen', {
			campID: props.route.params.campID,
			bookingDateStart: props.route.params.bookingDateStart,
			bookingDateEnds: props.route.params.bookingDateEnds,
		})
	}
	const goBackToFirstStep = () => {
		navigation.navigate('BookOption')
	}
	const goBackToSecondStep = () => {
		navigation.navigate('ChoosePet', {
			totalPrice: props.route.params.totalPrice,
			pet: selectedPet,
		})
	}
	return (
		<PaymentView
			campId={campId}
			totalPrice={props.route.params.totalPrice}
			bookingDateStart={props.route.params.bookingDateStart}
			bookingDateEnds={props.route.params.bookingDateEnds}
			pet={selectedPet}
			goToPayment={goToPayment}
			goBackToFirstStep={goBackToFirstStep}
			goBackToSecondStep={goBackToSecondStep}
			freeRooms={freeRooms}
		/>
	)
}
