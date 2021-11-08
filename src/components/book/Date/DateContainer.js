import React, { useState, useEffect } from 'react'

import { DateView } from './DateView'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { setDateStart, setDateEnds, setTotalDay } from '../../../redux/slices/bookSlice'

export const DateContainer = (props) => {
	const [date, setDate] = useState(new Date())
	const [mode, setMode] = useState('date')
	const [show, setShow] = useState(false)
	const [startDate, setStartDate] = useState('yyyy/mm/dd')
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setDateStart(startDate))
	}, [startDate])

	const [dateEnd, setDateEnd] = useState(new Date())
	const [modeEnd, setModeEnd] = useState('date')
	const [showEnd, setShowEnd] = useState(false)
	const [endDate, setEndDate] = useState('yyyy/mm/dd')

	const [startDay, setStartDay] = useState()
	const [endDay, setEndDay] = useState()
	const [fullDate, setFullDate] = useState()

	useEffect(() => {
		dispatch(setDateEnds(endDate))
	}, [endDate])

	useEffect(() => {
		dispatch(setTotalDay(fullDate))
	}, [fullDate])

	const onChangeEnd = (event, selectedDate) => {
		const currentDate = selectedDate || dateEnd
		setShowEnd(Platform.OS === 'ios')
		setDateEnd(currentDate)

		let tempDateEnd = new Date(currentDate)
		let showDateEnd =
			tempDateEnd.getFullYear() + '/' + (tempDateEnd.getMonth() + 1) + '/' + tempDateEnd.getDate()
		setEndDate(showDateEnd)
		setEndDay(parseFloat(showDateEnd.split('/')[2]))
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
		setStartDate(showDate)
		setStartDay(parseFloat(showDate.split('/')[2]))
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
		setFullDate(endDay - startDay)
	}
	return (
		<DateView
			StartBookProcess={StartBookProcess}
			date={date}
			mode={mode}
			show={show}
			dateText={startDate}
			dateEnd={dateEnd}
			modeEnd={modeEnd}
			showEnd={showEnd}
			dateTextEnd={endDate}
			onChangeEnd={onChangeEnd}
			onChange={onChange}
			showDatepickerEnd={showDatepickerEnd}
			showDatepicker={showDatepicker}
			information={props.information}
		/>
	)
}
