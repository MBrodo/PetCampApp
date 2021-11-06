import React, { useEffect } from 'react'
import { Text, View, Image } from 'react-native'
import { styles } from '../../style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import images from '../../MyProfile'
import { useSelector, useDispatch } from 'react-redux'
import bookList from '../../../../controllers/authorization/BookListController'
import { setPets } from '../../../../redux/slices/petListSlice'
import fullpetListController from '../../../../controllers/authorization/fullPetListController'
import { setPetsList } from '../../../../redux/slices/fullPetsSlice'

import { MyPets } from './MyPetsView'
import { useNavigation } from '@react-navigation/native'

export const MyPetsContainer = () => {
	const dispatch = useDispatch()
	const userID = useSelector((state) => state.user.user)

	useEffect(() => {
		fullpetListController(userID).then((res) => {
			if (res.status === 200) {
				dispatch(setPetsList(res.data.petsList))
			} else {
				console.log('Some trouble with server!')
			}
		})
	}, [])

	useEffect(() => {
		bookList(userID).then((res) => {
			if (res.status === 200) {
				dispatch(setPets(res.data.petsInfo))
			} else {
				console.log('Some trouble with server!')
			}
		})
	}, [pets])

	const pets = useSelector((state) => state.pets.pets)
	const petList = (item) => (
		<View key={item.id} style={styles.containerElement}>
			<View style={styles.containerWrapper}>
				<View>
					<Image source={images.dog} style={styles.petPic} />
				</View>
				<View style={styles.elementMain}>
					<View style={styles.elementFloor}>
						<View style={styles.elementInfo}>
							<Text>Cat/Dog</Text>
							<Text style={styles.elementText}>{item.type}</Text>
						</View>
						<View style={styles.elementInfo}>
							<Text>Name</Text>
							<Text style={styles.elementText}>{item.name}</Text>
						</View>
						<View style={styles.elementInfo}>
							<Text>Age</Text>
							<Text style={styles.elementText}>{item.age} years</Text>
						</View>
					</View>
					<View style={styles.elementFloor}>
						<View style={styles.elementInfo}>
							<Text>Gender</Text>
							<Text style={styles.elementText}>{item.gender}</Text>
						</View>
						<View style={styles.elementInfo}>
							<Text>Vacinated</Text>
							<Icon name="check" size={20} style={{ color: '#5D5FEF' }} />
						</View>
					</View>
				</View>
			</View>
		</View>
	)
	const navigation = useNavigation()
	const goToPetList = () => {
		navigation.navigate('MyPetsContainer')
	}
	return <MyPets goToPetList={goToPetList} pets={pets} petList={petList} />
}
