import React, { useEffect } from 'react'
import { PaymentView } from './PaymentView'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { setRoom } from '../../../../redux/slices/petCampsSlise'
import getFreeRooms from '../../../../controllers/rooms/getFreeRooms'

export const PaymentContainer = (props) => {
	const navigation = useNavigation()
	const selectedPet = useSelector((state) => state.pets.selected)
	const campId = useSelector((state) => state.booking.currentCamp)
	const freeRooms = useSelector((state) => state.camps.rooms)
	console.log(campId)

	const goToPayment = () => {
		navigation.navigate('PaymentScreen', {
			campID: props.route.params.campID,
			bookingDateStart: props.route.params.bookingDateStart,
			bookingDateEnds: props.route.params.bookingDateEnds,
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
			freeRooms={freeRooms}
		/>
	)
}
