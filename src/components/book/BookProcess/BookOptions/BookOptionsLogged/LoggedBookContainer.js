import React, { useState } from 'react'

import { LoggedBookView } from './LoggedBookView'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

export const LoggedBookContainer = (props) => {
	const [transfer, setTransfer] = useState(false)
	const [grooming, setGrooming] = useState(false)
	const [vaccinated, setVaccinated] = useState(false)
	const [agreement, setAgreement] = useState(false)
	const [checkButton, setCheckButton] = useState(true)

	const quantity = useSelector((state) => state.pets.quantity)

	const checkPoints = () => {
		return vaccinated && agreement ? false : true
	}
	const bookingStart = useSelector((state) => state.booking.startBooking)
	const bookingEnds = useSelector((state) => state.booking.endBooking)
	const totalBookingDays = useSelector((state) => state.booking.totalDays)

	const totalPrice = () => {
		let totalCount = 12
		if (transfer && grooming) {
			return (totalCount + 7) * quantity * totalBookingDays
		} else if (transfer) {
			return (totalCount + 5) * quantity * totalBookingDays
		} else if (grooming) {
			return (totalCount + 2) * quantity * totalBookingDays
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
		/>
	)
}
