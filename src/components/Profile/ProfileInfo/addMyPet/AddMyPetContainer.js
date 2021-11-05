import React, { useState } from 'react'
import { View, Text, Image, Pressable, TextInput } from 'react-native'
import { AddMyPetView } from './AddMyPetView'
import { PetCard } from '../../../../common/layouts/PetCard'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import { CheckBoxView } from '../../../../common/checkBoxes/checkBox'

export const AddMyPetContainer = () => {
	const [dog, setDog] = useState(true)
	const [cat, setCat] = useState(false)

	const checkPetState = () => {
		setDog(dog == false ? true : false)
		setCat(cat == false ? true : false)
	}

	const [male, setMale] = useState(true)
	const [female, setFemale] = useState(false)

	const checkGenderState = () => {
		setMale(male == false ? true : false)
		setFemale(female == false ? true : false)
	}

	const [sterilizedPositive, setSterilizedPositive] = useState(true)
	const [sterilizedNegative, setSterilizedNegative] = useState(false)

	const checkSterilizedState = () => {
		setSterilizedPositive(sterilizedPositive == false ? true : false)
		setSterilizedNegative(sterilizedNegative == false ? true : false)
	}

	const navigation = useNavigation()
	const addCardView = () => (
		<View style={styles.wrapper}>
			<View style={styles.myPetPhoto}>
				<Image source={require('../../../../img/ProfileMyPet.jpg')} />
				<TextInput placeholder={'add nickname'} style={styles.textInputNickName} />
			</View>
			<View style={styles.pointContainer}>
				<Text>Cat/Dog:</Text>
				<View style={styles.checkboxMainContainer}>
					<View style={styles.checkboxContainer}>
						<CheckBoxView checkState={checkPetState} toggleCheckBox={dog} />
						<Text style={styles.checkBoxText}>Dog</Text>
					</View>
					<View style={styles.checkboxContainer}>
						<CheckBoxView checkState={checkPetState} toggleCheckBox={cat} />
						<Text style={styles.checkBoxText}>Cat</Text>
					</View>
				</View>
			</View>
			<View style={styles.pointContainer}>
				<Text>Breed:</Text>
				<TextInput style={styles.textInput} />
			</View>
			<View style={styles.pointContainer}>
				<Text>Gender:</Text>
				<View style={styles.checkboxMainContainer}>
					<View style={styles.checkboxContainer}>
						<CheckBoxView checkState={checkGenderState} toggleCheckBox={female} />
						<Text style={styles.checkBoxText}>female</Text>
					</View>
					<View style={styles.checkboxContainer}>
						<CheckBoxView checkState={checkGenderState} toggleCheckBox={male} />
						<Text style={styles.checkBoxText}>male</Text>
					</View>
				</View>
			</View>
			<View style={styles.pointContainer}>
				<Text>Age, years full:</Text>
				<TextInput style={styles.textInputAge} />
				<Text style={styles.pointText}>years</Text>
			</View>
			<View style={styles.pointContainer}>
				<Text>Sterilized:</Text>
				<View style={styles.checkboxMainContainer}>
					<View style={styles.checkboxContainer}>
						<CheckBoxView checkState={checkSterilizedState} toggleCheckBox={sterilizedPositive} />
						<Text style={styles.checkBoxText}>yes</Text>
					</View>
					<View style={styles.checkboxContainer}>
						<CheckBoxView checkState={checkSterilizedState} toggleCheckBox={sterilizedNegative} />
						<Text style={styles.checkBoxText}>no</Text>
					</View>
				</View>
			</View>
			<View style={styles.pointContainer}>
				<Text>Vet Passport number:</Text>
				<TextInput style={styles.textInput} />
			</View>
			<View style={styles.individualNotice}>
				<Text>Individual notice (preferances):</Text>
				<TextInput style={styles.individualNoticeInput} />
			</View>
			<View style={styles.ButtonContainer}>
				<Pressable style={styles.changeButton}>
					<Text style={styles.changeButtonText}>Submit</Text>
				</Pressable>
				<Pressable onPress={() => navigation.goBack()} style={styles.cancleButton}>
					<Text style={styles.cancleButtonText}>Cancle</Text>
				</Pressable>
			</View>
		</View>
	)

	const addCard = () => <PetCard petInfo={addCardView} />
	return <AddMyPetView addCard={addCard} />
}
