import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../Home/Home'
import { Book } from '../../screens/Book'

const Stack = createStackNavigator()

export const BookAndAboutUs = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				headerStyle: {
					borderBottomWidth: 1,
					borderBottomColor: '#A7CFC8',
				},
			}}
		>
			<Stack.Screen name="Bookpage" component={Book} />
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	)
}
