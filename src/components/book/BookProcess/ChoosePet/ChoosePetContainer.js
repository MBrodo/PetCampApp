import React, { useState } from 'react'

import { ChoosePetView } from './ChoosePetView'
import { Text, View, Image } from 'react-native'
import { styles } from './style'
import { CheckBox } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export const ChoosePetContainer = () => {
	const myPets = [
		{ type: 'Cat', name: 'Felix', age: 10, img: require('../../../../img/myPet.png'), key: 1 },
		{ type: 'Cat', name: 'Richard', age: 6, img: require('../../../../img/myPet.png'), key: 2 },
	]

	const myPetBlock = (item) => {
		console.log(item.img)
		return (
			<View key={item.key} style={styles.myPetContainer}>
				<View>
					<Image source={item.img} />
				</View>
				<View style={styles.myPetOptionsContainer}>
					<View style={styles.myPetOptions}>
						<View>
							<Text style={styles.optionArticle}>Cat/Dog</Text>
							<Text style={styles.optionName}>{item.type}</Text>
						</View>
						<View>
							<Text style={styles.optionArticle}>Name</Text>
							<Text style={styles.optionName}>{item.name}</Text>
						</View>
						<View>
							<Text style={styles.optionArticle}>Age</Text>
							<Text style={styles.optionName}>{item.age} years</Text>
						</View>
					</View>
					<View style={styles.genderOptionsContainer}>
						<View>
							<Text style={styles.optionArticle}>Gender</Text>
							<Text style={styles.optionName}>m</Text>
						</View>
						<View style={styles.checkBoxOptions}>
							<CheckBox />
						</View>
					</View>
				</View>
			</View>
		)
	}

	const navigation = useNavigation()
	const thirdStep = () => {
		navigation.navigate('Payment')
	}

	const [pickPet, setPickPet] = useState(false)
	return <ChoosePetView secondStep={thirdStep} myPetBlock={myPetBlock} myPets={myPets} />
}
