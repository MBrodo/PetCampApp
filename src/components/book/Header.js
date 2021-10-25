import React, { useState, useMemo } from 'react'
import { Text, View, TextInput } from 'react-native'

import { styles } from './styles'

import { CheckBox } from 'react-native-elements'

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
						<TextInput style={styles.headerQuantityInput} />
					</View>
					<Text style={styles.headerQuantityText}>Quantity</Text>
				</View>
			</View>
		</View>
	)
}
