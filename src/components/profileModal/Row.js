import React, { ComponentProps } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { styles } from './style'

const Row = ({ label, icon }) => {
	return (
		<TouchableWithoutFeedback onPress={() => Alert.alert(label)}>
			<View style={styles.container}>
				<Text style={styles.label}>{label}</Text>
				<Icon name={icon} color="white" size={24} />
			</View>
		</TouchableWithoutFeedback>
	)
}

export default Row
