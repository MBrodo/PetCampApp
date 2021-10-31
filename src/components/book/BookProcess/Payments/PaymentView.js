import React from 'react'
import { Text, View, ScrollView, Pressable, Image } from 'react-native'
import { styles } from './style'

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
									<View style={styles.optionsContainer}>
										<Text style={styles.optionArticle}>Cat/Dog</Text>
										<Text style={styles.optionName}>Cat</Text>
									</View>
									<View style={styles.optionsContainer}>
										<Text style={styles.optionArticle}>Gender</Text>
										<Text style={styles.optionName}>m</Text>
									</View>
								</View>
								<View style={styles.genderOptionsContainer}>
									<View style={styles.optionsContainer}>
										<Text style={styles.optionArticle}>Name</Text>
										<Text style={styles.optionName}>Felix</Text>
									</View>
									<View style={styles.optionsContainer}>
										<Text style={styles.optionArticle}>Age</Text>
										<Text style={styles.optionName}>10 years</Text>
									</View>
								</View>
							</View>
							<View style={styles.bookingDates}>
								<Text style={styles.optionArticle}>Booking dates</Text>
								<Text style={styles.optionName}>01.10.2021-11.10.2021</Text>
							</View>
							<View style={styles.bookingPaymentsInfo}>
								<View style={styles.optionsContainer}>
									<Text style={styles.optionArticle}>Room</Text>
									<Text style={styles.optionName}>Room №1</Text>
								</View>
								<View style={styles.optionsContainer}>
									<Text style={styles.optionArticle}>PRICE</Text>
									<Text style={styles.optionName}>$120</Text>
								</View>
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
