import React from 'react'
import { styles } from './style'
import CheckBox from '@react-native-community/checkbox'

export const CheckBoxView = (props) => {
	return (
		<CheckBox
			style={styles.checkBox}
			disabled={false}
			value={props.toggleCheckBox}
			onValueChange={() => props.checkState()}
		/>
	)
}
