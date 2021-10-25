import React, { useState, useMemo } from 'react'
import { Text, View, TextInput } from 'react-native'

import { styles } from './styles'

import { CheckBox } from 'react-native-elements'
import { Map } from './MapContainer'
import mapListController from '../../controllers/authorization/mapListController'

export const Header = () => {
	const [dog, setDog] = useState(true)
	const [cat, setCat] = useState(false)
	const [Quantity, setQuantity] = useState(false)

	const checkState = () => {
		setDog(dog == false ? true : false)
		setCat(cat == false ? true : false)
	}
	const checkQuantityState = () => {
		setQuantity(Quantity == false ? true : false)
	}

	let cats = []
	let dogs = []
	const mapHotelsList = () => {
		return mapListController().then((res) => {
			res.data.petCamps.map((e) => {
				if (e.type === 'CAT') {
					cats.push(e)
				} else if (e.type === 'DOG') {
					dogs.push(e)
				}
			})
		})
	}
	mapHotelsList()
	return (
		<View>
			<View>
				<Text style={styles.bookArticle}>Book</Text>
			</View>

			<View style={styles.checkBoxContainer}>
				<CheckBox
					center
					title="Dog"
					checked={dog}
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
					checked={cat}
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
			<Map cats={cats} dogs={dogs} cat={cat} dog={dog} />
		</View>
	)
}
