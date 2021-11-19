import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import { useDispatch } from 'react-redux'
import { setPickRooms } from '../../redux/slices/petCampsSlise'

export const BookPetInfo = (props) => {
	const dispatch = useDispatch()
	useEffect(() => {
		props.room == undefined ? console.log('') : dispatch(setPickRooms(props.room))
	}, [])
	return (
		<View style={styles.bookPointContainer}>
			<Text>{props.title}</Text>
			<Text style={styles.bookPointText}>{props.item}</Text>
		</View>
	)
}
