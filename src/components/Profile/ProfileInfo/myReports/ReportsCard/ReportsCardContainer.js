import React, { useState } from 'react'
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { ReportsCardView } from './ReportsCardView'

export const ReportsCardContainer = (props) => {
	const [showReportInfo, setShowReportInfo] = useState(false)
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

	return (
		<ReportsCardView
			checkImage={props.checkImage}
			item={props.item}
			reanimatedStyle={reanimatedStyle}
			progress={progress}
			showReportInfo={showReportInfo}
			setShowReportInfo={setShowReportInfo}
		/>
	)
}
