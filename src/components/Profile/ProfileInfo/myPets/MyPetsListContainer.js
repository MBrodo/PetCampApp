import React from 'react'
import { MyPetsListView } from './MyPetsListView'
import { View, Text, Image, Pressable, TextInput } from 'react-native'
import { styles } from './style'

import { useSelector } from 'react-redux'
import { PetCard } from '../../../../common/layouts/PetCard'
import { useNavigation } from '@react-navigation/native'
import { PetInfo } from '../../../../common/petInfo/petInfo'

export const MyPetsListContainer = () => {
	const petInfo = (item) => (
		<View style={styles.wrapper}>
			<View style={styles.myPetPhoto}>
				<Image source={require('../../../../img/ProfileMyPet.jpg')} />
				<Text style={styles.myPetPhotoText}>{item.name}</Text>
			</View>
			<PetInfo title={'Cat/Dog:'} item={item.type} />
			<PetInfo title={'Breed:'} item={item.breed} />
			<PetInfo title={'Gender:'} item={item.gender} />
			<PetInfo title={'Age:'} item={item.age} />
			<PetInfo title={'Sterilized:'} item={'yes'} />
			<PetInfo title={'Vet Passport:'} item={'№10-1000'} />
			<View>
				<Text>Individual notice (preferances):</Text>
				<Text style={styles.individualNoticeInput}>----</Text>
			</View>
			<View style={styles.ButtonContainer}>
				<Pressable style={styles.changeButton}>
					<Text style={styles.changeButtonText}>Change</Text>
				</Pressable>
			</View>
		</View>
	)
	const petsCards = (item) => <PetCard key={item.id} item={item} petInfo={petInfo} />

	const pets = useSelector((state) => state.pets.all)
	const navigation = useNavigation()

	const addButton = () => {
		navigation.navigate('AddMyPet')
	}

	return <MyPetsListView addButton={addButton} pets={pets} petsCards={petsCards} />
}
