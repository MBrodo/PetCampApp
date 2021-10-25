import React, { useState } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'

import { styles } from './styles'
import MapView, { Marker } from 'react-native-maps'

export const MapList = (props) => {
	const [country, setCountry] = useState(false)
	const showHotels = (item) => {
		return (
			<View style={{ marginBottom: 15 }}>
				<View style={{ marginLeft: 15 }}>
					<Text style={item.id === country ? styles.countryActive : styles.countryInactive}>
						{props.cat ? item.street : item.street}
					</Text>
				</View>
			</View>
		)
	}

	const [latitude, setLatitude] = useState(53.88852210035737)
	const [longitude, setLongitude] = useState(27.544550058168248)

	const checkDB = () => {
		return props.cat ? props.cats : props.dogs
	}
	const checkHotels = (item) => {
		if (item.id === country) {
			return showHotels(item)
		}
	}

	return (
		<View>
			<View style={styles.optionsContainer}>
				{props.map ? (
					<MapView
						style={styles.bodyMap}
						initialRegion={{
							latitude: parseFloat(latitude),
							longitude: parseFloat(longitude),
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421,
						}}
					>
						<Marker
							coordinate={{
								latitude: parseFloat(latitude),
								longitude: parseFloat(longitude),
							}}
							title={'Hotel for cats'}
						/>
					</MapView>
				) : (
					<View>
						<FlatList
							style={styles.bodyCountryList}
							data={checkDB()}
							renderItem={({ item }) => (
								<View>
									<TouchableOpacity
										onPress={() => {
											setCountry(item.id)
											setLatitude(item.latitude)
											setLongitude(item.longitude)
										}}
									>
										<Text
											style={item.id === country ? styles.countryActive : styles.countryInactive}
										>
											{item.city}
										</Text>
									</TouchableOpacity>
									{checkHotels(item)}
								</View>
							)}
						/>
					</View>
				)}
			</View>
		</View>
	)
}
