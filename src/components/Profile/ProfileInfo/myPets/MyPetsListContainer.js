import React, { useEffect } from 'react'
import { MyPetsListView } from './MyPetsListView'
import { View, Text, Image, Pressable, TextInput } from 'react-native'
import { styles } from './style'

import { useSelector, useDispatch } from 'react-redux'
import fullpetListController from '../../../../controllers/authorization/fullPetListController'
import { setPetsList } from '../../../../redux/slices/fullPetsSlice'

export const MyPetsListContainer = () => {
	const petsCards = (item) => (
		<View key={item.id} style={styles.cardContainer}>
			<View style={styles.wrapper}>
				<View style={styles.myPetPhoto}>
					<Image source={require('../../../../img/ProfileMyPet.jpg')} />
					<Text style={styles.myPetPhotoText}>{item.name}</Text>
				</View>
				<View style={styles.pointContainer}>
					<Text>Cat/Dog:</Text>
					<Text style={styles.pointText}>{item.type}</Text>
				</View>
				<View style={styles.pointContainer}>
					<Text>Breed:</Text>
					<Text style={styles.pointText}>{item.breed}</Text>
				</View>
				<View style={styles.pointContainer}>
					<Text>Gender:</Text>
					<Text style={styles.pointText}>{item.gender}</Text>
				</View>
				<View style={styles.pointContainer}>
					<Text>Age:</Text>
					<Text style={styles.pointText}>{item.age} years</Text>
				</View>
				<View style={styles.pointContainer}>
					<Text>Sterilized</Text>
					<Text style={styles.pointText}>yes</Text>
				</View>
				<View style={styles.pointContainer}>
					<Text>Vet Passport:</Text>
					<Text style={styles.pointText}>№10-1000</Text>
				</View>
				<View style={styles.pointContainer}>
					<Text></Text>
					<TextInput></TextInput>
				</View>
				<View style={styles.ButtonContainer}>
					<Pressable style={styles.changeButton}>
						<Text style={styles.changeButtonText}>Change</Text>
					</Pressable>
				</View>
			</View>
		</View>
	)
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
	const pets = useSelector((state) => state.petsList.petsList)

	return <MyPetsListView pets={pets} petsCards={petsCards} />
}
