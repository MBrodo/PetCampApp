import React, { useState, useEffect } from 'react'

import { ChoosePetView } from './ChoosePetView'
import { Text, View, Image, Pressable } from 'react-native'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import { BookPetInfo } from '../../../../common/petInfo/BookPetInfo'

import { useSelector } from 'react-redux'

export const ChoosePetContainer = (props) => {
	const [checkChoice, setCheckChoice] = useState(false)
	const [pet, setPet] = useState()
	const myPetBlock = (item) => {
		return (
			<View key={item.id} style={styles.myPetContainer}>
				<View>
					<Image source={require('../../../../img/myPet.png')} />
				</View>
				<View style={styles.myPetOptionsContainer}>
					<View style={styles.myPetOptions}>
						<BookPetInfo title={'Cat/Dog:'} item={item.type} />
						<BookPetInfo title={'Name:'} item={item.name} />
						<BookPetInfo title={'Age:'} item={item.age} />
					</View>
					<View style={styles.genderOptionsContainer}>
						<View>
							<Text style={styles.optionArticle}>Gender</Text>
							<Text style={styles.optionName}>{item.gender}</Text>
						</View>
						<View style={styles.checkBoxOptions}>
							<Pressable
								style={
									item.id === checkChoice ? styles.chooseButtonActive : styles.chooseButtonInactive
								}
								onPress={() => {
									setCheckChoice(item.id)
									setPet(item)
								}}
							>
								<Text style={styles.chooseButtonText}>Choose</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</View>
		)
	}
	const navigation = useNavigation()
	const thirdStep = () => {
		navigation.navigate('Payment', {
			dateTextEnd: props.route.params.dateTextEnd,
			dateText: props.route.params.dateText,
			pet: pet,
			totalPrice: props.route.params.totalPrice,
		})
	}

	const petList = useSelector((state) => state.petsList.petsList)
	console.log(petList)

	return (
		<ChoosePetView
			dateText={props.route.params.dateText}
			dateTextEnd={props.route.params.dateTextEnd}
			pet={pet}
			petList={petList}
			secondStep={thirdStep}
			myPetBlock={myPetBlock}
		/>
	)
}
