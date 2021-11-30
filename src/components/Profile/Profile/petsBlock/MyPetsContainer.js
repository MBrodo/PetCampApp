import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import bookList from '../../../../controllers/authorization/BookListController'
import fullpetListController from '../../../../controllers/authorization/fullPetListController'
import { setPetsList, setPets } from '../../../../redux/slices/fullPetsSlice'

import { MyPets } from './MyPetsView'
import { useNavigation } from '@react-navigation/native'

export const MyPetsContainer = () => {
	const dispatch = useDispatch()
	const userID = useSelector((state) => state.user.id)
	const profilePetsList = useSelector((state) => state.pets.profilePetsList)
	const [checkState, setCheckState] = useState(false)
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		fullpetListController(userID).then((res) => {
			if (res.status === 200) {
				dispatch(setPetsList(res.data.petsList))
			}
		})
	}, [checkState])

	useEffect(() => {
		bookList(userID).then((res) => {
			if (res.status === 200) {
				setLoading(true)
				dispatch(setPets(res.data.petsInfo))
			}
		})
	}, [checkState])

	const navigation = useNavigation()
	const goToPetList = () => {
		navigation.navigate('MyPetsContainer', { setCheckState: setCheckState })
	}
	return <MyPets isLoading={isLoading} goToPetList={goToPetList} pets={profilePetsList} />
}
