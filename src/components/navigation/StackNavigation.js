import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { TabNavigation } from './TabNavigation'
import { HeaderNavigation } from '../headerNavigation/HeaderNavigation'

const Stack = createStackNavigator()

export const StackNavigation = () => {
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
