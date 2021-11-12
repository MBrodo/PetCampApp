import React from 'react'
import { View, ScrollView, Text, Pressable } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

export const MyBookingListView = (props) => {
	return (
		<ScrollView style={styles.mainScroll} showsHorizontalScrollIndicator={false}>
			<View style={styles.mainBlock}>{props.pets.map((item) => props.petsCards(item))}</View>
		</ScrollView>
	)
}
