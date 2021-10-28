import React from 'react'
import { Text, View, Button, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import { styles } from './style'

export const UnLoggedBookView = (props) => {
	return (
		<View style={styles.UnLoggedBookContainer}>
			<View style={styles.UnLoggedInsideBookContainer}>
				<View>
					<Text style={styles.bookArticle}>Avaliable hotels</Text>
				</View>
				<View>
					<Text style={styles.numberOfHotel}>Cat Hotel №1</Text>
				</View>
				<View style={styles.hotelStreetContainer}>
					<View style={styles.hotelStreet}>
						<Icon name={'map-marker-alt'} size={13} color={'black'} />
						<Text style={styles.cityOfHotel}>Minsk</Text>
					</View>
					<Text style={styles.cityOfHotel}>K. Marksa str. bld 8</Text>
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
			</View>
			{/* <Button onPress={() => props.StartBookProcess()} title="next" /> */}
		</View>
	)
}
