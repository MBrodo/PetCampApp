import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../Home/styles'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import { useNavigation } from '@react-navigation/native'

export const HeaderNavigation = ({ Home }) => {
	const navigation = useNavigation()

	return (
		<View style={styles.headerBlock}>
			<View style={styles.headerArticleContainer}>
				<Text
					style={styles.headerArticle}
					onPress={() => {
						navigation.navigate(Home)
					}}
				>
					Pet Camp
				</Text>
			</View>

			<View style={styles.headerInfo}>
				<Icon name="phone-square-alt" size={20} />
				<Text style={styles.headerPhoneNumber}>+375 29 111111</Text>
			</View>
		</View>
	)
}
