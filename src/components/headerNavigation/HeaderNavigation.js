import React from 'react'
import { Text, View, Linking, TouchableOpacity } from 'react-native'
import { styles } from '../Home/styles'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { Home } from '../../screens/Home'

import { useNavigation } from '@react-navigation/native'

export const HeaderNavigation = () => {
	const navigation = useNavigation()

	return (
		<View style={styles.headerBlock}>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('Home')
				}}
				style={styles.headerArticleContainer}
			>
				<Text style={styles.headerArticle}>Pet Camp</Text>
			</TouchableOpacity>

			<View style={styles.headerInfo}>
				<Icon name="phone-square-alt" size={20} />
				<Text
					onPress={() => {
						Linking.openURL('tel:+375 29 111111')
					}}
					style={styles.headerPhoneNumber}
				>
					+375 29 111111
				</Text>
			</View>
		</View>
	)
}
