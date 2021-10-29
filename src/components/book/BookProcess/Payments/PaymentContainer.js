import React from 'react'
import { PaymentView } from './PaymentView'
import { useNavigation } from '@react-navigation/native'

export const PaymentContainer = () => {
	const navigation = useNavigation()
	const thirdStep = () => {
		navigation.navigate('Congrats')
	}
	return <PaymentView thirdStep={thirdStep} />
}
