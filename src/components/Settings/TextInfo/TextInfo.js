import React from 'react'
import { View, Text } from 'react-native'

import { styles } from '../style'

export const TextInfoUser = (props) => {
	return (
		<View style={styles.valueContainer}>
			<Text style={styles.text}>{props.name}</Text>
			<Text style={styles.text}>{props.middlename}</Text>
			<Text style={styles.text}>{props.surname}</Text>
			<Text style={styles.text}>{props.email}</Text>
			<Text style={styles.text}>{props.city}</Text>
			<Text style={styles.text}>{props.street}</Text>
			<Text style={styles.text}>{props.phone}</Text>
		</View>
	)
}
