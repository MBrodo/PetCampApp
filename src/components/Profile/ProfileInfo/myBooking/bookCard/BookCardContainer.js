import React, { useState, useEffect } from 'react'

import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { BookCardView } from './BookCardView'

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

	return (
		<BookCardView
			checkImage={props.checkImage}
			item={props.item}
			reanimatedStyle={reanimatedStyle}
			progress={progress}
			showBookInfo={showBookInfo}
			setShowBookInfo={setShowBookInfo}
		/>
	)
}
