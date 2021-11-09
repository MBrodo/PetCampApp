import React from 'react'
import { View, TextInput } from 'react-native'
import { styles } from '../style'

export const TextInputUser = (props) => {
	return (
		<View style={styles.valueContainer}>
			<TextInput style={styles.textInput} value={props.name} onChangeText={props.onChangeName} />
			<TextInput
				style={styles.textInput}
				value={props.midName}
				onChangeText={props.onChangeMidName}
			/>
			<TextInput
				style={styles.textInput}
				value={props.surname}
				onChangeText={props.onChangeSurname}
			/>
			<TextInput style={styles.textInput} value={props.email} onChangeText={props.onChangeEmail} />
			<TextInput style={styles.textInput} value={props.city} onChangeText={props.onChangeCity} />
			<TextInput
				style={styles.textInput}
				value={props.street}
				onChangeText={props.onChangeStreet}
			/>
			<TextInput style={styles.textInput} value={props.phone} onChangeText={props.onChangePhone} />
		</View>
	)
}
