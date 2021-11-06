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

	const checkPoints = () => {
		return vaccinated && agreement ? false : true
	}
	const dateStart = useSelector((state) => state.dateStart.dateStart)
	const dateEnds = useSelector((state) => state.dateEnd.dateEnd)
	const totalDays = useSelector((state) => state.totalDay.totalDay)

	const totalPrice = () => {
		let totalCount = 12
		if (transfer && grooming) {
			return (totalCount + 7) * props.Quantity * totalDays
		} else if (transfer) {
			return (totalCount + 5) * props.Quantity * totalDays
		} else if (grooming) {
			return (totalCount + 2) * props.Quantity * totalDays
		} else {
			return totalCount * props.Quantity * totalDays
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
	const secondStep = () => {
		navigation.navigate('ChoosePet', {
			dateTextEnd: dateEnds,
			dateText: dateStart,
			Quantity: props.Quantity,
			totalPrice: totalPrice(),
			campID: props.information.id,
		})
	}

	return (
		<LoggedBookView
			checkPoints={checkPoints}
			Quantity={props.Quantity}
			setCheckButton={setCheckButton}
			checkButton={checkButton}
			totalPrice={totalPrice}
			dateText={dateStart}
			dateTextEnd={dateEnds}
			secondStep={secondStep}
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
