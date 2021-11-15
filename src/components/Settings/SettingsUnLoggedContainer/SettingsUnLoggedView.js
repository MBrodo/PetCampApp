import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from './style'

export const SettingsUnLoggedView = (props) => {
	return (
		<View style={styles.UnLoggedSettingsContainer}>
			<View style={styles.UnLoggedInsideSettingsContainer}>
				<Text style={styles.UnLoggedArticle}>You need to sign up before entering settings</Text>
				<Pressable onPress={() => props.SettingsLogIn()}>
					<Text style={styles.UnLoggedText}>Go to LogIn page to sign up or log in</Text>
				</Pressable>
			</View>
		</View>
	)
}
