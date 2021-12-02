import React, { useState, useEffect } from 'react'
import { LoggedBookView } from './LoggedBookView'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import getFreeRooms from '../../../../../controllers/rooms/getFreeRooms'
import { setRoom } from '../../../../../redux/slices/petCampsSlise'
import { log } from 'react-native-reanimated'

export const LoggedBookContainer = (props) => {
	const campId = useSelector((state) => state.booking.currentCamp.id)
	const bookingStart = useSelector((state) => state.booking.startDate)
	const bookingEnds = useSelector((state) => state.booking.endDate)
	const totalBookingDays = useSelector((state) => state.booking.totalDays)
	const [checkBoxes, setCheckBoxes] = useState({
		transfer: false,
		grooming: false,
		vaccinated: false,
		agreement: false,
		checkButton: true,
		freeRooms: 0,
	})
	const setCheckBoxOptions = (name) => {
		setCheckBoxes((prevState) => ({
			...prevState,
			[name]: !prevState[name],
		}))
	}

	const dispatch = useDispatch()
	useEffect(() => {
		getFreeRooms(campId, bookingStart.split('/').join('-'), bookingEnds.split('/').join('-'))
			.then((res) => {
				if (res.status === 200) {
					setCheckBoxes((prevState) => ({
						...prevState,
						freeRooms: res.data.freeRooms,
					}))
					dispatch(setRoom(res.data.freeRooms))
				}
			})
			.catch((e) => console.log(e.message))
	}, [])
	const quantity = useSelector((state) => state.pets.quantity)
	const checkPoints = () => {
		return checkBoxes.vaccinated && checkBoxes.agreement ? false : true
	}
	const totalPrice = () => {
		let totalCount = 12
		if (checkBoxes.transfer && checkBoxes.grooming) {
			return totalCount * quantity * totalBookingDays + 7
		} else if (checkBoxes.transfer) {
			return totalCount * quantity * totalBookingDays + 5
		} else if (checkBoxes.grooming) {
			return totalCount * quantity * totalBookingDays + 2
		} else {
			return totalCount * quantity * totalBookingDays
		}
	}

	const navigation = useNavigation()
	const goToSecondStep = () => {
		navigation.navigate('ChoosePet', {
			Quantity: quantity,
			totalPrice: totalPrice(),
			campID: props.information.id,
		})
	}

	return (
		<LoggedBookView
			checkBoxes={checkBoxes}
			setCheckBoxOptions={setCheckBoxOptions}
			checkPoints={checkPoints}
			Quantity={quantity}
			totalPrice={totalPrice}
			dateText={bookingStart}
			dateTextEnd={bookingEnds}
			goToSecondStep={goToSecondStep}
			information={props.information}
		/>
	)
}
