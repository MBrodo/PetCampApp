import React, { useState, useContext } from 'react'
import { MySettingsView } from './MySettingsView'
import { TextInfoUser } from './TextInfo/TextInfo'
import { TextInputUser } from './TextInfo/TextInput'
import { SubmitButton } from '../../common/buttons/settingsButton'
import { useSelector, useDispatch } from 'react-redux'
import { setSettings } from '../../redux/slices/userSlice'
import sendSettingsController from '../../controllers/settings/sendSettingsController'
import getSettingsController from '../../controllers/settings/getSettingsController'
import { Context } from '../../context'

export const MySettingsContainer = () => {
	const token = useContext(Context)
	const profileInfo = useSelector((state) => state.user.settings)
	const [userInformation, setUserInformation] = useState({
		name: profileInfo[0].name,
		middlename: profileInfo[0].middlename,
		surname: profileInfo[0].surname,
		email: profileInfo[0].email,
		city: profileInfo[0].city,
		street: profileInfo[0].street,
		phone: profileInfo[0].phone,
	})
	const setName = (item, name) => {
		setUserInformation((prevState) => ({
			...prevState,
			[name]: item,
		}))
	}
	const [settingsState, setSettingsState] = useState(false)
	const checkButton = () => {
		return settingsState ? (
			<SubmitButton checkState={submitCheck} name={'Submit'} />
		) : (
			<SubmitButton checkState={changeCheck} name={'Change'} />
		)
	}
	const dispatch = useDispatch()
	const userID = useSelector((state) => state.user.id)
	const SendSettings = () => {
		sendSettingsController(
			userID,
			userInformation.name,
			userInformation.middlename,
			userInformation.surname,
			userInformation.email,
			userInformation.city,
			userInformation.street,
			userInformation.phone,
			token
		).then((res) => {
			if (res.status === 200) {
				console.log('success11')
			} else {
				console.log('fail')
			}
		})
	}
	const getProfileInfo = () => {
		getSettingsController(userID, token).then((res) => {
			if (res.status === 200) {
				console.log('successs')
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
			<TextInputUser userInformation={userInformation} setName={setName} />
		) : (
			<TextInfoUser userInformation={userInformation} />
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
