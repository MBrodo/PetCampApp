import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { styles } from './style'
import MapView, { Marker } from 'react-native-maps'

export const ContactsView = (props) => {
	const HotelInfo = (item) => (
		<View>
			<View style={styles.cityContainer}>
				<Icon style={styles.geolocationIcon} name={'map-marker-alt'} size={18} />
				<Text style={styles.text}>{item.el.city}</Text>
			</View>
			<View style={styles.hotelInfoContainer}>
				<Text style={styles.text}>{item.el.street}</Text>
				<Text style={styles.text}>tel.+375331111111</Text>
			</View>
		</View>
	)

	return (
		<ScrollView>
			<View style={styles.wrapper}>
				<Text style={styles.screenTitle}>Contacts</Text>
				<>
					<Text style={styles.categoryTitle}>For cats</Text>
					{props.cats.map((item) => (
						<HotelInfo key={item.id} el={item} />
					))}
				</>

				<>
					<Text style={styles.categoryTitle}>For dogs</Text>
					{props.dogs.map((item) => (
						<HotelInfo key={item.id} el={item} />
					))}
				</>
				<MapView
					style={styles.bodyMap}
					initialRegion={{
						latitude: 53.85252660044951,
						longitude: 27.465820312500004,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
				>
					{props.camps.map((item) => (
						<Marker
							key={item.id}
							coordinate={{
								latitude: parseFloat(item.latitude),
								longitude: parseFloat(item.longitude),
							}}
							title={'Hotel for cats'}
						/>
					))}
				</MapView>
				<View style={styles.appInfoContainer}>
					<Text style={styles.categoryTitle}>“Pet Camp” </Text>
					<Text style={styles.appText}>A hotel chain for cats and dogs</Text>
					<Text style={styles.appText}>
						222222, Nezavisimosty avenue, bld.140, room20 tel.+375294444444
					</Text>
					<Text style={[styles.appText, styles.rigths]}>2020-2022 All rights reserved</Text>
				</View>
			</View>
		</ScrollView>
	)
}
