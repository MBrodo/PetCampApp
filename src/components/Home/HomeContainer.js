import React from 'react'
import { View, ScrollView } from 'react-native'
import { Gallery } from './Gallery'
import { Header } from './Header'
import { FeedBacks } from './FeedBacks'
import { styles } from './styles'

export const HomeContainer = ({ navigation }) => {
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
