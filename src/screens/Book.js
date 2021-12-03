import React, { useState } from 'react'
import { View, VirtualizedList } from 'react-native'

import { styles } from '../components/book/styles'

import { DateContainer } from '../components/book/Date/DateContainer'
import { MapListContainer } from '../components/book/MapList/MapListContainer'
import { MapView } from '../components/book/MapView'
import { Header } from '../components/book/Header'

export const Book = (props) => {
	const [dog, setDog] = useState(true)
	const [cat, setCat] = useState(false)
	const book = () => (
		<View style={styles.bookOutsidecontainer}>
			<View style={styles.bookInsideContainer}>
				<Header dog={dog} setDog={setDog} cat={cat} setCat={setCat} />
				<MapView />
				<MapListContainer cat={cat} dog={dog} />
				<DateContainer
					setEndDate={props.setEndDate}
					setStartDate={props.setStartDate}
					dateText={props.dateText}
					setDateText={props.setDateText}
					dateTextEnd={props.dateTextEnd}
					setDateTextEnd={props.setDateTextEnd}
				/>
			</View>
		</View>
	)
	const getItemCount = () => 1
	const getItem = () => ({
		id: Math.random().toString(12).substring(0),
	})
	return (
		<VirtualizedList data={[]} getItemCount={getItemCount} getItem={getItem} renderItem={book} />
	)
}
