import React, { useContext } from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { MyPetsListView } from './MyPetsListView'
import { styles } from './style'

import { useSelector } from 'react-redux'
import { PetCard } from '../../../../common/layouts/PetCard'
import { useNavigation } from '@react-navigation/native'
import { PetInfo } from '../../../../common/petInfo/petInfo'
import { images } from '../addMyPet/AddMyPetContainer'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import deletePet from '../../../../controllers/pets/deletePet'

export const MyPetsListContainer = (props) => {
	const deletePetCard = (id) => {
		props.route.params.setCheckState((state) => !state)
		deletePet(id).then((res) => {
			if (res.status === 200) {
				console.log('delete is success')
			} else if (res.status === 401 || res.status === 400) {
				console.log('fail')
			}
		})
	}
	const petInfo = (item) => (
		<View style={styles.wrapper}>
			<View style={styles.myPetPhoto}>
				<View style={styles.deleteButton}>
					<Pressable onPress={() => deletePetCard(item.id)}>
						<Icon name="trash-alt" size={20} />
					</Pressable>
				</View>
				<>
					<Image style={styles.picture} source={images.defaultImage} />
					<Text style={styles.myPetPhotoText}>{item.name}</Text>
				</>
			</View>
			<PetInfo title={'Cat/Dog:'} item={item.type} />
			<PetInfo title={'Breed:'} item={item.breed} />
			<PetInfo title={'Gender:'} item={item.gender} />
			<PetInfo title={'Age:'} item={item.age} />
			<PetInfo title={'Sterilized:'} item={item.sterilized} />
			<PetInfo title={'Vet Passport:'} item={item.vet_pasport} />
			<View>
				<Text>Individual notice (preferances):</Text>
				<Text style={styles.individualNoticeInput}>{item.info}</Text>
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
	const goToBackPoint = () => {
		navigation.goBack()
	}

	const addButton = () => {
		navigation.navigate('AddMyPet', {
			goToBackPoint: goToBackPoint,
			setCheckState: props.route.params.setCheckState,
		})
	}

	return <MyPetsListView addButton={addButton} pets={pets} petsCards={petsCards} />
}
