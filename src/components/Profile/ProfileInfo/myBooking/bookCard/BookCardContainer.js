import React, { useState, useEffect } from 'react'

import { useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated'
import { BookCardView } from './BookCardView'
import deleteBook from '../../../../../controllers/bookList/deleteBook'
import getBookingController from '../../../../../controllers/bookList/getBookings'
import { setAllBookings, setBook } from '../../../../../redux/slices/bookSlice'
import { useDispatch, useSelector } from 'react-redux'
import bookList from '../../../../../controllers/authorization/BookListController'
import EncryptedStorage from 'react-native-encrypted-storage'

export const BookCardContainer = (props) => {
	const [showBookInfo, setShowBookInfo] = useState(false)
	const [successDelete, setSuccessDelete] = useState(false)
	const userID = useSelector((state) => state.user.id)
	const userInfo = useSelector((state) => state.user.info.substring(19, 248))
	const dispatch = useDispatch()
	const progress = useSharedValue({ width: 300, height: 220 })

	const reanimatedStyle = useAnimatedStyle(() => {
		return {
			width: withTiming(progress.value.width, {
				duration: 1000,
			}),
			height: withTiming(progress.value.height, {
				duration: 400,
			}),
		}
	})

	const deleteBooking = useSharedValue(1)

	const deleteAnimation = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: deleteBooking.value }],
		}
	})

	const deleteBookAnimation = () => {
		deleteBooking.value = withSpring(-370)
	}

	const allBookings = () => {
		getBookingController(userID, userInfo).then((res) => {
			if (res.status === 200) {
				dispatch(setAllBookings(res.data.booking))
			}
		})
	}

	const updateBookings = () => {
		bookList(userID, userInfo).then((res) => {
			if (res.status === 200) {
				dispatch(setBook(res.data.bookingsInfo))
			}
		})
	}

	const deleteBookCard = (id) => {
		deleteBook(id, userInfo).then((res) => {
			if (res.status === 200) {
				console.log('delete is success')
			} else if (res.status === 401 || res.status === 400) {
				console.log('fail')
			}
		})
	}
	const [isOpenModal, setOpenModal] = useState(false)
	const chechState = () => {
		setOpenModal((state) => !state)
	}
	const showNotificationModal = () => {
		setOpenModal((state) => !state)
		setSuccessDelete((state) => !state)
	}
	const changeBookState = () => {
		deleteBookCard(props.item.id)
		deleteBookAnimation()
		setSuccessDelete((state) => !state)
		props.updateBook
		props.allBookings
		allBookings()
		updateBookings()
	}

	return (
		<BookCardView
			showNotificationModal={showNotificationModal}
			changeBookState={changeBookState}
			successDelete={successDelete}
			setSuccessDelete={setSuccessDelete}
			isOpenModal={isOpenModal}
			chechState={chechState}
			deleteBookCard={deleteBookCard}
			deleteBookAnimation={deleteBookAnimation}
			deleteBooking={deleteBooking}
			checkImage={props.checkImage}
			item={props.item}
			deleteAnimation={deleteAnimation}
			reanimatedStyle={reanimatedStyle}
			progress={progress}
			showBookInfo={showBookInfo}
			setShowBookInfo={setShowBookInfo}
		/>
	)
}
