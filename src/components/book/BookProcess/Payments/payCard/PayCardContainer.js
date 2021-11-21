import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import sendBookController from '../../../../../controllers/authorization/sendBookController'
import getBookingController from '../../../../../controllers/bookList/getBookings'
import bookList from '../../../../../controllers/authorization/BookListController'
import { setBook, setAllBookings } from '../../../../../redux/slices/bookSlice'
import { PayCardView } from './PayCardView'
import { clearPickRooms } from '../../../../../redux/slices/petCampsSlise'

export const PayCardContainer = (props) => {
	const userId = useSelector((state) => state.user.id)
	const bookingStart = useSelector((state) => state.booking.startDate)
	const bookingEnds = useSelector((state) => state.booking.endDate)
	const selectedPet = useSelector((state) => state.pets.selected)
	const updateRooms = useSelector((state) => state.camps.pickRooms)
	const dispatch = useDispatch()

	const allBookings = () => {
		getBookingController(userId).then((res) => {
			if (res.status === 200) {
				dispatch(setAllBookings(res.data.booking))
			}
		})
	}

	const updateBookings = () => {
		bookList(userId).then((res) => {
			if (res.status === 200) {
				dispatch(setBook(res.data.bookingsInfo))
			}
		})
	}
	const clearRooms = () => {
		dispatch(clearPickRooms([]))
	}

	const navigation = useNavigation()
	const goToCongrats = () => {
		navigation.navigate('Congrats')
		SendBook()
		clearRooms()
		allBookings()
		updateBookings()
	}

	const SendBook = () => {
		sendBookController(
			userId,
			selectedPet,
			props.route.params.campID,
			bookingStart,
			bookingEnds,
			true,
			updateRooms,
			userInfo
		).then((res) => {
			if (res.status === 200) {
				console.log('success')
			} else if (res.status === 401 || res.status === 400) {
				console.log('fail')
			}
		})
	}

	return <PayCardView goToCongrats={goToCongrats} />
}
