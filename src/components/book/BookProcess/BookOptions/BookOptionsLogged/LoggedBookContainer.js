import React, { useState } from 'react'

import { LoggedBookView } from './LoggedBookView'

export const LoggedBookContainer = () => {
	const [transfer, setTransfer] = useState(false)
	const [grooming, setGrooming] = useState(false)
	const [vaccinated, setVaccinated] = useState(false)
	const [agreement, setAgreement] = useState(false)

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
	return (
		<LoggedBookView
			transfer={transfer}
			setTransfer={checkTransfer}
			grooming={grooming}
			setGrooming={checkGrooming}
			vaccinated={vaccinated}
			setVaccinated={checkVaccinated}
			agreement={agreement}
			setAgreement={checkAgreement}
		/>
	)
}
