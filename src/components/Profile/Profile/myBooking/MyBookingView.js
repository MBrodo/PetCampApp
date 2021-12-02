import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from '../../style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { Loader } from '../../../../common/Loader/Loader'
import { ProfileRowInfo } from '../../../../common/petInfo/ProfileRowInfo'
import { EmptyContent } from '../../../../common/petInfo/EmptyContent'

export const MyBookingView = (props) => {
	const bookingsCheck = () => {
		return props.bookingList.length === 0 ? (
			<EmptyContent text={'bookings'} />
		) : (
			<View style={styles.containerMain}>
				{props.bookingList.map((item) => bookingsList(item))}
			</View>
		)
	}
	const bookingsList = (item) => (
		<View key={item.id} style={styles.containerElement}>
			<View style={styles.elementMain}>
				<View style={styles.elementFloorAlt}>
					<ProfileRowInfo item={item.name} title={'Pet'} />
					<ProfileRowInfo item={item.street} title={'Adderss'} />
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
	)

	return (
		<View style={styles.container}>
			<View style={styles.containerHeader}>
				<Text style={styles.containerTitle}>My booking</Text>
				<Pressable onPress={() => props.goToBookList()} style={styles.containerLink}>
					<Text style={styles.containerLinkText}>See more</Text>
					<Icon style={styles.containerLinkIcon} name="arrow-right" size={15} />
				</Pressable>
			</View>

			{props.isLoading ? Loader() : bookingsCheck()}
		</View>
	)
}
