import React from 'react'
import { Text, View, ScrollView, Pressable, Image } from 'react-native'
import { styles } from './style'
import { BookPetInfo } from '../../../../common/petInfo/BookPetInfo'
import { images } from '../../../Profile/ProfileInfo/addMyPet/AddMyPetContainer'

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
					{props.pet.map((item, index) => (
						<View key={item.id} style={styles.myPetContainer}>
							<View>
								<Image style={styles.picture} source={images.defaultImage} />
							</View>
							<View>
								<View style={styles.myPetOptionsContainer}>
									<View style={styles.genderOptionsContainer}>
										<BookPetInfo title={'Cat/Dog:'} item={item.type} />
										<BookPetInfo title={'Gender:'} item={item.gender} />
									</View>
									<View style={styles.genderOptionsContainer}>
										<BookPetInfo title={'Name:'} item={item.name} />
										<BookPetInfo title={'Age:'} item={item.age} />
									</View>
								</View>
								<View style={styles.bookingDates}>
									<Text style={styles.optionArticle}>Booking dates</Text>
									<Text style={styles.optionName}>
										{props.bookingDateStart} - {props.bookingDateEnds}
									</Text>
								</View>
								<View style={styles.bookingPaymentsInfo}>
									<BookPetInfo
										title={'Room:'}
										room={props.freeRooms[index]}
										item={props.freeRooms[index].room_number}
									/>
									<BookPetInfo title={'PRICE:'} item={`$ ${props.totalPrice}`} />
								</View>
							</View>
						</View>
					))}
					<View style={styles.acceptButtonContainer}>
						<Pressable onPress={() => props.goToPayment()} style={styles.acceptButton}>
							<Text style={styles.acceptButtonText}>Book</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</ScrollView>
	)
}
