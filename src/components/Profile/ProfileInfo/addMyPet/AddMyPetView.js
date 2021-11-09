import React from 'react'
import { View, Text, Image, Pressable, TextInput } from 'react-native'
import { styles } from './style'
import { PetCard } from '../../../../common/layouts/PetCard'
import { AddCardCheckBox } from '../../../../common/checkBoxes/addCardCheckBox'

export const AddMyPetView = (props) => {
	const addCardView = () => (
		<View style={styles.wrapper}>
			<View style={styles.myPetPhoto}>
				<Image style={styles.picture} source={props.checkImage()} />
				<TextInput
					onChangeText={(item) => props.petNickName(item)}
					placeholder={'add nickname'}
					style={styles.textInputNickName}
				/>
			</View>
			<AddCardCheckBox
				name={'Cat/Dog:'}
				firstCheckBoxName={'Dog'}
				SecondCheckBoxName={'Cat'}
				checkPetState={props.checkPetState}
				firstCheckBoxItem={props.petInfoContainer.dog}
				secondCheckBoxItem={props.petInfoContainer.cat}
			/>
			<View style={styles.pointContainer}>
				<Text>Breed:</Text>
				<TextInput onChangeText={(item) => props.breed(item)} style={styles.textInput} />
			</View>
			<AddCardCheckBox
				name={'Gender:'}
				firstCheckBoxName={'female'}
				SecondCheckBoxName={'male'}
				checkPetState={props.checkGenderState}
				firstCheckBoxItem={props.petInfoContainer.female}
				secondCheckBoxItem={props.petInfoContainer.male}
			/>
			<View style={styles.pointContainer}>
				<Text>Age, years full:</Text>
				<TextInput onChangeText={(item) => props.petAge(item)} style={styles.textInputAge} />
				<Text style={styles.pointText}>years</Text>
			</View>
			<AddCardCheckBox
				name={'Sterilized:'}
				firstCheckBoxName={'yes'}
				SecondCheckBoxName={'no'}
				checkPetState={props.checkSterilizedState}
				firstCheckBoxItem={props.petInfoContainer.sterilizedPositive}
				secondCheckBoxItem={props.petInfoContainer.sterilizedNegative}
			/>
			<View style={styles.pointContainer}>
				<Text>Vet Passport number:</Text>
				<TextInput onChangeText={(item) => props.petVetPassport(item)} style={styles.textInput} />
			</View>
			<View style={styles.individualNotice}>
				<Text>Individual notice (preferances):</Text>
				<TextInput
					onChangeText={(item) => props.petInfo(item)}
					style={styles.individualNoticeInput}
				/>
			</View>
			<View style={styles.ButtonContainer}>
				<Pressable
					onPress={() => {
						props.SendNewCard()
						props.goToBackPoint()
					}}
					style={styles.changeButton}
				>
					<Text style={styles.changeButtonText}>Submit</Text>
				</Pressable>
				<Pressable
					onPress={() => {
						props.goToBackPoint()
						props.backPoint()
					}}
					style={styles.cancleButton}
				>
					<Text style={styles.cancleButtonText}>Cancle</Text>
				</Pressable>
			</View>
		</View>
	)
	return (
		<View style={styles.mainBlock}>
			<PetCard petInfo={addCardView} />
		</View>
	)
}
