import React from 'react'
import { View, ScrollView, Text, Pressable } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { BookCardContainer } from './bookCard/BookCardContainer'

export const MyBookingListView = (props) => {
	return (
		<ScrollView style={styles.mainScroll} showsHorizontalScrollIndicator={false}>
			<View style={styles.mainBlock}>
				{props.pets.map((item) => (
					<BookCardContainer checkImage={props.checkImage} item={item} />
				))}
			</View>
		</ScrollView>
	)
}
