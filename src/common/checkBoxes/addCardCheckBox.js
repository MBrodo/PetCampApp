import React from 'react'
import { styles } from './style'
import { CheckBoxView } from './checkBox'
import { View, Text } from 'react-native'

export const AddCardCheckBox = (props) => {
	return (
		<View style={styles.pointContainer}>
			<Text>{props.name}</Text>
			<View style={styles.checkboxMainContainer}>
				<View style={styles.checkboxContainer}>
					<CheckBoxView
						firstName={props.firstName}
						secondName={props.secondName}
						checkState={props.checkPetState}
						toggleCheckBox={props.firstCheckBoxItem}
					/>
					<Text style={styles.checkBoxText}>{props.firstCheckBoxName}</Text>
				</View>
				<View style={styles.checkboxContainer}>
					<CheckBoxView
						firstName={props.firstName}
						secondName={props.secondName}
						checkState={props.checkPetState}
						toggleCheckBox={props.secondCheckBoxItem}
					/>
					<Text style={styles.checkBoxText}>{props.SecondCheckBoxName}</Text>
				</View>
			</View>
		</View>
	)
}
