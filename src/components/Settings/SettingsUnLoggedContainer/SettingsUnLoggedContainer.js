import React from 'react'
import { SettingsUnLoggedView } from './SettingsUnLoggedView'
import { useNavigation } from '@react-navigation/native'

export const SettingsUnLoggedContainer = () => {
	const navigation = useNavigation()
	const SettingsLogIn = () => {
		navigation.navigate('Profile')
	}
	return <SettingsUnLoggedView SettingsLogIn={SettingsLogIn} />
}
