import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from '../../style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { ActivityIndicator } from 'react-native'
import { ProfileRowInfoLarge } from '../../../../common/petInfo/ProfileRowInfoLarge'

export const MyBookingView = (props) => {
	const bookingsCheck = () => {
		return props.isLoading ? (
			<View style={styles.preloader}>
				<ActivityIndicator size="large" color="#5D5FEF" />
			</View>
		) : props.bookingList.length === 0 ? (
			<Text style={styles.alternativeText}>You dont have any bookings yet</Text>
		) : (
			props.bookingList.map((item) => (
				<View key={item.id} style={styles.containerMain}>
					<View style={styles.containerElement}>
						<View style={styles.elementMain}>
							<View style={styles.elementFloorAlt}>
								<ProfileRowInfoLarge item={item.name} title={'Pet'} />
								<ProfileRowInfoLarge item={item.street} title={'Adderss'} />
							</View>
							<View style={styles.elementFloorAlt}>
								<View style={styles.elementInfoDate}>
									<Text>Date</Text>
									<Text style={styles.elementText}>
										{item.booking_start.substring(10, 0)} - {item.booking_end.substring(10, 0)}
									</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			))
		)
	}
	return (
		<View style={styles.container}>
			<View style={styles.containerHeader}>
				<Text style={styles.containerTitle}>My booking</Text>
				<Pressable onPress={() => props.goToBookList()} style={styles.containerLink}>
					<Text style={styles.containerLinkText}>See more</Text>
					<Icon style={styles.containerLinkIcon} name="arrow-right" size={15} />
				</Pressable>
			</View>
			<View>{bookingsCheck()}</View>
		</View>
	)
}
