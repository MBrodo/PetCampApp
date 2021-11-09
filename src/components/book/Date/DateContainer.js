import React, { useState, useEffect } from 'react'

import { DateView } from './DateView'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { setDateStart, setDateEnds, setTotalDay } from '../../../redux/slices/bookSlice'

export const DateContainer = (props) => {
	const [dateInfo, setDateInfo] = useState({
		date: new Date(),
		mode: 'date',
		show: false,
		startDate: 'yyyy/mm/dd',
		dateEnd: new Date(),
		modeEnd: 'date',
		showEnd: false,
		endDate: 'yyyy/mm/dd',
		startDay: 0,
		endDay: 0,
		fullDate: 0,
	})
	const date = (item) => {
		setDateInfo((prevState) => ({
			...prevState,
			date: item,
		}))
	}
	const mode = (item) => {
		setDateInfo((prevState) => ({
			...prevState,
			mode: item,
		}))
	}
	const show = (item) => {
		setDateInfo((prevState) => ({
			...prevState,
			show: item,
		}))
	}
	const startDate = (item) => {
		setDateInfo((prevState) => ({
			...prevState,
			startDate: item,
		}))
	}

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setDateStart(dateInfo.startDate))
	}, [dateInfo.startDate])

	const dateEnd = (item) => {
		setDateInfo((prevState) => ({
			...prevState,
			dateEnd: item,
		}))
	}
	const modeEnd = (item) => {
		setDateInfo((prevState) => ({
			...prevState,
			modeEnd: item,
		}))
	}
	const showEnd = (item) => {
		setDateInfo((prevState) => ({
			...prevState,
			showEnd: item,
		}))
	}
	const endDate = (item) => {
		setDateInfo((prevState) => ({
			...prevState,
			endDate: item,
		}))
	}
	const startDay = (item) => {
		setDateInfo((prevState) => ({
			...prevState,
			startDay: item,
		}))
	}
	const endDay = (item) => {
		setDateInfo((prevState) => ({
			...prevState,
			endDay: item,
		}))
	}
	const fullDate = (item) => {
		setDateInfo((prevState) => ({
			...prevState,
			fullDate: item,
		}))
	}

	useEffect(() => {
		dispatch(setDateEnds(dateInfo.endDate))
	}, [dateInfo.endDate])

	useEffect(() => {
		dispatch(setTotalDay(dateInfo.fullDate))
	}, [dateInfo.fullDate])

	const onChangeEnd = (event, selectedDate) => {
		const currentDate = selectedDate || dateInfo.dateEnd
		showEnd(Platform.OS === 'ios')
		dateEnd(currentDate)

		let tempDateEnd = new Date(currentDate)
		let showDateEnd =
			tempDateEnd.getFullYear() + '/' + (tempDateEnd.getMonth() + 1) + '/' + tempDateEnd.getDate()
		endDate(showDateEnd)
		endDay(parseFloat(showDateEnd.split('/')[2]))
	}

	const showModeEnd = (currentMode) => {
		showEnd(true)
		modeEnd(currentMode)
	}

	const showDatepickerEnd = () => {
		showModeEnd('date')
	}

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || dateInfo.date
		show(Platform.OS === 'ios')
		date(currentDate)

		let tempDate = new Date(currentDate)
		let showDate =
			tempDate.getFullYear() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getDate()
		startDate(showDate)
		startDay(parseFloat(showDate.split('/')[2]))
	}

	const showMode = (currentMode) => {
		show(true)
		mode(currentMode)
	}

	const showDatepicker = () => {
		showMode('date')
	}

	const navigation = useNavigation()

	const StartBookProcess = () => {
		navigation.navigate('BookProcessNavigation')
		fullDate(dateInfo.endDay - dateInfo.startDay)
	}
	const petInformation = useSelector((state) => state.camps.camps)
	return (
		<DateView
			StartBookProcess={StartBookProcess}
			date={dateInfo.date}
			mode={dateInfo.mode}
			show={dateInfo.show}
			dateText={dateInfo.startDate}
			dateEnd={dateInfo.dateEnd}
			modeEnd={dateInfo.modeEnd}
			showEnd={dateInfo.showEnd}
			dateTextEnd={dateInfo.endDate}
			onChangeEnd={onChangeEnd}
			onChange={onChange}
			showDatepickerEnd={showDatepickerEnd}
			showDatepicker={showDatepicker}
			information={petInformation}
		/>
	)
}
