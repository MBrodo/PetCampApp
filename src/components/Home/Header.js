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
					LLorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet non quis
					elementum volutpat amet etiam.Lorem ipsum dolor sit amet.
				</Text>
			</View>
		</View>
	)
}
