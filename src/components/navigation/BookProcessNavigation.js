import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { ChoosePetContainer } from '../book/BookProcess/ChoosePet/ChoosePetContainer'
import { PaymentContainer } from '../book/BookProcess/Payments/PaymentContainer'
import { CongratsContainer } from '../book/BookProcess/Congrats/CongratsConatiner'
import { BookOptions } from '../book/BookProcess/BookOptions/BookOptions'

const Stack = createStackNavigator()

export const BookProcessNavigation = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="BookOption" component={BookOptions} />
			<Stack.Screen name="ChoosePet" component={ChoosePetContainer} />
			<Stack.Screen name="Payment" component={PaymentContainer} />
			<Stack.Screen name="Congrats" component={CongratsContainer} />
		</Stack.Navigator>
	)
}
