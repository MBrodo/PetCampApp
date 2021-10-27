import React from 'react'
import { Text, View, Button } from 'react-native'

export const UnLoggedBookView = (props) => {
	return (
		<View>
			<Text>UnLoggedBookView</Text>
			<Button onPress={() => props.StartBookProcess()} title="next" />
		</View>
	)
}
