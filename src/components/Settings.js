import React, { useState } from 'react'
import { MySettingsContainer } from './Settings/MySettingsConainer'
import { SettingsUnLoggedContainer } from './Settings/SettingsUnLoggedContainer/SettingsUnLoggedContainer'
import { useSelector } from 'react-redux'

export const Settings = () => {
	const [authenticate] = useState(useSelector((state) => state.auth.status))
	const userID = useSelector((state) => state.user.id.length)
	return (userID === 0 ? authenticate : true) ? (
		<MySettingsContainer />
	) : (
		<SettingsUnLoggedContainer />
	)
}
