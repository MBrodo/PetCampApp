import React, { useState } from 'react'

import { LoggedBookView } from './LoggedBookView'
import { useNavigation } from '@react-navigation/native'

export const LoggedBookContainer = (props) => {
	const [transfer, setTransfer] = useState(false)
	const [grooming, setGrooming] = useState(false)
	const [vaccinated, setVaccinated] = useState(false)
	const [agreement, setAgreement] = useState(false)
	const [checkButton, setCheckButton] = useState(true)

	const totalPrice = () => {
		let totalCount = 12
		if (transfer && grooming) {
			return totalCount + 7
		} else if (transfer) {
			return totalCount + 5
		} else if (grooming) {
			return totalCount + 2
		} else {
			return totalCount
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
		navigation.navigate('ChoosePet')
	}
	return (
		<LoggedBookView
			setCheckButton={setCheckButton}
			checkButton={checkButton}
			totalPrice={totalPrice}
			dateText={props.dateText}
			dateTextEnd={props.dateTextEnd}
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
