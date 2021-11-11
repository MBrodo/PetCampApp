import React, { useState } from 'react'
import { MySettingsView } from './MySettingsView'
import { TextInfoUser } from './TextInfo/TextInfo'
import { TextInputUser } from './TextInfo/TextInput'
import { SubmitButton } from '../../common/buttons/settingsButton'
import { useSelector, useDispatch } from 'react-redux'
import { setSettings } from '../../redux/slices/userSlice'
import sendSettingsController from '../../controllers/settings/sendSettingsController'
import getSettingsController from '../../controllers/settings/getSettingsController'

export const MySettingsContainer = () => {
	const [name, onChangeName] = useState('Lisa')
	const [middlename, onChangeMiddlename] = useState('Ivanova')
	const [surname, onChangeSurname] = useState('Ivanova')
	const [email, onChangeEmail] = useState('gern5051@gmail.com')
	const [city, onChangeCity] = useState('Minsk')
	const [street, onChangeStreet] = useState('Nezavisimosty, 30')
	const [phone, onChangePhone] = useState('+375(29)733-57-44')

	const [settingsState, setSettingsState] = useState(false)

	const checkButton = () => {
		return settingsState ? (
			<SubmitButton checkState={submitCheck} name={'Submit'} /> //sendRequest={}
		) : (
			<SubmitButton checkState={changeCheck} name={'Change'} />
		)
	}
	const dispatch = useDispatch()
	const userID = useSelector((state) => state.user.id)
	console.log(userID, name, middlename, surname, email, city, street, phone)

	const SendSettings = () => {
		sendSettingsController(userID, name, middlename, surname, email, city, street, phone).then(
			(res) => {
				if (res.status === 200) {
					console.log('success')
				} else {
					console.log('fail')
				}
			}
		)
	}
	const test = () => {
		getSettingsController(userID).then((res) => {
			if (res.status === 200) {
				console.log('success')
				dispatch(setSettings(res.data.mySettingsInfo))
			} else {
				console.log('fail')
			}
		})
	}
	const submitCheck = () => {
		setSettingsState(!settingsState)
		SendSettings()
	}
	const changeCheck = () => {
		setSettingsState(!settingsState)
		test()
	}
	const settings = useSelector((state) => state.user.settings)
	console.log(settings, 'd')
	const checkSettings = () => {
		return settingsState ? (
			<TextInputUser
				name={name}
				onChangeName={onChangeName}
				middlename={middlename}
				onChangeMiddlename={onChangeMiddlename}
				surname={surname}
				onChangeSurname={onChangeSurname}
				email={email}
				onChangeEmail={onChangeEmail}
				city={city}
				onChangeCity={onChangeCity}
				street={street}
				onChangeStreet={onChangeStreet}
				phone={phone}
				onChangePhone={onChangePhone}
			/>
		) : (
			<TextInfoUser
				name={name}
				middlename={middlename}
				surname={surname}
				email={email}
				city={city}
				street={street}
				phone={phone}
			/>
		)
	}
	return (
		<MySettingsView
			checkButton={checkButton}
			settingsState={settingsState}
			setSettingsSate={setSettingsState}
			checkSettings={checkSettings}
		/>
	)
}
