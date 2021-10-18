import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

export const MyBooking = () => {
	return (
		<View style={styles.container}>
			<View style={styles.containerHeader}>
				<Text style={styles.containerTitle}>My booking</Text>
				<View style={styles.containerLink}>
					<Text style={styles.containerLinkText}>See more</Text>
					<Icon style={styles.containerLinkIcon} name="arrow-right" size={15} />
				</View>
			</View>
			<View style={styles.containerMain}>
				<View style={styles.containerElement}>
					<View style={styles.elementMain}>
						<View style={styles.elementFloorAlt}>
							<View style={styles.elementInfoAlt}>
								<Text>Pet</Text>
								<Text style={styles.elementText}>Milo</Text>
							</View>
							<View style={styles.elementInfoAlt}>
								<Text>Adderss</Text>
								<Text style={styles.elementText}>Minsk...</Text>
							</View>
						</View>
						<View style={styles.elementFloorAlt}>
							<View style={styles.elementInfoDate}>
								<Text>Date</Text>
								<Text style={styles.elementText}>11.09.2021 - 18.09.2021</Text>
							</View>
						</View>
					</View>
				</View>
				<View
					style={{
						borderBottomColor: 'gray',
						borderBottomWidth: 1,
						marginVertical: 8,
					}}
				/>
				<View style={styles.containerElement}>
					<View style={styles.elementMain}>
						<View style={styles.elementFloorAlt}>
							<View style={styles.elementInfoAlt}>
								<Text>Pet</Text>
								<Text style={styles.elementText}>Milo</Text>
							</View>
							<View style={styles.elementInfoAlt}>
								<Text>Address</Text>
								<Text style={styles.elementText}>Minsk...</Text>
							</View>
						</View>
						<View style={styles.elementFloorAlt}>
							<View style={styles.elementInfoDate}>
								<Text>Date</Text>
								<Text style={styles.elementText}>01.10.2021 - 18.10.2021</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	)
}
