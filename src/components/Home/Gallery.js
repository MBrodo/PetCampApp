import React, { useState } from 'react'
import { Text, View, Image, ScrollView, Dimensions } from 'react-native'

import { styles } from './styles'
import { images } from './config'

export const Gallery = () => {
	const [text, onChangeText] = useState(1)
	const [scrollIndex, setScrollIndex] = useState(0)

	const { width } = Dimensions.get('window')
	const height = width * 0.45

	const switchImage = (e) => {
		setScrollIndex(parseInt(e / 230))
	}

	return (
		<View>
			<View>
				<View style={styles.galleryArticleContainer}>
					<Text style={styles.galleryArticle}>Gallery</Text>
				</View>
				<View>
					<ScrollView
						style={{ width, height }}
						showsHorizontalScrollIndicator={false}
						persistentScrollbar={true}
						onScroll={(e) => {
							switchImage(e.nativeEvent.contentOffset.x)
							console.log(e.nativeEvent.contentOffset.x)
						}}
						horizontal
					>
						{images.map((image) => (
							<View style={styles.gallaryContainer} key={image.key}>
								<Image
									source={{ uri: image.image }}
									style={{ width: width / 1.5, height, resizeMode: 'contain' }}
								/>
							</View>
						))}
					</ScrollView>

					<View style={styles.scrollImages}>
						{images.map((image, index) => (
							<View
								key={image.key}
								style={index == scrollIndex ? styles.circleActive : styles.circle}
							></View>
						))}
					</View>
				</View>
			</View>
		</View>
	)
}
