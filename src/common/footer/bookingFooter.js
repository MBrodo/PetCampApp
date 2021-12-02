import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

export const BookingFooter = () => {
	const navigation = useNavigation()
	return (
		<View style={styles.footerContainer}>
			<View style={styles.iconContainer}>
				<Icon name={'info-circle'} size={10} color={'black'} />
			</View>
			<View style={styles.footerContainerInside}>
				<Text style={styles.footerText}>For more details go to</Text>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Agreement')
					}}
				>
					<Text style={styles.footerFocusText}>Client Agreement</Text>
				</TouchableOpacity>
				<Text style={styles.footerText}>and</Text>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('PriceList')
					}}
				>
					<Text style={styles.footerFocusText}>Pricing&Conditions</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
