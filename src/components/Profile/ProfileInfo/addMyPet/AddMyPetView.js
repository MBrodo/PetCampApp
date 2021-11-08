import React from 'react'
import { View } from 'react-native'
import { styles } from './style'

export const AddMyPetView = (props) => {
	return <View style={styles.mainBlock}>{props.addCard()}</View>
}
