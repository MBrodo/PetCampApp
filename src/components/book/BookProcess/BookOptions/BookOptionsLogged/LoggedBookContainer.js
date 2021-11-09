import React, { useState } from 'react'

import { LoggedBookView } from './LoggedBookView'
import { useNavigation } from '@react-navigation/native'

export const LoggedBookContainer = (props) => {
	const [transfer, setTransfer] = useState(false)
	const [grooming, setGrooming] = useState(false)
	const [vaccinated, setVaccinated] = useState(false)
	const [agreement, setAgreement] = useState(false)
	const [checkButton, setCheckButton] = useState(true)

	const checkPoints = () => {
		return vaccinated && agreement ? false : true
	}

	const totalPrice = () => {
		let totalCount = 12
		if (transfer && grooming) {
			return (totalCount + 7) * props.Quantity
		} else if (transfer) {
			return (totalCount + 5) * props.Quantity
		} else if (grooming) {
			return (totalCount + 2) * props.Quantity
		} else {
			return totalCount * props.Quantity
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
			dateTextEnd: props.dateTextEnd,
			dateText: props.dateText,
			Quantity: props.Quantity,
			totalPrice: totalPrice(),
		})
	}
	return (
		<LoggedBookView
			checkPoints={checkPoints}
			Quantity={props.Quantity}
			setCheckButton={setCheckButton}
			checkButton={checkButton}
			totalPrice={totalPrice}
			dateText={props.dateText}
			dateTextEnd={props.dateTextEnd}
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
