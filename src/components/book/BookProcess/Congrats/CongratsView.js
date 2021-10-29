import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'

export const CongratsView = () => {
	return (
		<View style={styles.UnLoggedBookContainer}>
			<View style={styles.UnLoggedInsideBookContainer}>
				<View>
					<Text style={styles.bookArticle}>Congratulations!</Text>
				</View>
				<View style={styles.congratsTextContainer}>
					<Text style={styles.congratsText}>Please check your email </Text>
					<Text style={styles.congratsText}>or</Text>
					<Text style={styles.congratsText}>My profile page</Text>
				</View>
			</View>
		</View>
	)
}
