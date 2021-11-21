import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { TabNavigation } from './TabNavigation'
import { HeaderNavigation } from '../headerNavigation/HeaderNavigation'

import EncryptedStorage from 'react-native-encrypted-storage'
import checkToken from '../../services/token/checkToken'
import getToken from '../../services/token/getToken'
import { setUserId, setUser } from '../../redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import getSettingsController from '../../controllers/settings/getSettingsController'
import { setSettings } from '../../redux/slices/userSlice'

const Stack = createStackNavigator()

export const StackNavigation = () => {
	const dispatch = useDispatch()
	const [token, setToken] = useState('')
	const setProfileSettings = (userID, token) => {
		getSettingsController(userID, token).then((res) => {
			if (res.status === 200) {
				dispatch(setSettings(res.data.mySettingsInfo))
			}
		})
	}
	async function retrieveUserSession() {
		try {
			const session = await EncryptedStorage.getItem('user_session')
			setToken(() => session)
		} catch (error) {}
	}
	async function removeUserSession() {
		try {
			await EncryptedStorage.removeItem('user_session')
		} catch (error) {}
	}
	retrieveUserSession()

	useEffect(() => {
		if (token) {
			if (checkToken(token)) {
				const { id } = getToken(token)
				dispatch(setUserId(id))
				setProfileSettings(id, token.substring(19, 248))
				dispatch(setUser(token))
			} else {
				dispatch(setUserId({}))
				removeUserSession()
			}
		}
	})

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerStyle: {
					borderBottomWidth: 1,
					borderBottomColor: '#A7CFC8',
				},
			}}
		>
			<Stack.Screen
				name="Navigation"
				component={TabNavigation}
				options={{ headerTitle: () => <HeaderNavigation /> }}
			/>
		</Stack.Navigator>
	)
}
