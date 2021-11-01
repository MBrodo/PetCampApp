import React, { useState, useEffect } from 'react'

import { ChoosePetView } from './ChoosePetView'
import { Text, View, Image } from 'react-native'
import { styles } from './style'
import { CheckBox } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import { useSelector, useDispatch } from 'react-redux'
import petListController from '../../../../controllers/authorization/petListController'
import { setPets } from '../../../../redux/slices/petListSlice'

export const ChoosePetContainer = (props) => {
	const myPets = [
		{ type: 'Cat', name: 'Felix', age: 10, img: require('../../../../img/myPet.png'), key: 1 },
		{ type: 'Cat', name: 'Richard', age: 6, img: require('../../../../img/myPet.png'), key: 2 },
	]
	console.log(props.route.params.Quantity)
	const myPetBlock = (item) => {
		return (
			<View key={item.id} style={styles.myPetContainer}>
				<View>
					<Image source={require('../../../../img/myPet.png')} />
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
							<Text style={styles.optionName}>{item.gender}</Text>
						</View>
						<View style={styles.checkBoxOptions}>
							<CheckBox
								checked={false}
								onPress={() => {
									return true
								}}
							/>
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

	const petList = useSelector((state) => state.pets.pets)
	const dispatch = useDispatch()

	useEffect(() => {
		petListController().then((res) => {
			if (res.status === 200) {
				dispatch(setPets(res.data.petsInfo))
			} else {
				console.log('Some trouble with server!')
			}
		})
	}, [])

	return (
		<ChoosePetView
			petList={petList}
			secondStep={thirdStep}
			myPetBlock={myPetBlock}
			myPets={myPets}
		/>
	)
}
