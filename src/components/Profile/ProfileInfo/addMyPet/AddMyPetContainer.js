import React, { useState } from 'react'
import { View, Text, Image, Pressable, TextInput } from 'react-native'
import { AddMyPetView } from './AddMyPetView'
import { PetCard } from '../../../../common/layouts/PetCard'
import { styles } from './style'
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native'

export const AddMyPetContainer = () => {
	const [toggleCheckBox, setToggleCheckBox] = useState(false)
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
						<CheckBox
							style={styles.checkBox}
							disabled={false}
							value={toggleCheckBox}
							onValueChange={(newValue) => setToggleCheckBox(newValue)}
						/>
						<Text style={styles.checkBoxText}>Dog</Text>
					</View>
					<View style={styles.checkboxContainer}>
						<CheckBox
							style={styles.checkBox}
							disabled={false}
							value={toggleCheckBox}
							onValueChange={(newValue) => setToggleCheckBox(newValue)}
						/>
						<Text style={styles.checkBoxText}>Dog</Text>
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
						<CheckBox
							style={styles.checkBox}
							disabled={false}
							value={toggleCheckBox}
							onValueChange={(newValue) => setToggleCheckBox(newValue)}
						/>
						<Text style={styles.checkBoxText}>female</Text>
					</View>
					<View style={styles.checkboxContainer}>
						<CheckBox
							style={styles.checkBox}
							disabled={false}
							value={toggleCheckBox}
							onValueChange={(newValue) => setToggleCheckBox(newValue)}
						/>
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
						<CheckBox
							style={styles.checkBox}
							disabled={false}
							value={toggleCheckBox}
							onValueChange={(newValue) => setToggleCheckBox(newValue)}
						/>
						<Text style={styles.checkBoxText}>yes</Text>
					</View>
					<View style={styles.checkboxContainer}>
						<CheckBox
							style={styles.checkBox}
							disabled={false}
							value={toggleCheckBox}
							onValueChange={(newValue) => setToggleCheckBox(newValue)}
						/>
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
