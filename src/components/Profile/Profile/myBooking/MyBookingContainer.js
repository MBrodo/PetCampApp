import React from 'react'
import { useSelector } from 'react-redux'
import { MyBookingView } from './MyBookingView'
import { useNavigation } from '@react-navigation/core'

export const MyBookingContainer = () => {
	const bookingList = useSelector((state) => state.booking.bookingList)

	const navigation = useNavigation()
	const goToBookList = () => {
		navigation.navigate('MyBookingContainer')
	}

	return <MyBookingView goToBookList={goToBookList} bookingList={bookingList} />
}
