import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import sendBookController from '../../../../../controllers/authorization/sendBookController'
import { PayCardView } from './PayCardView'

export const PayCardContainer = (props) => {
	const userId = useSelector((state) => state.user.id)
	const bookingStart = useSelector((state) => state.booking.startBooking)
	const bookingEnds = useSelector((state) => state.booking.endBooking)
	const SendBook = () => {
		sendBookController(
			userId,
			props.route.params.pet,
			props.route.params.campID,
			bookingStart,
			bookingEnds,
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
	const goToCongrats = () => {
		navigation.navigate('Congrats')
		SendBook()
	}
	return <PayCardView goToCongrats={goToCongrats} />
}
