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
	const profileInfo = useSelector((state) => state.user.settings)
	const [name, onChangeName] = useState(profileInfo[0].name)
	const [middlename, onChangeMiddlename] = useState(profileInfo[0].middlename)
	const [surname, onChangeSurname] = useState(profileInfo[0].surname)
	const [email, onChangeEmail] = useState(profileInfo[0].email)
	const [city, onChangeCity] = useState(profileInfo[0].city)
	const [street, onChangeStreet] = useState(profileInfo[0].street)
	const [phone, onChangePhone] = useState(profileInfo[0].phone)
	const userInfo = useSelector((state) => state.user.info.substring(19, 248))

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
	const getProfileInfo = () => {
		getSettingsController(userID, userInfo).then((res) => {
			if (res.status === 200) {
				console.log('successsdds')
				dispatch(setSettings(res.data.mySettingsInfo))
			} else {
				console.log('fail')
			}
		})
	}
	const submitCheck = () => {
		setSettingsState(!settingsState)
		SendSettings()
		getProfileInfo()
	}
	const changeCheck = () => {
		setSettingsState(!settingsState)
	}

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
				name={profileInfo[0].name}
				middlename={profileInfo[0].middlename}
				surname={profileInfo[0].surname}
				email={profileInfo[0].email}
				city={profileInfo[0].city}
				street={profileInfo[0].street}
				phone={profileInfo[0].phone}
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
