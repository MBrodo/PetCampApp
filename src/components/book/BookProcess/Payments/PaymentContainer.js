import React from 'react'
import { PaymentView } from './PaymentView'
import { useNavigation } from '@react-navigation/native'

export const PaymentContainer = (props) => {
	const navigation = useNavigation()
	const thirdStep = () => {
		navigation.navigate('Congrats')
	}
	return (
		<PaymentView
			totalPrice={props.route.params.totalPrice}
			dateStart={props.route.params.dateText}
			dateEnd={props.route.params.dateTextEnd}
			pet={props.route.params.pet}
			thirdStep={thirdStep}
		/>
	)
}
