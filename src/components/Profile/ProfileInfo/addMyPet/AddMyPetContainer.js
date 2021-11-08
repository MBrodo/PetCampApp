import React, { useState } from 'react'
import { View, Text, Image, Pressable, TextInput } from 'react-native'
import { AddMyPetView } from './AddMyPetView'
import { PetCard } from '../../../../common/layouts/PetCard'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import sendNewCardController from '../../../../controllers/authorization/sendNewCard/sendNewCardController'
import { AddCardCheckBox } from '../../../../common/checkBoxes/addCardCheckBox'
export const AddMyPetContainer = () => {
	const [petInfoContainer, setPetInfoContainer] = useState({
		petNickName: '',
		dog: true,
		cat: false,
		male: true,
		female: false,
		breed: '',
		sterilizedPositive: true,
		sterilizedNegative: false,
		petAge: 0,
		petVetPassport: '',
		petInfo: '',
	})
	const petNickName = (item) => {
		setPetInfoContainer((prevState) => ({
			...prevState,
			petNickName: item,
		}))
	}

	const checkPetState = () => {
		setPetInfoContainer((prevState) => ({
			...prevState,
			dog: !prevState.dog,
		}))
		setPetInfoContainer((prevState) => ({
			...prevState,
			cat: !prevState.cat,
		}))
	}

	const petType = () => {
		return petInfoContainer.dog ? 'DOG' : 'CAT'
	}

	const checkGenderState = () => {
		setPetInfoContainer((prevState) => ({
			...prevState,
			male: !prevState.male,
		}))
		setPetInfoContainer((prevState) => ({
			...prevState,
			female: !prevState.female,
		}))
	}

	const petGender = () => {
		return petInfoContainer.male ? 'male' : 'female'
	}

	const checkSterilizedState = () => {
		setPetInfoContainer((prevState) => ({
			...prevState,
			sterilizedPositive: !prevState.sterilizedPositive,
		}))
		setPetInfoContainer((prevState) => ({
			...prevState,
			sterilizedNegative: !prevState.sterilizedNegative,
		}))
	}
	const petSterilize = () => {
		return petInfoContainer.sterilizedPositive ? 'yes' : 'no'
	}

	const breed = (item) => {
		setPetInfoContainer((prevState) => ({
			...prevState,
			breed: item,
		}))
	}

	const petAge = (item) => {
		setPetInfoContainer((prevState) => ({
			...prevState,
			petAge: parseFloat(item),
		}))
	}
	const petVetPassport = (item) => {
		setPetInfoContainer((prevState) => ({
			...prevState,
			petVetPassport: item,
		}))
	}
	const petInfo = (item) => {
		setPetInfoContainer((prevState) => ({
			...prevState,
			petInfo: item,
		}))
	}
	const userId = useSelector((state) => state.user.id)
	const SendNewCard = () => {
		sendNewCardController(
			userId,
			petInfoContainer.petNickName,
			petType(),
			petInfoContainer.breed,
			petGender(),
			userId,
			petInfoContainer.petAge,
			petSterilize(),
			petInfoContainer.petVetPassport,
			petInfoContainer.petInfo
		).then((res) => {
			if (res.status === 200) {
				console.log('success')
			} else if (res.status === 401 || res.status === 400) {
				console.log('fail')
			}
		})
	}

	const navigation = useNavigation()
	const goToBackPoint = () => {
		navigation.goBack()
	}
	const addCardView = () => (
		<View style={styles.wrapper}>
			<View style={styles.myPetPhoto}>
				<Image source={require('../../../../img/ProfileMyPet.jpg')} />
				<TextInput
					onChangeText={(item) => petNickName(item)}
					placeholder={'add nickname'}
					style={styles.textInputNickName}
				/>
			</View>
			<AddCardCheckBox
				name={'Cat/Dog:'}
				firstCheckBoxName={'Dog'}
				SecondCheckBoxName={'Cat'}
				checkPetState={checkPetState}
				firstCheckBoxItem={petInfoContainer.dog}
				secondCheckBoxItem={petInfoContainer.cat}
			/>
			<View style={styles.pointContainer}>
				<Text>Breed:</Text>
				<TextInput onChangeText={(item) => breed(item)} style={styles.textInput} />
			</View>
			<AddCardCheckBox
				name={'Gender:'}
				firstCheckBoxName={'female'}
				SecondCheckBoxName={'male'}
				checkPetState={checkGenderState}
				firstCheckBoxItem={petInfoContainer.female}
				secondCheckBoxItem={petInfoContainer.male}
			/>
			<View style={styles.pointContainer}>
				<Text>Age, years full:</Text>
				<TextInput onChangeText={(item) => petAge(item)} style={styles.textInputAge} />
				<Text style={styles.pointText}>years</Text>
			</View>
			<AddCardCheckBox
				name={'Sterilized:'}
				firstCheckBoxName={'yes'}
				SecondCheckBoxName={'no'}
				checkPetState={checkSterilizedState}
				firstCheckBoxItem={petInfoContainer.sterilizedPositive}
				secondCheckBoxItem={petInfoContainer.sterilizedNegative}
			/>
			<View style={styles.pointContainer}>
				<Text>Vet Passport number:</Text>
				<TextInput onChangeText={(item) => petVetPassport(item)} style={styles.textInput} />
			</View>
			<View style={styles.individualNotice}>
				<Text>Individual notice (preferances):</Text>
				<TextInput onChangeText={(item) => petInfo(item)} style={styles.individualNoticeInput} />
			</View>
			<View style={styles.ButtonContainer}>
				<Pressable
					onPress={() => {
						SendNewCard()
						goToBackPoint()
					}}
					style={styles.changeButton}
				>
					<Text style={styles.changeButtonText}>Submit</Text>
				</Pressable>
				<Pressable onPress={() => navigation.goBack()} style={styles.cancleButton}>
					<Text style={styles.cancleButtonText}>Cancle</Text>
				</Pressable>
			</View>
		</View>
	)

	const addCard = () => <PetCard petInfo={addCardView} />
	return <AddMyPetView addCard={addCard} />
}
