import React from 'react'
import { View, TextInput } from 'react-native'
import { styles } from '../style'

export const TextInputUser = (props) => {
	return (
		<View style={styles.valueContainer}>
			<TextInput
				style={styles.textInput}
				value={props.userInformation.name}
				onChangeText={(item) => props.setName(item, 'name')}
			/>
			<TextInput
				style={styles.textInput}
				value={props.userInformation.middlename}
				onChangeText={(item) => props.setName(item, 'middlename')}
			/>
			<TextInput
				style={styles.textInput}
				value={props.userInformation.surname}
				onChangeText={(item) => props.setName(item, 'surname')}
			/>
			<TextInput
				style={styles.textInput}
				value={props.userInformation.email}
				onChangeText={(item) => props.setName(item, 'email')}
			/>
			<TextInput
				style={styles.textInput}
				value={props.userInformation.city}
				onChangeText={(item) => props.setName(item, 'city')}
			/>
			<TextInput
				style={styles.textInput}
				value={props.userInformation.street}
				onChangeText={(item) => props.setName(item, 'street')}
			/>
			<TextInput
				style={styles.textInput}
				value={props.userInformation.phone}
				onChangeText={(item) => props.setName(item, 'phone')}
			/>
		</View>
	)
}
