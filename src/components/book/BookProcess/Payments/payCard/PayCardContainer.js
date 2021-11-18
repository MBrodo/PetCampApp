import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import sendBookController from '../../../../../controllers/authorization/sendBookController'
import getBookingController from '../../../../../controllers/bookList/getBookings'
import bookList from '../../../../../controllers/authorization/BookListController'
import { setBook, setAllBookings } from '../../../../../redux/slices/bookSlice'
import { PayCardView } from './PayCardView'

export const PayCardContainer = (props) => {
	const userId = useSelector((state) => state.user.id)
	const bookingStart = useSelector((state) => state.booking.startDate)
	const bookingEnds = useSelector((state) => state.booking.endDate)
	const selectedPet = useSelector((state) => state.pets.selected)
	const dispatch = useDispatch()

	const allBookings = () => {
		getBookingController(userId).then((res) => {
			if (res.status === 200) {
				console.log('get bookings success')
				dispatch(setAllBookings(res.data.booking))
			} else {
				console.log('Some trouble with server!')
			}
		})
	}

	const updateBookings = () => {
		bookList(userId).then((res) => {
			if (res.status === 200) {
				dispatch(setBook(res.data.bookingsInfo))
			} else {
				console.log('Some trouble with server!')
			}
		})
	}

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
		updateBookings()
		allBookings()
	}
	return <PayCardView goToCongrats={goToCongrats} />
}
