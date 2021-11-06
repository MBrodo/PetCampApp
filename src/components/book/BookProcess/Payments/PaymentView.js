import React from 'react'
import { Text, View, ScrollView, Pressable, Image } from 'react-native'
import { styles } from './style'
import { BookPetInfo } from '../../../../common/petInfo/BookPetInfo'

export const PaymentView = (props) => {
	return (
		<ScrollView style={styles.UnLoggedScrollContainer}>
			<View style={styles.stepsContainer}>
				<View style={styles.localStepsContainer}>
					<Text style={styles.inActiveStepNumber}>1</Text>
					<Text style={styles.inActiveStepText}>book an option</Text>
				</View>
				<View style={styles.localStepsContainer}>
					<Text style={styles.inActiveStepNumber}>2</Text>
					<Text style={styles.inActiveStepText}>choose a pet</Text>
				</View>
				<View style={styles.localStepsContainer}>
					<Text style={styles.activeStepNumber}>3</Text>
					<Text style={styles.activeStepText}>payment</Text>
				</View>
			</View>

			<View style={styles.UnLoggedBookContainer}>
				<View style={styles.UnLoggedInsideBookContainer}>
					<View>
						<Text style={styles.bookArticle}>My pets</Text>
					</View>
					<View style={styles.myPetContainer}>
						<View>
							<Image source={require('../../../../img/myPet.png')} />
						</View>
						<View>
							<View style={styles.myPetOptionsContainer}>
								<View style={styles.genderOptionsContainer}>
									<BookPetInfo title={'Cat/Dog:'} item={props.pet.type} />
									<BookPetInfo title={'Gender:'} item={props.pet.gender} />
								</View>
								<View style={styles.genderOptionsContainer}>
									<BookPetInfo title={'Name:'} item={props.pet.name} />
									<BookPetInfo title={'Age:'} item={props.pet.age} />
								</View>
							</View>
							<View style={styles.bookingDates}>
								<Text style={styles.optionArticle}>Booking dates</Text>
								<Text style={styles.optionName}>
									{props.dateStart} - {props.dateEnd}
								</Text>
							</View>
							<View style={styles.bookingPaymentsInfo}>
								<BookPetInfo title={'Room:'} item={'Room №1'} />
								<BookPetInfo title={'PRICE:'} item={`$ ${props.totalPrice}`} />
							</View>
						</View>
					</View>
					<View style={styles.acceptButtonContainer}>
						<Pressable onPress={() => props.thirdStep()} style={styles.acceptButton}>
							<Text style={styles.acceptButtonText}>Book</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</ScrollView>
	)
}
