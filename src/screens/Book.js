import React, { useState } from 'react'
import { View, ScrollView, FlatList } from 'react-native'

import { styles } from '../components/book/styles'

import { DateContainer } from '../components/book/Date/DateContainer'
import { MapListContainer } from '../components/book/MapList/MapListContainer'
import { MapView } from '../components/book/MapView'
import { Header } from '../components/book/Header'

const HeaderComponent = () => {
	return (
		<View style={styles.bookOutsidecontainer}>
			<View style={styles.bookInsideContainer}>
				<Header />
				<Map />
				<DateContainer />
			</View>
		</View>
	)
}

export const Book = () => {
	return <FlatList ListHeaderComponent={HeaderComponent} />
}
