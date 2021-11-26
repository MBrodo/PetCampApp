import React, { useState, useEffect, useContext } from 'react'
import { ChoosePetView } from './ChoosePetView'
import { useNavigation } from '@react-navigation/native'
import petTypeController from '../../../../controllers/petTypeController'
import { setTypeList, setSelected, setClear } from '../../../../redux/slices/fullPetsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Context } from '../../../../context'

export const ChoosePetContainer = (props) => {
	const token = useContext(Context)
	const bookingStart = useSelector((state) => state.booking.startDate)
	const bookingEnds = useSelector((state) => state.booking.endDate)
	const petList = useSelector((state) => state.pets.typeList)
	const quantity = useSelector((state) => state.pets.quantity)
	const selectedPet = useSelector((state) => state.pets.selected)
	const type = useSelector((state) => state.pets.type)
	const userId = useSelector((state) => state.user.id)
	const allPets = useSelector((state) => state.pets.all)
	const [pet, setPet] = useState('')
	const dispatch = useDispatch()
	const PickPet = (item) => {
		dispatch(setSelected(item))
	}
	const checkButton = () => {
		return quantity === selectedPet.length
	}
	const navigation = useNavigation()
	const goToBackPoint = () => {
		navigation.navigate('ChoosePet')
	}
	const goBackToFirstStep = () => {
		navigation.navigate('BookOption')
	}
	const addPet = () => {
		navigation.navigate('Profile', { screen: 'AddMyPet', params: { goToBackPoint: goToBackPoint } })
	}
	const goToThirdStep = () => {
		navigation.navigate('Payment', {
			bookingDateEnds: bookingEnds,
			bookingDateStart: bookingStart,
			totalPrice: props.route.params.totalPrice,
			campID: props.route.params.campID,
		})
	}
	useEffect(() => {
		petTypeController(userId, type, token).then((res) => {
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

	return (
		<ChoosePetView
			checkButton={checkButton}
			dateText={bookingStart}
			dateTextEnd={bookingEnds}
			pet={pet}
			petList={petList}
			goToThirdStep={goToThirdStep}
			goBackToFirstStep={goBackToFirstStep}
			addPet={addPet}
		/>
	)
}
