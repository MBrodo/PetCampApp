import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'

import { styles, pickerSelectStyles } from './styles'

import { CheckBox } from 'react-native-elements'

import RNPickerSelect from 'react-native-picker-select'

export const Header = (props) => {
	const [Quantity, setQuantity] = useState(false)

	const checkState = () => {
		props.setDog(props.dog == false ? true : false)
		props.setCat(props.cat == false ? true : false)
	}

	const checkQuantityState = () => {
		setQuantity(Quantity == false ? true : false)
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
							onValueChange={(value) => console.log(value)}
							items={[
								{ label: 'One', value: 'One', inputLabel: '1' },
								{ label: 'Two', value: 'Two', inputLabel: '2' },
								{ label: 'Three', value: 'Three', inputLabel: '3' },
								{ label: 'Four', value: 'Four', inputLabel: '4' },
								{ label: 'Five', value: 'Five', inputLabel: '5' },
								{ label: 'Six', value: 'Six', inputLabel: '6' },
								{ label: 'Seven', value: 'Seven', inputLabel: '7' },
								{ label: 'Eight', value: 'Eight', inputLabel: '8' },
								{ label: 'Nine', value: 'Nine', inputLabel: '9' },
								{ label: 'Ten', value: 'Ten', inputLabel: '10' },
							]}
						/>
						{/* <TextInput style={styles.headerQuantityInput} keyboardType={'numeric'} /> */}
					</View>
				</View>
			</View>
		</View>
	)
}
