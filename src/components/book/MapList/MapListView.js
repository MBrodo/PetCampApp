import React from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'

import { styles } from '../styles'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'

export const MapListView = (props) => {
	const map = useSelector((state) => state.booking.checkPage)
	const List = () => {
		return (
			<View>
				<MapView
					style={styles.bodyMap}
					initialRegion={{
						latitude: parseFloat(props.latitude),
						longitude: parseFloat(props.longitude),
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
				>
					<Marker
						coordinate={{
							latitude: parseFloat(props.latitude),
							longitude: parseFloat(props.longitude),
						}}
						title={'Hotel for cats'}
					/>
				</MapView>
			</View>
		)
	}

	const Map = () => {
		return (
			<View>
				<FlatList
					style={styles.bodyCountryList}
					data={props.checkDB()}
					renderItem={({ item }) => (
						<View>
							<TouchableOpacity
								onPress={() => {
									props.setCountry(item.id)
									props.setLatitude(item.latitude)
									props.setLongitude(item.longitude)
									props.setInformation(item)
									props.setCampID(item)
								}}
							>
								<Text
									style={item.id === props.country ? styles.countryActive : styles.countryInactive}
								>
									{item.city.toUpperCase()}
								</Text>
							</TouchableOpacity>
							{props.checkHotels(item)}
						</View>
					)}
				/>
			</View>
		)
	}
	return (
		<View>
			<View style={styles.optionsContainer}>{map ? <List /> : <Map />}</View>
		</View>
	)
}
