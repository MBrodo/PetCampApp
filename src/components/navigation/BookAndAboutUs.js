import React, { useState } from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../../screens/Home'
import { Book } from '../../screens/Book'

import { BookProcessNavigation } from './BookProcessNavigation'

const Stack = createStackNavigator()

export const BookAndAboutUs = (props) => {
	const [information, setInformation] = useState()
	const [dateText, setDateText] = useState('yyyy/mm/dd')
	const [dateTextEnd, setDateTextEnd] = useState('yyyy/mm/dd')
	const [Quantity, setQuantity] = useState(false)
	const [startDate, setStartDate] = useState()
	const [endDate, setEndDate] = useState()

	const [totalDates, setTotalDates] = useState()
	console.log(startDate - endDate)
	const totalDays = () => {
		setTotalDates(endDate - startDate)
	}
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
						setStartDate={setStartDate}
						setEndDate={setEndDate}
						setQuantity={setQuantity}
						dateText={dateText}
						setDateText={setDateText}
						dateTextEnd={dateTextEnd}
						setDateTextEnd={setDateTextEnd}
						information={information}
						setInformation={setInformation}
					/>
				)}
			</Stack.Screen>
			<Stack.Screen name="BookProcessNavigation">
				{() => (
					<BookProcessNavigation
						Quantity={Quantity}
						dateText={dateText}
						dateTextEnd={dateTextEnd}
						information={information}
						setInformation={setInformation}
						authenticate={props.authenticate}
					/>
				)}
			</Stack.Screen>
		</Stack.Navigator>
	)
}
