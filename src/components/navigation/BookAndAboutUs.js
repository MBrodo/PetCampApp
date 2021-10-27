import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../../screens/Home'
import { Book } from '../../screens/Book'

import { BookProcessNavigation } from './BookProcessNavigation'

const Stack = createStackNavigator()

export const BookAndAboutUs = () => {
	return (
		<Stack.Navigator
			initialRouteName={'Home'}
			screenOptions={{
				headerShown: false,
				headerStyle: {
					borderBottomWidth: 1,
					borderBottomColor: '#A7CFC8',
				},
			}}
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Bookpage" component={Book} />
			<Stack.Screen name="BookProcessNavigation" component={BookProcessNavigation} />
		</Stack.Navigator>
	)
}
