import React from 'react'
import { PaymentView } from './PaymentView'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'
import sendBookController from '../../../../controllers/authorization/sendBookController'

export const PaymentContainer = (props) => {
	const navigation = useNavigation()
	const thirdStep = () => {
		navigation.navigate('Congrats')
		SendBook()
	}
	console.log(props.route.params.dateText)
	const SendBook = () => {
		sendBookController(
			'1a9ce77a-95c3-448d-83de-ec24fa64834c',
			props.route.params.pet.id,
			'3fca765e-3d50-4935-a36c-3e6eb1afa3f5',
			props.route.params.dateText,
			props.route.params.dateTextEnd,
			true
		).then((res) => {
			if (res.status === 200) {
				Alert.alert('Successful')
			} else if (res.status === 401 || res.status === 400) {
				Alert.alert('Fail Payment')
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
