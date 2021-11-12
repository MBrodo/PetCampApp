import React, { useState } from 'react'
import { AddMyPetView } from './AddMyPetView'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import sendNewCardController from '../../../../controllers/authorization/sendNewCard/sendNewCardController'

export const images = {
	cat: require('../../../../img/cat1.jpg'),
	dog: require('../../../../img/dog1.jpg'),
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
		petInfo: '',
	})
	const petInputInfo = (item, name) => {
		setPetInfoContainer((prevState) => ({
			...prevState,
			[name]: item,
		}))
	}

	const petCheckBoxInfo = (firstName, secondName) => {
		console.log(!petInfoContainer[firstName])
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
	const checkImage = () => {
		return petInfoContainer.dog ? images.dog : images.cat
	}
	return (
		<AddMyPetView
			goToBackPoint={props.route.params.goToBackPoint}
			checkImage={checkImage}
			backPoint={backPoint}
			petInfo={petInputInfo}
			SendNewCard={SendNewCard}
			petCheckBoxInfo={petCheckBoxInfo}
			petInfoContainer={petInfoContainer}
		/>
	)
}
