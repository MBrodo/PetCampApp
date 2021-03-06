import React, { useState } from 'react'
import { View } from 'react-native'

import { styles } from '../components/book/styles'

import { DateContainer } from '../components/book/Date/DateContainer'
import { MapListContainer } from '../components/book/MapList/MapListContainer'
import { MapView } from '../components/book/MapView'
import { Header } from '../components/book/Header'

export const Book = (props) => {
	const [map, setMap] = useState(false)
	const [dog, setDog] = useState(true)
	const [cat, setCat] = useState(false)
	return (
		<View style={styles.bookOutsidecontainer}>
			<View style={styles.bookInsideContainer}>
				<Header dog={dog} setDog={setDog} cat={cat} setCat={setCat} />
				<MapView map={map} setMap={setMap} />
				<MapListContainer cat={cat} dog={dog} map={map} setMap={setMap} />
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
}
