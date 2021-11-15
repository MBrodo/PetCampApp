import React from 'react'
import { MySettingsContainer } from './Settings/MySettingsConainer'
import { SettingsUnLoggedContainer } from './Settings/SettingsUnLoggedContainer/SettingsUnLoggedContainer'
import { useSelector } from 'react-redux'

export const Settings = () => {
	const authenticate = useSelector((state) => state.auth.status)

	return <>{authenticate ? <MySettingsContainer /> : <SettingsUnLoggedContainer />}</>
}
