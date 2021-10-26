import React from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'

import { styles } from '../styles'
import MapView, { Marker } from 'react-native-maps'

export const MapListComponent = (props) => {
	console.log(props.map)
	return (
		<View>
			<View style={styles.optionsContainer}>
				{props.map ? (
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
				) : (
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
										}}
									>
										<Text
											style={
												item.id === props.country ? styles.countryActive : styles.countryInactive
											}
										>
											{item.city}
										</Text>
									</TouchableOpacity>
									{props.checkHotels(item)}
								</View>
							)}
						/>
					</View>
				)}
			</View>
		</View>
	)
}
