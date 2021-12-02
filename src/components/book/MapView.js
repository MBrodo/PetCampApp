import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { checkPage } from '../../redux/slices/bookSlice'
import { styles } from './styles'

export const MapView = () => {
	const dispatch = useDispatch()
	const map = useSelector((state) => state.booking.checkPage)
	const switchOptions = () => {
		dispatch(checkPage(!map))
	}
	return (
		<View>
			<View>
				<Text style={styles.bookSelectArticle}>Select a camp</Text>
			</View>

			<View style={styles.bodyContainer}>
				<TouchableOpacity
					style={map ? styles.bodyButtonInactive : styles.bodyButtonActive}
					onPress={() => {
						switchOptions()
					}}
				>
					<Text style={map ? styles.bodyTextInactive : styles.bodyTextActive}>LIST</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={map ? styles.bodyButtonActive : styles.bodyButtonInactive}
					onPress={() => {
						switchOptions()
					}}
				>
					<Text style={map ? styles.bodyTextActive : styles.bodyTextInactive}>MAP</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
