import React from 'react'
import { View, ScrollView } from 'react-native'

import { styles } from '../components/Home/styles'

import { Gallery } from '../components/Home/Gallery'
import { Header } from '../components/Home/Header'
import { FeedBacks } from '../components/Home/FeedBacks'

export const Home = ({ navigation }) => {
	return (
		<ScrollView>
			<View style={styles.outsideHeaderContainer}>
				<View style={styles.aboutUsContainer}>
					<Header />
					<Gallery />
					<FeedBacks navigation={navigation} />
				</View>
			</View>
		</ScrollView>
	)
}
