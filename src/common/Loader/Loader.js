import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { styles } from './style'

export const Loader = () => {
	return (
		<View style={styles.preloader}>
			<ActivityIndicator size="large" color="#5D5FEF" />
		</View>
	)
}
