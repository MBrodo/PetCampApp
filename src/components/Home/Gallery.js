import React, { useState } from 'react'
import { Text, View, Image, ScrollView, Dimensions } from 'react-native'

import { styles } from './styles'
import { images } from './config'

export const Gallery = () => {
	const [text, onChangeText] = useState(1)

	// const [scroll, setScroll] = useState(true);

	// const change = () => {}

	const { width } = Dimensions.get('window')
	const height = width * 0.45

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
	)
}
