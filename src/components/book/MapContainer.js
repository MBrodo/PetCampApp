import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export const Map = (props) => {
	const [list, setList] = useState(true)

	const switchOptions = () => {
		setList(list ? false : true)
		props.setMap(props.map ? false : true)
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
					style={props.map ? styles.bodyButtonActive : styles.bodyButtonInactive}
					onPress={() => {
						switchOptions()
					}}
				>
					<Text style={props.map ? styles.bodyTextActive : styles.bodyTextInactive}>Карта</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
