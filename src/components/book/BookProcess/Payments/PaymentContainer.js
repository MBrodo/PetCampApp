import React from 'react'
import { PaymentView } from './PaymentView'
import { useNavigation } from '@react-navigation/native'
import sendBookController from '../../../../controllers/authorization/sendBookController'
import { useSelector } from 'react-redux'

export const PaymentContainer = (props) => {
	const navigation = useNavigation()
	const thirdStep = () => {
		navigation.navigate('Congrats')
		SendBook()
	}

	const userId = useSelector((state) => state.user.user)
	const SendBook = () => {
		sendBookController(
			userId,
			props.route.params.pet.id,
			props.route.params.campID,
			props.route.params.dateText,
			props.route.params.dateTextEnd,
			true
		).then((res) => {
			if (res.status === 200) {
				console.log('success')
			} else if (res.status === 401 || res.status === 400) {
				console.log('fail')
			}
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
