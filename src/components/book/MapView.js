import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export const MapView = (props) => {
	const switchOptions = () => {
		props.setMap(props.map ? false : true)
	}
	return (
		<View>
			<View>
				<Text style={styles.bookSelectArticle}>Select a camp</Text>
			</View>

			<View style={styles.bodyContainer}>
				<TouchableOpacity
					style={props.map ? styles.bodyButtonInactive : styles.bodyButtonActive}
					onPress={() => {
						switchOptions()
					}}
				>
					<Text style={props.map ? styles.bodyTextInactive : styles.bodyTextActive}>LIST</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={props.map ? styles.bodyButtonActive : styles.bodyButtonInactive}
					onPress={() => {
						switchOptions()
					}}
				>
					<Text style={props.map ? styles.bodyTextActive : styles.bodyTextInactive}>MAP</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
