import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

export const BookingFooter = () => {
	return (
		<View style={styles.footerContainer}>
			<View style={styles.iconContainer}>
				<Icon name={'info-circle'} size={10} color={'black'} />
			</View>
			<View style={styles.footerContainerInside}>
				<Text style={styles.footerText}>For more details go to</Text>
				<Text style={styles.footerFocusText}>Client Agreement</Text>
				<Text style={styles.footerText}>and</Text>
				<Text style={styles.footerFocusText}>Pricing&Conditions</Text>
			</View>
		</View>
	)
}
