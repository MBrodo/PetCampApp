import React, { useState } from 'react'
import { View, ScrollView, FlatList } from 'react-native'

import { styles } from '../components/book/styles'

import { DateContainer } from '../components/book/Date'
import { MapList } from '../components/book/MapList'
import { Map } from '../components/book/MapContainer'
import { Header } from '../components/book/Header'

const HeaderComponent = () => {
	const [map, setMap] = useState(false)
	const [dog, setDog] = useState(true)
	const [cat, setCat] = useState(false)
	return (
		<View style={styles.bookOutsidecontainer}>
			<View style={styles.bookInsideContainer}>
				<Header dog={dog} setDog={setDog} cat={cat} setCat={setCat} />
				<Map map={map} setMap={setMap} />
				<MapList cat={cat} dog={dog} map={map} setMap={setMap} />
				<DateContainer />
			</View>
		</View>
	)
}

export const Book = () => {
	return <FlatList ListHeaderComponent={HeaderComponent} />
}
