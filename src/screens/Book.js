import React from 'react'
import { View, ScrollView, FlatList } from 'react-native'

import { styles } from '../components/book/styles'

import { DateContainer } from '../components/book/Date'
import { Map } from '../components/book/Map'
import { Header } from '../components/book/Header'

const HeaderComponent = () => {
	const [dog, setDog] = useState(false)
	const [cat, setCat] = useState(false)
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
