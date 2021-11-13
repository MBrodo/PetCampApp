import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

export const MyBookingView = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.containerHeader}>
				<Text style={styles.containerTitle}>My booking</Text>
				<Pressable onPress={() => props.goToBookList()} style={styles.containerLink}>
					<Text style={styles.containerLinkText}>See more</Text>
					<Icon style={styles.containerLinkIcon} name="arrow-right" size={15} />
				</Pressable>
			</View>
			<View>
				{props.bookingList.map((item) => (
					<View key={item.id} style={styles.containerMain}>
						<View style={styles.containerElement}>
							<View style={styles.elementMain}>
								<View style={styles.elementFloorAlt}>
									<View style={styles.elementInfoAlt}>
										<Text>Pet</Text>
										<Text style={styles.elementText}>{item.name}</Text>
									</View>
									<View style={styles.elementInfoAlt}>
										<Text>Adderss</Text>
										<Text style={styles.elementText}>{item.street}</Text>
									</View>
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
				))}
			</View>
		</View>
	)
}