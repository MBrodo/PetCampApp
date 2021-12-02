import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'

export const PriceRowInfo = (props) => {
	return (
		<View style={styles.priceWithTitle}>
			<Text style={styles.title}>{props.title}</Text>
			<View style={styles.priceBlock}>
				<Text style={styles.priceTitle}>PRICE: </Text>
				<Text style={styles.text}>{props.price}</Text>
			</View>
		</View>
	)
}
