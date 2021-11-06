import React, { useState } from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../../screens/Home'
import { Book } from '../../screens/Book'

import { BookProcessNavigation } from './BookProcessNavigation'

const Stack = createStackNavigator()

export const BookAndAboutUs = (props) => {
	const [information, setInformation] = useState()
	const [Quantity, setQuantity] = useState(false)

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
			<Stack.Screen name="Bookpage">
				{() => (
					<Book
						setQuantity={setQuantity}
						information={information}
						setInformation={setInformation}
					/>
				)}
			</Stack.Screen>
			<Stack.Screen name="BookProcessNavigation">
				{() => (
					<BookProcessNavigation
						Quantity={Quantity}
						information={information}
						setInformation={setInformation}
					/>
				)}
			</Stack.Screen>
		</Stack.Navigator>
	)
}
