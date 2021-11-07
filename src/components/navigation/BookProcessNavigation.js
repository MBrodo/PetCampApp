import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { ChoosePetContainer } from '../book/BookProcess/ChoosePet/ChoosePetContainer'
import { PaymentContainer } from '../book/BookProcess/Payments/PaymentContainer'
import { CongratsContainer } from '../book/BookProcess/Congrats/CongratsConatiner'
import { BookOptions } from '../book/BookProcess/BookOptions/BookOptions'
import { Payment } from '../book/BookProcess/Payments/Payment'

const Stack = createStackNavigator()

export const BookProcessNavigation = (props) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="BookOption">
				{() => <BookOptions Quantity={props.Quantity} information={props.information} />}
			</Stack.Screen>
			<Stack.Screen name="ChoosePet" component={ChoosePetContainer} />
			<Stack.Screen name="Payment" component={PaymentContainer} />
			<Stack.Screen name="PaymentScreen" component={Payment} />
			<Stack.Screen name="Congrats" component={CongratsContainer} />
		</Stack.Navigator>
	)
}
