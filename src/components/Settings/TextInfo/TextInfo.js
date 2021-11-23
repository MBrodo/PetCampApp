import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../style'

export const TextInfoUser = (props) => {
	return (
		<View style={styles.valueContainer}>
			<Text style={styles.text}>{props.userInformation.name}</Text>
			<Text style={styles.text}>{props.userInformation.middlename}</Text>
			<Text style={styles.text}>{props.userInformation.surname}</Text>
			<Text style={styles.text}>{props.userInformation.email}</Text>
			<Text style={styles.text}>{props.userInformation.city}</Text>
			<Text style={styles.text}>{props.userInformation.street}</Text>
			<Text style={styles.text}>{props.userInformation.phone}</Text>
		</View>
	)
}
