import React from 'react'
import { Text } from 'react-native'
import { styles } from './style'

export const OptionDescription = (props) => {
	return (
		<Text style={styles.optionDescription}>
			Games and delicacies: {props.gamesTime} hours of games, socialization, and additional training
			or up to {props.gamesAmount} minutes of one-on-one games.
		</Text>
	)
}
