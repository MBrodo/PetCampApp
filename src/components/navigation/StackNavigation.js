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
import { Context } from '../../context/index'
import mapListController from '../../controllers/authorization/mapListController'
import { setCamps } from '../../redux/slices/petCampsSlise'

const Stack = createStackNavigator()

export const StackNavigation = () => {
	const dispatch = useDispatch()
	const [token, setToken] = useState('')
	const authenticate = useSelector((state) => state.auth.status)
	const signInToken = useSelector((state) => state.user.info)
	async function retrieveUserSession() {
		try {
			const session = await EncryptedStorage.getItem('user_session')
			setToken(() => (session ? session.substring(19, 244) : authenticate ? signInToken : null))
		} catch (error) {}
	}
	console.log(authenticate, signInToken, token, 'sign')
	console.log(signInToken)
	async function removeUserSession() {
		try {
			await EncryptedStorage.removeItem('user_session')
		} catch (error) {}
	}
	retrieveUserSession()

	const setProfileSettings = (userID) => {
		getSettingsController(userID).then((res) => {
			if (res.status === 200) {
				dispatch(setSettings(res.data.mySettingsInfo))
			}
		})
	}
	useEffect(() => {
		if (token) {
			if (checkToken(token)) {
				const { id } = getToken(token)
				dispatch(setUserId(id))
				setProfileSettings(id)
				dispatch(setUser(token))
			} else {
				dispatch(setUserId({}))
				removeUserSession()
			}
		}
	})

	useEffect(() => {
		mapListController().then((res) => {
			if (res.status === 200) {
				dispatch(setCamps(res.data.petCamps))
			} else {
				console.log('Some trouble with server!')
			}
		})
	}, [])
	return (
		<Context.Provider value={token}>
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
		</Context.Provider>
	)
}
