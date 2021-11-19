import React, { useState, useEffect } from 'react'
import { Text, View, Image } from 'react-native'
import { styles } from '../../style'
import images from '../../MyProfile'
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
				dispatch(setPets(res.data.petsInfo))
			}
		})
	}, [checkState])

	const petList = (item) => (
		<View key={item.id} style={styles.containerElement}>
			<View style={styles.containerWrapper}>
				<View>
					<Image source={images.defaultImage} style={styles.petPic} />
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
							<Text style={styles.vetText}>Vet Passport</Text>
							<Text style={styles.elementText}>{item.vet_pasport}</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	)
	const navigation = useNavigation()
	const goToPetList = () => {
		navigation.navigate('MyPetsContainer', { setCheckState: setCheckState })
	}
	return <MyPets goToPetList={goToPetList} pets={profilePetsList} petList={petList} />
}
