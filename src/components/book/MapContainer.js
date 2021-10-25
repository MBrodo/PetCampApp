import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { styles } from './styles'
import { MapList } from './MapList'

export const Map = (props) => {
	const [list, setList] = useState(true)
	const [map, setMap] = useState(false)

	const switchOptions = () => {
		setList(list ? false : true)
		setMap(map ? false : true)
	}

	return (
		<View>
			<View>
				<Text style={styles.bookSelectArticle}>Select a camp</Text>
			</View>

			<View style={styles.bodyContainer}>
				<TouchableOpacity
					style={list ? styles.bodyButtonActive : styles.bodyButtonInactive}
					onPress={() => {
						switchOptions()
					}}
				>
					<Text style={list ? styles.bodyTextActive : styles.bodyTextInactive}>Список</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={map ? styles.bodyButtonActive : styles.bodyButtonInactive}
					onPress={() => {
						switchOptions()
					}}
				>
					<Text style={map ? styles.bodyTextActive : styles.bodyTextInactive}>Карта</Text>
				</TouchableOpacity>
			</View>

			<MapList cats={props.cats} dogs={props.dogs} cat={props.cat} dog={props.dog} map={map} />
		</View>
	)
}
