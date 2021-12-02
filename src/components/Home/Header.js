import React from 'react'
import { Text, View, ImageBackground } from 'react-native'

import { styles } from './styles'

export const Header = () => {
	return (
		<View>
			<View style={styles.headerContainer}>
				<ImageBackground
					source={require('../../img/MainPageBG.png')}
					resizeMode="cover"
					style={styles.imageBackGround}
				></ImageBackground>
			</View>

			<View style={styles.descriptionContainer}>
				<Text style={styles.descriptionArticle}>Why Us</Text>
				<Text style={styles.descriptionText}>
					Welcome to our full-service hotel for dogs and cats featuring 24/7 safety-certified
					associates and an on-call veterinarian. PetsHotel is a great peace-of-mind alternative
					where cats can rest easy in comfortable quarters and dogs can enjoy playtime, salon
					services, training classes, and more!
				</Text>
			</View>
		</View>
	)
}
