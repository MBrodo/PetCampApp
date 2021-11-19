import React, { useState, useEffect } from 'react'
import { LoggedBookView } from './LoggedBookView'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import getFreeRooms from '../../../../../controllers/rooms/getFreeRooms'
import { setRoom } from '../../../../../redux/slices/petCampsSlise'

export const LoggedBookContainer = (props) => {
	const campId = useSelector((state) => state.booking.currentCamp.id)
	const bookingStart = useSelector((state) => state.booking.startDate)
	const bookingEnds = useSelector((state) => state.booking.endDate)
	const totalBookingDays = useSelector((state) => state.booking.totalDays)
	const [transfer, setTransfer] = useState(false)
	const [grooming, setGrooming] = useState(false)
	const [vaccinated, setVaccinated] = useState(false)
	const [agreement, setAgreement] = useState(false)
	const [checkButton, setCheckButton] = useState(true)
	const [freeRooms, setFreeRooms] = useState(0)
	const dispatch = useDispatch()
	useEffect(() => {
		getFreeRooms(campId, bookingStart.split('/').join('-'), bookingEnds.split('/').join('-'))
			.then((res) => {
				if (res.status === 200) {
					setFreeRooms(res.data.freeRooms)
					dispatch(setRoom(res.data.freeRooms))
				}
			})
			.catch((e) => console.log(e.message))
	}, [])
	const quantity = useSelector((state) => state.pets.quantity)
	const checkPoints = () => {
		return vaccinated && agreement ? false : true
	}
	const totalPrice = () => {
		let totalCount = 12
		if (transfer && grooming) {
			return totalCount * quantity * totalBookingDays + 7
		} else if (transfer) {
			return totalCount * quantity * totalBookingDays + 5
		} else if (grooming) {
			return totalCount * quantity * totalBookingDays + 2
		} else {
			return totalCount * quantity * totalBookingDays
		}
	}
	const checkTransfer = () => {
		setTransfer(() => {
			return transfer ? false : true
		})
	}
	const checkGrooming = () => {
		setGrooming(() => {
			return grooming ? false : true
		})
	}
	const checkVaccinated = () => {
		setVaccinated(() => {
			return vaccinated ? false : true
		})
	}
	const checkAgreement = () => {
		setAgreement(() => {
			return agreement ? false : true
		})
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
			checkPoints={checkPoints}
			Quantity={quantity}
			setCheckButton={setCheckButton}
			checkButton={checkButton}
			totalPrice={totalPrice}
			dateText={bookingStart}
			dateTextEnd={bookingEnds}
			goToSecondStep={goToSecondStep}
			transfer={transfer}
			setTransfer={checkTransfer}
			grooming={grooming}
			setGrooming={checkGrooming}
			vaccinated={vaccinated}
			setVaccinated={checkVaccinated}
			agreement={agreement}
			setAgreement={checkAgreement}
			information={props.information}
			freeRooms={freeRooms}
		/>
	)
}
