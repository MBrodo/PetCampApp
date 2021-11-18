import React, { useState, useEffect } from 'react'
import { MyBookingListView } from './MyBookingListView'

import { useSelector, useDispatch } from 'react-redux'
import getBookingController from '../../../../controllers/bookList/getBookings'
import { setAllBookings } from '../../../../redux/slices/bookSlice'

export const MyBookingListContainer = () => {
	const userID = useSelector((state) => state.user.id)
	const bookings = useSelector((state) => state.booking.all)
	const [book, setBook] = useState(bookings)

	const dispatch = useDispatch()
	useEffect(() => {
		getBookingController(userID).then((res) => {
			if (res.status === 200) {
				console.log('get bookings success')
				dispatch(setAllBookings(res.data.booking))
			} else {
				console.log('Some trouble with server!')
			}
		})
	}, [bookings])

	return <MyBookingListView pets={bookings} />
}
