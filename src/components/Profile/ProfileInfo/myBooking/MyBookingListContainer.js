import React, { useContext } from 'react'
import { MyBookingListView } from './MyBookingListView'

import { useSelector, useDispatch } from 'react-redux'
import getBookingController from '../../../../controllers/bookList/getBookings'
import { setAllBookings, setBook } from '../../../../redux/slices/bookSlice'
import bookList from '../../../../controllers/authorization/BookListController'
import { Context } from '../../../../context'

export const MyBookingListContainer = () => {
	const userID = useSelector((state) => state.user.id)
	const bookings = useSelector((state) => state.booking.all)
	const token = useContext(Context)

	const dispatch = useDispatch()
	const allBookings = () => {
		getBookingController(userID, token).then((res) => {
			if (res.status === 200) {
				dispatch(setAllBookings(res.data.booking))
			} else {
				console.log('fail booking1')
			}
		})
	}
	const updateBook = () => {
		bookList(userID, token).then((res) => {
			if (res.status === 200) {
				dispatch(setBook(res.data.bookingsInfo))
			} else {
				console.log('fail booking2')
			}
		})
	}

	return <MyBookingListView allBookings={allBookings} pets={bookings} updateBook={updateBook} />
}
