import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MyBookingView } from './MyBookingView'
import { useNavigation } from '@react-navigation/core'
import getBookingController from '../../../../controllers/bookList/getBookings'
import { setAllBookings, setBook } from '../../../../redux/slices/bookSlice'
import bookList from '../../../../controllers/authorization/BookListController'

export const MyBookingContainer = () => {
	const bookingList = useSelector((state) => state.booking.bookingList)
	const userID = useSelector((state) => state.user.id)
	const userInfo = useSelector((state) => state.user.info.substring(19, 248))
	const dispatch = useDispatch()
	const allBookings = () => {
		getBookingController(userID, userInfo).then((res) => {
			if (res.status === 200) {
				dispatch(setAllBookings(res.data.booking))
			}
		})
	}
	useEffect(() => {
		bookList(userID, userInfo).then((res) => {
			if (res.status === 200) {
				dispatch(setBook(res.data.bookingsInfo))
			}
		})
	})

	const navigation = useNavigation()
	const goToBookList = () => {
		navigation.navigate('MyBookingContainer')
		allBookings()
	}

	return <MyBookingView goToBookList={goToBookList} bookingList={bookingList} />
}
