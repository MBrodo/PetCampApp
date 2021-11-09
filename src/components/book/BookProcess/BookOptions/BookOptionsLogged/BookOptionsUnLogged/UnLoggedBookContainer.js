import React from 'react'

import { UnLoggedBookView } from './UnLoggedBookView'
import { useNavigation } from '@react-navigation/native'

export const UnLoggedBookContainer = (props) => {
	const navigation = useNavigation()
	const StartBookProcess = () => {
		navigation.navigate('Profile')
	}

	return <UnLoggedBookView information={props.information} StartBookProcess={StartBookProcess} />
}
