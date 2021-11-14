import React, { useState, useEffect } from 'react'

import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { BookCardView } from './BookCardView'
import deleteBook from '../../../../../controllers/bookList/deleteBook'

export const BookCardContainer = (props) => {
	const [showBookInfo, setShowBookInfo] = useState(false)

	const progress = useSharedValue({ width: 300, height: 220 })

	const reanimatedStyle = useAnimatedStyle(() => {
		return {
			width: withTiming(progress.value.width, {
				duration: 1000,
			}),
			height: withTiming(progress.value.height, {
				duration: 600,
			}),
		}
	})

	const deleteBookCard = (id) => {
		deleteBook(id).then((res) => {
			if (res.status === 200) {
				console.log('success')
			} else if (res.status === 401 || res.status === 400) {
				console.log('fail')
			}
		})
	}

	return (
		<BookCardView
			deleteBookCard={deleteBookCard}
			checkImage={props.checkImage}
			item={props.item}
			reanimatedStyle={reanimatedStyle}
			progress={progress}
			showBookInfo={showBookInfo}
			setShowBookInfo={setShowBookInfo}
		/>
	)
}
