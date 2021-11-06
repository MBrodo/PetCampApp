import React from 'react'
import { Text, View, Button, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import { styles } from './style'
import { BookingFooter } from '../../../../../../common/footer/bookingFooter'

export const UnLoggedBookView = (props) => {
	return (
		<View style={styles.UnLoggedBookContainer}>
			<View style={styles.UnLoggedInsideBookContainer}>
				<View>
					<Text style={styles.bookArticle}>Avaliable hotels</Text>
				</View>
				<View>
					<Text style={styles.numberOfHotel}>{props.information.type} Hotel №1</Text>
				</View>
				<View style={styles.hotelStreetContainer}>
					<View style={styles.hotelStreet}>
						<Icon name={'map-marker-alt'} size={13} color={'black'} />
						<Text style={styles.cityOfHotel}>{props.information.city}</Text>
					</View>
					<Text style={styles.cityOfHotel}>{props.information.street}</Text>
				</View>
				<View>
					<Text style={styles.hotelRooms}>8 standard rooms are avaliable</Text>
				</View>
				<View style={styles.priceBlock}>
					<Text style={styles.hotelPriceArticle}>PRICE:</Text>
					<Text style={styles.hotelPrice}>$ 12 / day</Text>
				</View>
				<View style={styles.getLogInContainer}>
					<Pressable
						onPress={() => props.StartBookProcess()}
						style={styles.getLogInInsideContainer}
					>
						<Text style={styles.getLogInText}>To get proceed with booking Log In please </Text>
					</Pressable>
				</View>
				<BookingFooter />
			</View>
		</View>
	)
}
