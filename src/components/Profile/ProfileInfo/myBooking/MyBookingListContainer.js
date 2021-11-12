import React, { useEffect } from 'react'
import { MyBookingListView } from './MyBookingListView'
import { View, Text, Image, Pressable, TextInput } from 'react-native'
import { styles } from './style'

import { useSelector, useDispatch } from 'react-redux'
import { PetCard } from '../../../../common/layouts/PetCard'
import { PetInfo } from '../../../../common/petInfo/petInfo'
import { images } from '../addMyPet/AddMyPetContainer'
import getBookingController from '../../../../controllers/bookList/getBookings'
import { setAllBookings } from '../../../../redux/slices/bookSlice'
import { DefaultButton } from '../../../../common/buttons/defaultButton'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

export const MyBookingListContainer = () => {
	const userID = useSelector((state) => state.user.id)
	const bookings = useSelector((state) => state.booking.all)
	console.log(bookings)

	const checkImage = (item) => {
		return item.type == 'CAT' ? images.cat : images.dog
	}
	const dispatch = useDispatch()
	useEffect(() => {
		getBookingController(userID).then((res) => {
			if (res.status === 200) {
				console.log('get bookings success')
				dispatch(setAllBookings(res.data.booking))
			} else {
				console.log('Some trouble with server!')
			}
		})
	}, [])

	const petInfo = (item) => (
		<View style={styles.wrapper}>
			<View style={styles.myPetPhoto}>
				<Image style={styles.picture} source={checkImage(item)} />
				<Text style={styles.myPetPhotoText}>{item.name}</Text>
			</View>
			<PetInfo title={'Booking №'} item={item.id} />
			<PetInfo title={'Start date'} item={item.booking_start.substring(10, 0)} />
			<PetInfo title={'End date'} item={item.booking_end.substring(10, 0)} />
			<PetInfo title={'Paid'} item={item.paid} />
			<PetInfo title={'Cat/Dog'} item={item.type} />
			<PetInfo title={'Option'} item={item.vet_pasport} />
			<PetInfo title={'Additional'} item={item.vet_pasport} />
			<PetInfo title={'Video control'} item={item.vet_pasport} />

			<DefaultButton textButton={'Cancle'} />
		</View>
	)
	const petsCards = (item) => <PetCard key={item.id} item={item} petInfo={petInfo} />

	return <MyBookingListView pets={bookings} petsCards={petsCards} />
}
