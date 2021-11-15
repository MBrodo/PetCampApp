import React, { useEffect } from 'react'
import bookList from '../../../../controllers/authorization/BookListController'
import { useSelector, useDispatch } from 'react-redux'
import { setBook } from '../../../../redux/slices/bookSlice'
import { MyBookingView } from './MyBookingView'
import { useNavigation } from '@react-navigation/core'

export const MyBookingContainer = () => {
	const bookingList = useSelector((state) => state.booking.bookingList)
	const dispatch = useDispatch()
	const userID = useSelector((state) => state.user.id)

	const navigation = useNavigation()
	const goToBookList = () => {
		navigation.navigate('MyBookingContainer')
	}

	useEffect(() => {
		bookList(userID).then((res) => {
			if (res.status === 200) {
				dispatch(setBook(res.data.bookingsInfo))
			} else {
				console.log('Some trouble with server!')
			}
		})
	}, [bookingList])

	return <MyBookingView goToBookList={goToBookList} bookingList={bookingList} />
}
