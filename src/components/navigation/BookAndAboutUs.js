import React, { useState } from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../../screens/Home'
import { Book } from '../../screens/Book'

import { BookProcessNavigation } from './BookProcessNavigation'

const Stack = createStackNavigator()

export const BookAndAboutUs = (props) => {
	const [information, setInformation] = useState()
	const [startDate, setStartDate] = useState('yyyy/mm/dd')
	const [endDate, setEndDate] = useState('yyyy/mm/dd')
	const [Quantity, setQuantity] = useState(false)
	const [startDay, setStartDay] = useState()
	const [endDay, setEndDay] = useState()

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
						setStartDate={setStartDay}
						setEndDate={setEndDay}
						setQuantity={setQuantity}
						dateText={startDate}
						setDateText={setStartDate}
						dateTextEnd={endDate}
						setDateTextEnd={setEndDate}
						information={information}
						setInformation={setInformation}
					/>
				)}
			</Stack.Screen>
			<Stack.Screen name="BookProcessNavigation">
				{() => (
					<BookProcessNavigation
						Quantity={Quantity}
						dateText={startDate}
						dateTextEnd={endDate}
						information={information}
						setInformation={setInformation}
					/>
				)}
			</Stack.Screen>
		</Stack.Navigator>
	)
}
