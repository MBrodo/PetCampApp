import React, { useState, useContext } from 'react'

import { useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated'
import { BookCardView } from './BookCardView'
import deleteBook from '../../../../../controllers/bookList/deleteBook'
import disableBook from '../../../../../controllers/bookList/disableBook'
import { Context } from '../../../../../context'

export const BookCardContainer = (props) => {
	const [showBookInfo, setShowBookInfo] = useState(false)
	const [isDisable, setDisable] = useState(false)
	const [successDelete, setSuccessDelete] = useState(false)
	const progress = useSharedValue({ width: 300, height: 220 })
	const token = useContext(Context)

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

	const deleteBookCard = (id) => {
		deleteBook(id, token).then((res) => {
			if (res.status === 200) {
				console.log('delete is success')
			} else if (res.status === 401 || res.status === 400) {
				console.log('fail')
			}
		})
	}
	const disableBookCard = (id) => {
		disableBook(id, token).then((res) => {
			if (res.status === 200) {
				setDisable((state) => !state)
				console.log('disable is success')
			} else if (res.status === 401 || res.status === 400) {
				console.log('fail')
			}
		})
	}
	const [isOpenModal, setOpenModal] = useState(false)
	const deleteBooking = () => {
		deleteBookCard(props.item.id)
		props.allBookings()
	}

	const checkState = () => {
		setOpenModal((state) => !state)
	}
	const showNotificationModal = () => {
		setOpenModal((state) => !state)
		setSuccessDelete((state) => !state)
	}
	const changeBookState = (id) => {
		disableBookCard(id)
		setSuccessDelete((state) => !state)
		props.updateBook()
		props.allBookings()
	}

	return (
		<BookCardView
			deleteBooking={deleteBooking}
			isDisable={isDisable}
			showNotificationModal={showNotificationModal}
			changeBookState={changeBookState}
			successDelete={successDelete}
			isOpenModal={isOpenModal}
			checkState={checkState}
			checkImage={props.checkImage}
			item={props.item}
			reanimatedStyle={reanimatedStyle}
			progress={progress}
			showBookInfo={showBookInfo}
			setShowBookInfo={setShowBookInfo}
		/>
	)
}
