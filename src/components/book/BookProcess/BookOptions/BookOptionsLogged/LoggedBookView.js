import React from 'react'
import { Text, View, Pressable, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { CheckBox } from 'react-native-elements'

import { styles } from './style'
import { BookingFooter } from '../../../../../common/footer/bookingFooter'
import { BookingButton } from '../../../../../common/buttons/bookingButoon'

export const LoggedBookView = (props) => {
	return (
		<ScrollView style={styles.UnLoggedScrollContainer}>
			<View style={styles.stepsContainer}>
				<View style={styles.localStepsContainer}>
					<Text style={styles.activeStepNumber}>1</Text>
					<Text style={styles.activeStepText}>book an option</Text>
				</View>
				<View style={styles.localStepsContainer}>
					<Text style={styles.inActiveStepNumber}>2</Text>
					<Text style={styles.inActiveStepText}>choose a pet</Text>
				</View>

				<View style={styles.localStepsContainer}>
					<Text style={styles.inActiveStepNumber}>3</Text>
					<Text style={styles.inActiveStepText}>payment</Text>
				</View>
			</View>

			<View style={styles.UnLoggedBookContainer}>
				<View style={styles.UnLoggedInsideBookContainer}>
					<View>
						<Text style={styles.bookArticle}>Avaliable hotels</Text>
					</View>
					<View>
						<Text style={styles.numberOfHotel}>{props.information.type} Hotel №1</Text>
					</View>
					<View style={styles.hotelStreetContainer}>
						<View style={styles.hotelStreet}>
							<Icon name={'map-marker-alt'} size={13} color={'black'} />
							<Text style={styles.cityOfHotel}>{props.information.city}</Text>
						</View>
						<Text style={styles.cityOfHotel}>{props.information.street}</Text>
					</View>
					<View>
						<Text style={styles.hotelRooms}>8 standard rooms are avaliable</Text>
					</View>
					<View>
						<View style={styles.priceBlock}>
							<Text style={styles.hotelPriceArticle}>PRICE:</Text>
							<Text style={styles.hotelPrice}>$ 12 / day</Text>
						</View>
						<View style={styles.priceBlock}>
							<Text style={styles.hotelPriceArticle}>PETS:</Text>
							<Text style={styles.hotelPrice}>{props.Quantity}</Text>
						</View>
					</View>
					<View style={styles.checkContainer}>
						<View style={styles.checkInContainer}>
							<Text style={styles.checkText}>CHECK-IN</Text>
							<Text style={styles.checkTime}>{props.dateText}</Text>
						</View>
						<View>
							<Text style={styles.checkText}>CHECK-OUT</Text>
							<Text style={styles.checkTime}>{props.dateTextEnd}</Text>
						</View>
					</View>
					<View>
						<View style={styles.additionalOptionsContainer}>
							<Text style={styles.additionalOptionsText}>Additional Options:</Text>
						</View>
						<View style={styles.petTransferOutSideContainer}>
							<View style={styles.petTransferContainer}>
								<CheckBox
									checkedColor="#4fa09285"
									containerStyle={styles.petTransferCheckBox}
									checked={props.transfer}
									onPress={() => {
										props.setTransfer()
									}}
								/>
								<Text style={styles.petTransferText}>Pet transfer </Text>
							</View>
							<View style={styles.petTransferContainer}>
								<Text style={styles.transferPriceText}>PRICE:</Text>
								<Text style={styles.transferPrice}>$ 5</Text>
							</View>
						</View>
						<View style={styles.infocontainer}>
							<View style={styles.iconContainer}>
								<Icon name={'info-circle'} size={10} color={'black'} />
							</View>
							<Text style={styles.infoText}>manger will contact you to agree on details</Text>
						</View>
						<View style={styles.petTransferOutSideContainer}>
							<View style={styles.petTransferContainer}>
								<CheckBox
									checkedColor="#4fa09285"
									containerStyle={styles.petTransferCheckBox}
									checked={props.grooming}
									onPress={() => {
										props.setGrooming()
									}}
								/>
								<Text style={styles.petTransferText}>Pet grooming </Text>
							</View>
							<View style={styles.petTransferContainer}>
								<Text style={styles.transferPriceText}>PRICE:</Text>
								<Text style={styles.transferPrice}>$ 2</Text>
							</View>
						</View>
						<View style={styles.totalPriceContainer}>
							<Text style={styles.additionalOptionsText}>Total price: {props.totalPrice()}$</Text>
						</View>
						<View>
							<Text style={styles.additionalOptionsText}>I state that:</Text>
						</View>
						<View style={styles.petAgreements}>
							<CheckBox
								checkedColor="#4fa09285"
								containerStyle={styles.petTransferCheckBox}
								checked={props.vaccinated}
								onPress={() => {
									props.setVaccinated()
								}}
							/>
							<Text style={styles.petTransferText}>My pet is vaccinated.</Text>
						</View>
						<View style={styles.petTransferContainer}>
							<CheckBox
								checkedColor="#4fa09285"
								containerStyle={styles.petTransferCheckBox}
								checked={props.agreement}
								onPress={() => {
									props.setAgreement()
								}}
							/>
							<Text style={styles.petTransferText}>I agree with Client Agreement</Text>
						</View>
						<BookingButton
							checkPoints={props.checkPoints()}
							checkButton={props.checkButton}
							nextBookingStep={props.goToSecondStep}
						/>
						<BookingFooter />
					</View>
				</View>
			</View>
		</ScrollView>
	)
}
