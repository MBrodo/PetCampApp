import React from 'react'
import { PaymentView } from './PaymentView'
import { useNavigation } from '@react-navigation/native'
import sendBookController from '../../../../controllers/authorization/sendBookController'
import { useSelector } from 'react-redux'

export const PaymentContainer = (props) => {
	const navigation = useNavigation()

	const thirdStep = () => {
		navigation.navigate('PaymentScreen', {
			pet: props.route.params.pet.id,
			campID: props.route.params.campID,
			dateText: props.route.params.dateText,
			dateTextEnd: props.route.params.dateTextEnd,
		})
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
