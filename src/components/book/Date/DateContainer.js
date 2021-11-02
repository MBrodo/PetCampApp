import React, { useState } from 'react'

import { DateView } from './DateView'
import { useNavigation } from '@react-navigation/native'
import { LoggedBookContainer } from '../BookProcess/BookOptions/BookOptionsLogged/LoggedBookContainer'
import { UnLoggedBookContainer } from '../BookProcess/BookOptions/BookOptionsUnLogged/UnLoggedBookContainer'

export const DateContainer = (props) => {
	const [date, setDate] = useState(new Date())
	const [mode, setMode] = useState('date')
	const [show, setShow] = useState(false)

	const [dateEnd, setDateEnd] = useState(new Date())
	const [modeEnd, setModeEnd] = useState('date')
	const [showEnd, setShowEnd] = useState(false)

	const onChangeEnd = (event, selectedDate) => {
		const currentDate = selectedDate || dateEnd
		setShowEnd(Platform.OS === 'ios')
		setDateEnd(currentDate)

		let tempDateEnd = new Date(currentDate)
		let showDateEnd =
			tempDateEnd.getFullYear() + '/' + (tempDateEnd.getMonth() + 1) + '/' + tempDateEnd.getDate()
		props.setDateTextEnd(showDateEnd)
	}

	const showModeEnd = (currentMode) => {
		setShowEnd(true)
		setModeEnd(currentMode)
	}

	const showDatepickerEnd = () => {
		showModeEnd('date')
	}

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date
		setShow(Platform.OS === 'ios')
		setDate(currentDate)

		let tempDate = new Date(currentDate)
		let showDate =
			tempDate.getFullYear() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getDate()
		props.setDateText(showDate)
	}

	const showMode = (currentMode) => {
		setShow(true)
		setMode(currentMode)
	}

	const showDatepicker = () => {
		showMode('date')
	}

	const navigation = useNavigation()

	const StartBookProcess = () => {
		navigation.navigate('BookProcessNavigation')
	}

	return (
		<DateView
			StartBookProcess={StartBookProcess}
			date={date}
			mode={mode}
			show={show}
			dateText={props.dateText}
			dateEnd={dateEnd}
			modeEnd={modeEnd}
			showEnd={showEnd}
			dateTextEnd={props.dateTextEnd}
			onChangeEnd={onChangeEnd}
			onChange={onChange}
			showDatepickerEnd={showDatepickerEnd}
			showDatepicker={showDatepicker}
			information={props.information}
		/>
	)
}
