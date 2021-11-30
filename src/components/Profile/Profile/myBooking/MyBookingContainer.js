import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MyBookingView } from './MyBookingView'
import { useNavigation } from '@react-navigation/core'
import getBookingController from '../../../../controllers/bookList/getBookings'
import { setAllBookings, setBook } from '../../../../redux/slices/bookSlice'
import bookList from '../../../../controllers/authorization/BookListController'

export const MyBookingContainer = () => {
	const bookingList = useSelector((state) => state.booking.bookingList)
	const userID = useSelector((state) => state.user.id)
	const [isLoading, setLoading] = useState(false)
	const dispatch = useDispatch()
	const allBookings = () => {
		getBookingController(userID).then((res) => {
			if (res.status === 200) {
				dispatch(setAllBookings(res.data.booking))
			}
		})
	}
	useEffect(() => {
		bookList(userID).then((res) => {
			if (res.status === 200) {
				setLoading(true)
				dispatch(setBook(res.data.bookingsInfo))
			}
		})
	})

	const navigation = useNavigation()
	const goToBookList = () => {
		navigation.navigate('MyBookingContainer')
		allBookings()
	}

	return (
		<MyBookingView isLoading={isLoading} goToBookList={goToBookList} bookingList={bookingList} />
	)
}
