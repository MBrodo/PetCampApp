import React, { useState, useEffect } from 'react'
import { MyBookingListView } from './MyBookingListView'

import { useSelector, useDispatch } from 'react-redux'
import getBookingController from '../../../../controllers/bookList/getBookings'
import { setAllBookings, setBook } from '../../../../redux/slices/bookSlice'
import bookList from '../../../../controllers/authorization/BookListController'

export const MyBookingListContainer = () => {
	const userID = useSelector((state) => state.user.id)
	const bookings = useSelector((state) => state.booking.all)
	const [book] = useState(bookings)
	const userInfo = useSelector((state) => state.user.info.substring(19, 248))

	const dispatch = useDispatch()
	const allBookings = () => {
		getBookingController(userID, userInfo).then((res) => {
			if (res.status === 200) {
				dispatch(setAllBookings(res.data.booking))
			}
		})
	}
	const updateBook = () => {
		bookList(userID, userInfo).then((res) => {
			if (res.status === 200) {
				dispatch(setBook(res.data.bookingsInfo))
			}
		})
	}

	return <MyBookingListView allBookings pets={bookings} updateBook />
}
