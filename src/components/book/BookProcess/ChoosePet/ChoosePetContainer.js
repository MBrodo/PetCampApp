import React, { useState, useEffect } from 'react'

import { ChoosePetView } from './ChoosePetView'
import { Text, View, Image, Pressable } from 'react-native'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import { BookPetInfo } from '../../../../common/petInfo/BookPetInfo'
import { images } from '../../../Profile/ProfileInfo/addMyPet/AddMyPetContainer'
import petTypeController from '../../../../controllers/petTypeController'
import { setTypeList, setSelected, setClear } from '../../../../redux/slices/fullPetsSlice'
import { useSelector, useDispatch } from 'react-redux'

export const ChoosePetContainer = (props) => {
	const bookingStart = useSelector((state) => state.booking.startDate)
	const bookingEnds = useSelector((state) => state.booking.endDate)
	const petList = useSelector((state) => state.pets.typeList)
	const quantity = useSelector((state) => state.pets.quantity)
	const selectedPet = useSelector((state) => state.pets.selected)

	const type = useSelector((state) => state.pets.type)
	const userId = useSelector((state) => state.user.id)
	const allPets = useSelector((state) => state.pets.all)
	const [checkChoice, setCheckChoice] = useState(false)
	const [pet, setPet] = useState('')
	const checkImage = (item) => {
		return item.type == 'CAT' ? images.cat : images.dog
	}
	const dispatch = useDispatch()
	const PickPet = (item) => {
		dispatch(setSelected(item))
	}

	const checkButton = () => {
		return quantity === selectedPet.length
	}
	// console.log(checkButtonState, 'd')
	useEffect(() => {
		petTypeController(userId, type).then((res) => {
			if (res.status === 200) {
				dispatch(setTypeList(res.data.petsList))
			} else {
				console.log('Some trouble with server!')
			}
		})
	}, [allPets])

	useEffect(() => {
		dispatch(setClear())
	}, [])

	const myPetBlock = (item) => {
		return (
			<View key={item.id} style={styles.myPetContainer}>
				<View>
					<Image style={styles.picture} source={checkImage(item)} />
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
									quantity === selectedPet.length
										? styles.chooseButtonActive
										: styles.chooseButtonInactive
								}
								onPress={() => {
									setCheckChoice(item.id)
									PickPet(item)
								}}
								disabled={checkButton()}
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
	const goToBackPoint = () => {
		navigation.navigate('ChoosePet')
	}
	const addPet = () => {
		navigation.navigate('AddMyPet', { goToBackPoint: goToBackPoint })
	}
	const goToThirdStep = () => {
		navigation.navigate('Payment', {
			bookingDateEnds: bookingEnds,
			bookingDateStart: bookingStart,
			totalPrice: props.route.params.totalPrice,
			campID: props.route.params.campID,
			checkImage: checkImage,
		})
	}
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
