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
	const addPet = () => {
		navigation.navigate('AddMyPet')
	}
	const goToThirdStep = () => {
		navigation.navigate('Payment', {
			bookingDateEnds: bookingEnds,
			bookingDateStart: bookingStart,
			pet: pet,
			totalPrice: props.route.params.totalPrice,
			campID: props.route.params.campID,
		})
	}
	const bookingStart = useSelector((state) => state.dateStart.startBooking)
	const bookingEnds = useSelector((state) => state.dateEnd.endBooking)
	const petList = useSelector((state) => state.petsList.fullPetsList)

	return (
		<ChoosePetView
			dateText={bookingStart}
			dateTextEnd={bookingEnds}
			pet={pet}
			petList={petList}
			goToThirdStep={goToThirdStep}
			myPetBlock={myPetBlock}
			addPet={addPet}
		/>
	)
}
