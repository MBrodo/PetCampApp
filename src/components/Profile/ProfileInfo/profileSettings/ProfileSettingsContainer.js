import React, { useState } from 'react'
import { ProfileSettingsView } from './ProfileSettingsView'
import { useNavigation } from '@react-navigation/native'
import { TextInfoUser } from './TextInfo/TextInfo'
import { TextInputUser } from './TextInfo/TextInput'
import { SubmitButton } from '../../../../common/buttons/settingsButton'

export const ProfileSettingsContainer = () => {
	const [name, onChangeName] = useState('Lisa')
	const [midName, onChangeMidName] = useState('Ivanova')
	const [surname, onChangeSurname] = useState('Ivanova')
	const [email, onChangeEmail] = useState('gern5051@gmail.com')
	const [city, onChangeCity] = useState('Minsk')
	const [street, onChangeStreet] = useState('Nezavisimosty, 30')
	const [phone, onChangePhone] = useState('+375(29)733-57-44')

	const [settingsState, setSettingsState] = useState(false)

	const navigation = useNavigation()
	const toMyProfile = () => {
		navigation.goBack()
	}

	const checkButton = () => {
		return settingsState ? (
			<SubmitButton checkState={buttonCheck} name={'Submit'} /> //sendRequest={}
		) : (
			<SubmitButton checkState={buttonCheck} name={'Change'} />
		)
	}
	const buttonCheck = () => {
		setSettingsState(settingsState ? false : true)
	}
	const checkSettings = () => {
		return settingsState ? (
			<TextInputUser
				name={name}
				onChangeName={onChangeName}
				midName={midName}
				onChangeMidName={onChangeMidName}
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
				midName={midName}
				surname={surname}
				email={email}
				city={city}
				street={street}
				phone={phone}
			/>
		)
	}
	return (
		<ProfileSettingsView
			checkButton={checkButton}
			buttonCheck={buttonCheck}
			settingsState={settingsState}
			setSettingsSate={setSettingsState}
			toMyProfile={toMyProfile}
			checkSettings={checkSettings}
		/>
	)
}
