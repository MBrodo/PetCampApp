import React, { useState } from 'react'
import { Text, View, ImageBackground, Image, ScrollView, Dimensions } from 'react-native'

import { styles } from './styles'
import { images } from './config'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

export const Home = () => {
	const [text, onChangeText] = useState(1)

	// const [scroll, setScroll] = useState(true);

	// const change = () => {}

	const { width } = Dimensions.get('window')
	const height = width * 0.45

	return (
		<ScrollView>
			<View>
				<View style={styles.headerContainer}>
					<ImageBackground
						source={require('../../img/MainPageBG.png')}
						resizeMode="cover"
						style={styles.imageBackGround}
					></ImageBackground>
				</View>

				<View>
					<View style={styles.descriptionContainer}>
						<Text style={styles.descriptionArticle}>Why Us</Text>
						<Text style={styles.descriptionText}>
							LLorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet non quis
							elementum volutpat amet etiam.Lorem ipsum dolor sit amet.
						</Text>
					</View>
				</View>

				<View>
					<View>
						<View style={styles.galleryArticleContainer}>
							<Text style={styles.galleryArticle}>Gallery</Text>
						</View>

						<View>
							<ScrollView
								style={{ width, height }}
								showsHorizontalScrollIndicator={false}
								// persistentScrollbar={true}
								pagingEnabled
								// onScroll={change}
								horizontal
							>
								{images.map((image) => (
									<Image
										source={{ uri: image.image }}
										key={image.key}
										style={{ width, height, resizeMode: 'contain' }}
									/>
								))}
							</ScrollView>

							<View style={styles.scrollImages}>
								{images.map((image) => (
									<View
										key={image.key}
										style={image.key == text ? styles.circleActive : styles.circle}
									></View>
								))}
							</View>
						</View>
					</View>
				</View>

				<View>
					<View style={styles.socialContainer}>
						<Text style={styles.socialArticle}>Follow us on social networks</Text>
						<View style={styles.socialIconsContainer}>
							<Icon name="facebook" size={50} style={styles.socialIconFacebook} />
							<Icon name="instagram" size={50} style={styles.socialIconInstagram} />
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	)
}
