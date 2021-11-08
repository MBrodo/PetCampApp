import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { ChoosePetContainer } from '../book/BookProcess/ChoosePet/ChoosePetContainer'
import { PayCardContainer } from '../book/BookProcess/Payments/payCard/PayCardContainer'
import { CongratsContainer } from '../book/BookProcess/Congrats/CongratsConatiner'
import { BookOptions } from '../book/BookProcess/BookOptions/BookOptions'
import { PaymentContainer } from '../book/BookProcess/Payments/PaymentContainer'

const Stack = createStackNavigator()

export const BookProcessNavigation = (props) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="BookOption" component={BookOptions} />
			<Stack.Screen name="ChoosePet" component={ChoosePetContainer} />
			<Stack.Screen name="Payment" component={PaymentContainer} />
			<Stack.Screen name="PaymentScreen" component={PayCardContainer} />
			<Stack.Screen name="Congrats" component={CongratsContainer} />
		</Stack.Navigator>
	)
}
