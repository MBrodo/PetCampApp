import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'

import { styles, pickerSelectStyles } from './styles'

import { CheckBox } from 'react-native-elements'

import RNPickerSelect from 'react-native-picker-select'

export const Header = (props) => {
	const checkState = () => {
		props.setDog(props.dog == false ? true : false)
		props.setCat(props.cat == false ? true : false)
	}

	return (
		<View>
			<View>
				<Text style={styles.bookArticle}>Book</Text>
			</View>

			<View style={styles.checkBoxContainer}>
				<CheckBox
					center
					title="Dog"
					checked={props.dog}
					onPress={() => {
						checkState()
					}}
					checkedColor="#4fa09285"
					containerStyle={styles.checkBox}
					textStyle={styles.checkBoxTextStyle}
					fontFamily="Bahianita-Regular"
				/>
				<CheckBox
					center
					title="Cat"
					checked={props.cat}
					onPress={() => {
						checkState()
					}}
					checkedColor="#4fa09285"
					containerStyle={styles.checkBox}
					textStyle={styles.checkBoxTextStyle}
				/>
				<View style={styles.headerQuantityContainer}>
					<View style={styles.headerQuantityInputContainer}>
						<RNPickerSelect
							placeholder={{}}
							style={pickerSelectStyles}
							useNativeAndroidPickerStyle={false}
							onValueChange={(value) => props.setQuantity(value)}
							fixAndroidTouchableBug={true}
							items={[
								{ label: '1', value: 1, inputLabel: '1' },
								{ label: '2', value: 2, inputLabel: '2' },
								{ label: '3', value: 3, inputLabel: '3' },
								{ label: '4', value: 4, inputLabel: '4' },
								{ label: '5', value: 5, inputLabel: '5' },
								{ label: '6', value: 6, inputLabel: '6' },
								{ label: '7', value: 7, inputLabel: '7' },
								{ label: '8', value: 8, inputLabel: '8' },
								{ label: '9', value: 9, inputLabel: '9' },
								{ label: '10', value: 10, inputLabel: '10' },
							]}
						/>
					</View>
					<Text style={styles.headerQuantityText}>Quantity</Text>
				</View>
			</View>
		</View>
	)
}
