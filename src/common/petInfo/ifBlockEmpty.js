import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'

export const IfBlockEmpty = (props) => {
	return (
		<View style={styles.ifEmptyBlock}>
			<Text style={styles.alternativeText}>No {props.text} yet</Text>
		</View>
	)
}
