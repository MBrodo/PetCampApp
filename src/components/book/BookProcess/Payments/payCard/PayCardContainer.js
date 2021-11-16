import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import sendBookController from '../../../../../controllers/authorization/sendBookController'
import { PayCardView } from './PayCardView'

export const PayCardContainer = (props) => {
	const userId = useSelector((state) => state.user.id)
	const bookingStart = useSelector((state) => state.booking.startDate)
	const bookingEnds = useSelector((state) => state.booking.endDate)
	const selectedPet = useSelector((state) => state.pets.selected)

	const SendBook = () => {
		sendBookController(
			userId,
			selectedPet,
			props.route.params.campID,
			bookingStart,
			bookingEnds,
			true,
			[
				{
					id: 'e67978f5-3801-4fb5-bd74-4488a3b71e9d',
					room_number: 7,
				},
			]
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
