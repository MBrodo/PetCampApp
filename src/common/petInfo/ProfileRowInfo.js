import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'

export const ProfileRowInfo = (props) => {
	return (
		<View style={styles.elementInfo}>
			<Text style={styles.elementVetPass}>{props.title}</Text>
			<Text style={styles.elementText}>{props.item}</Text>
		</View>
	)
}
