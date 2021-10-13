import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'

import { styles } from './styles'

import { CheckBox } from 'react-native-elements'

export const Header = () => {
	const [dog, setDog] = useState(false)
	const [cat, setCat] = useState(false)
	const [Quantity, setQuantity] = useState(false)

	const checkDogState = () => {
		setDog(dog == false ? true : false)
	}
	const checkCatState = () => {
		setCat(cat == false ? true : false)
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
					iconRight
					checked={dog}
					onPress={() => {
						checkDogState()
					}}
					checkedColor="#4fa09285"
					containerStyle={styles.checkBox}
					textStyle={styles.checkBoxTextStyle}
					fontFamily="Bahianita-Regular"
				/>
				<CheckBox
					center
					title="Cat"
					iconRight
					checked={cat}
					onPress={() => {
						checkCatState()
					}}
					checkedColor="#4fa09285"
					containerStyle={styles.checkBox}
					textStyle={styles.checkBoxTextStyle}
				/>
				<View style={styles.headerQuantityContainer}>
					<Text style={styles.headerQuantityText}>Quantity</Text>
					<View style={styles.headerQuantityInputContainer}>
						<TextInput style={styles.headerQuantityInput} />
					</View>
				</View>
			</View>
		</View>
	)
}
