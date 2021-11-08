import React, { useState } from 'react'
import { AddMyPetView } from './AddMyPetView'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import sendNewCardController from '../../../../controllers/authorization/sendNewCard/sendNewCardController'

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

	return (
		<AddMyPetView
			goToBackPoint={goToBackPoint}
			petInfo={petInfo}
			petVetPassport={petVetPassport}
			checkSterilizedState={checkSterilizedState}
			petAge={petAge}
			checkGenderState={checkGenderState}
			breed={breed}
			SendNewCard={SendNewCard}
			checkPetState={checkPetState}
			petInfoContainer={petInfoContainer}
			petNickName={petNickName}
		/>
	)
}
