import React, { useState } from 'react'
import { AddMyPetView } from './AddMyPetView'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { styles } from './style'
import sendNewCardController from '../../../../controllers/authorization/sendNewCard/sendNewCardController'

export const images = {
	defaultImage: require('../../../../img/defaultImage.png'),
}

export const AddMyPetContainer = (props) => {
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
		isVaccinated: false,
		petInfo: '',
	})
	const checkVetPasport = () => {
		return petInfoContainer.isVaccinated ? styles.vetInputPositive : styles.textInput
	}
	const checkVetState = (firstName, secondName, item, regular) => {
		setPetInfoContainer((prevState) => ({
			...prevState,
			[firstName]: item,
			[secondName]: regular,
		}))
	}
	const setPetInputInfo = (item, name) => {
		setPetInfoContainer((prevState) => ({
			...prevState,
			[name]: item,
		}))
	}

	const setPetCheckBoxInfo = (firstName, secondName) => {
		setPetInfoContainer((prevState) => ({
			...prevState,
			[firstName]: !prevState[firstName],
		}))
		setPetInfoContainer((prevState) => ({
			...prevState,
			[secondName]: !prevState[secondName],
		}))
	}

	const petType = () => {
		return petInfoContainer.dog ? 'DOG' : 'CAT'
	}

	const petGender = () => {
		return petInfoContainer.male ? 'male' : 'female'
	}

	const petSterilize = () => {
		return petInfoContainer.sterilizedPositive ? 'yes' : 'no'
	}
	const userId = useSelector((state) => state.user.id)
	const SendNewCard = () => {
		props.route.params.setCheckState((state) => !state)
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
	const backPoint = () => {
		navigation.goBack()
	}
	return (
		<AddMyPetView
			checkVetState={checkVetState}
			checkVetPasport={checkVetPasport}
			goToBackPoint={props.route.params.goToBackPoint}
			backPoint={backPoint}
			setPetInfo={setPetInputInfo}
			SendNewCard={SendNewCard}
			setPetCheckBoxInfo={setPetCheckBoxInfo}
			petInfoContainer={petInfoContainer}
		/>
	)
}
