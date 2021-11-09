import React from 'react'
import { View } from 'react-native'
import { styles } from './style'

export const PetCard = (props) => {
	return <View style={styles.cardContainer}>{props.petInfo(props.item)}</View>
}
