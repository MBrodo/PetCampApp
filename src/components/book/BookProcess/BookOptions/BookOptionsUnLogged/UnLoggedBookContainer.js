import React from 'react'

import { UnLoggedBookView } from './UnLoggedBookView'
import { useNavigation } from '@react-navigation/native'

export const UnLoggedBookContainer = () => {
	const navigation = useNavigation()

	const StartBookProcess = () => {
		navigation.navigate('LogIn')
	}

	return <UnLoggedBookView StartBookProcess={StartBookProcess} />
}
