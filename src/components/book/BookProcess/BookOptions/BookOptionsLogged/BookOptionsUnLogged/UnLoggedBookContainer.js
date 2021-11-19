import React, { useState, useEffect } from 'react'
import { UnLoggedBookView } from './UnLoggedBookView'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import getFreeRooms from '../../../../../../controllers/rooms/getFreeRooms'
import { setRoom } from '../../../../../../redux/slices/petCampsSlise'

export const UnLoggedBookContainer = (props) => {
	const campId = useSelector((state) => state.booking.currentCamp.id)
	const bookingStart = useSelector((state) => state.booking.startDate)
	const bookingEnds = useSelector((state) => state.booking.endDate)
	const [freeRooms, setFreeRooms] = useState(0)
	const dispatch = useDispatch()
	const navigation = useNavigation()
	const StartBookProcess = () => {
		navigation.navigate('Profile')
	}
	useEffect(() => {
		getFreeRooms(campId, bookingStart.split('/').join('-'), bookingEnds.split('/').join('-'))
			.then((res) => {
				if (res.status === 200) {
					setFreeRooms(res.data.freeRooms)
					dispatch(setRoom(res.data.freeRooms))
				}
			})
			.catch((e) => console.log(e.message))
	}, [])

	return (
		<UnLoggedBookView
			information={props.information}
			StartBookProcess={StartBookProcess}
			freeRooms={freeRooms}
		/>
	)
}
