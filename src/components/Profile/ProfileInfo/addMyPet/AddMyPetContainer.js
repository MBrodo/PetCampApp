import React, { useState } from 'react'
import { View, Text, Image, Pressable, TextInput } from 'react-native'
import { AddMyPetView } from './AddMyPetView'
import { PetCard } from '../../../../common/layouts/PetCard'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import { CheckBoxView } from '../../../../common/checkBoxes/checkBox'
import { useSelector } from 'react-redux'
import sendNewCardController from '../../../../controllers/authorization/sendNewCard/sendNewCardController'
import { AddCardCheckBox } from '../../../../common/checkBoxes/addCardCheckBox'
export const AddMyPetContainer = () => {
	const [petNickName, setPetNickName] = useState()
	const [petBreed, setPetBreed] = useState()

	const [dog, setDog] = useState(true)
	const [cat, setCat] = useState(false)

	const checkPetState = () => {
		setDog(!dog ? true : false)
		setCat(!cat ? true : false)
	}
	const petType = () => {
		return dog ? 'DOG' : 'CAT'
	}

	const [male, setMale] = useState(true)
	const [female, setFemale] = useState(false)

	const checkGenderState = () => {
		setMale(!male ? true : false)
		setFemale(!female ? true : false)
	}

	const petGender = () => {
		return male ? 'male' : 'female'
	}

	const [sterilizedPositive, setSterilizedPositive] = useState(true)
	const [sterilizedNegative, setSterilizedNegative] = useState(false)

	const checkSterilizedState = () => {
		setSterilizedPositive(!sterilizedPositive ? true : false)
		setSterilizedNegative(!sterilizedNegative ? true : false)
	}
	const petSterilize = () => {
		return sterilizedPositive ? 'yes' : 'no'
	}
	const [petAge, setPetAge] = useState()
	const [petVetPassport, setPetVetPassport] = useState()
	const [petInfo, setPetInfo] = useState()
	const userId = useSelector((state) => state.user.id)
	console.log(userId)
	const SendNewCard = () => {
		sendNewCardController(
			userId,
			petNickName,
			petType(),
			petBreed,
			petGender(),
			userId,
			parseFloat(petAge),
			petSterilize(),
			petVetPassport,
			petInfo
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
					onChangeText={setPetNickName}
					placeholder={'add nickname'}
					style={styles.textInputNickName}
				/>
			</View>
			<AddCardCheckBox
				name={'Cat/Dog:'}
				firstCheckBoxName={'Dog'}
				SecondCheckBoxName={'Cat'}
				checkPetState={checkPetState}
				firstCheckBoxItem={dog}
				secondCheckBoxItem={cat}
			/>
			<View style={styles.pointContainer}>
				<Text>Breed:</Text>
				<TextInput onChangeText={setPetBreed} style={styles.textInput} />
			</View>
			<AddCardCheckBox
				name={'Gender:'}
				firstCheckBoxName={'female'}
				SecondCheckBoxName={'male'}
				checkPetState={checkGenderState}
				firstCheckBoxItem={female}
				secondCheckBoxItem={male}
			/>
			<View style={styles.pointContainer}>
				<Text>Age, years full:</Text>
				<TextInput onChangeText={setPetAge} style={styles.textInputAge} />
				<Text style={styles.pointText}>years</Text>
			</View>
			<AddCardCheckBox
				name={'Sterilized:'}
				firstCheckBoxName={'yes'}
				SecondCheckBoxName={'no'}
				checkPetState={checkSterilizedState}
				firstCheckBoxItem={sterilizedPositive}
				secondCheckBoxItem={sterilizedNegative}
			/>
			<View style={styles.pointContainer}>
				<Text>Vet Passport number:</Text>
				<TextInput onChangeText={setPetVetPassport} style={styles.textInput} />
			</View>
			<View style={styles.individualNotice}>
				<Text>Individual notice (preferances):</Text>
				<TextInput onChangeText={setPetInfo} style={styles.individualNoticeInput} />
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
