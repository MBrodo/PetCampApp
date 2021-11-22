import React from 'react'
import { View, ScrollView } from 'react-native'
import { styles } from './style'
import { BookCardContainer } from './bookCard/BookCardContainer'

export const MyBookingListView = (props, { userID }) => {
	console.log(userID, 'd')
	return (
		<ScrollView style={styles.mainScroll} showsHorizontalScrollIndicator={false}>
			<View style={styles.mainBlock}>
				{props.pets.map((item) => (
					<BookCardContainer
						allBookings={props.allBookings}
						updateBook={props.updateBook}
						key={item.id}
						checkImage={props.checkImage}
						item={item}
					/>
				))}
			</View>
		</ScrollView>
	)
}
