import React, { useState } from 'react'

import { DateView } from './DateView'

export const DateContainer = () => {
	const [date, setDate] = useState(new Date())
	const [mode, setMode] = useState('date')
	const [show, setShow] = useState(false)
	const [dateText, setDateText] = useState('dd/mm/yyyy')

	const [dateEnd, setDateEnd] = useState(new Date())
	const [modeEnd, setModeEnd] = useState('date')
	const [showEnd, setShowEnd] = useState(false)
	const [dateTextEnd, setDateTextEnd] = useState('dd/mm/yyyy')

	const onChangeEnd = (event, selectedDate) => {
		const currentDate = selectedDate || dateEnd
		setShowEnd(Platform.OS === 'ios')
		setDateEnd(currentDate)

		let tempDateEnd = new Date(currentDate)
		let showDateEnd =
			tempDateEnd.getDate() + '/' + (tempDateEnd.getMonth() + 1) + '/' + tempDateEnd.getFullYear()
		setDateTextEnd(showDateEnd)
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
			tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
		setDateText(showDate)
	}

	const showMode = (currentMode) => {
		setShow(true)
		setMode(currentMode)
	}

	const showDatepicker = () => {
		showMode('date')
	}

	return (
		<DateView
			date={date}
			mode={mode}
			show={show}
			dateText={dateText}
			dateEnd={dateEnd}
			modeEnd={modeEnd}
			showEnd={showEnd}
			dateTextEnd={dateTextEnd}
			onChangeEnd={onChangeEnd}
			onChange={onChange}
			showDatepickerEnd={showDatepickerEnd}
			showDatepicker={showDatepicker}
		/>
	)
}
