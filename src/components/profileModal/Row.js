import React, { ComponentProps } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { styles } from './style'

const Row = ({ label, onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={() => onPress()}>
			<View style={styles.container}>
				<Text style={styles.label}>{label}</Text>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default Row
