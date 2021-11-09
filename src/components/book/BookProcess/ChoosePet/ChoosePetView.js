import React from 'react'
import { Text, View, ScrollView, Pressable } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { BookingButton } from '../../../../common/buttons/bookingButton'

export const ChoosePetView = (props) => {
	return (
		<ScrollView style={styles.UnLoggedScrollContainer}>
			<View style={styles.stepsContainer}>
				<View style={styles.localStepsContainer}>
					<Text style={styles.inActiveStepNumber}>1</Text>
					<Text style={styles.inActiveStepText}>book an option</Text>
				</View>
				<View style={styles.localStepsContainer}>
					<Text style={styles.activeStepNumber}>2</Text>
					<Text style={styles.activeStepText}>choose a pet</Text>
				</View>
				<View style={styles.localStepsContainer}>
					<Text style={styles.inActiveStepNumber}>3</Text>
					<Text style={styles.inActiveStepText}>payment</Text>
				</View>
			</View>

			<View style={styles.UnLoggedBookContainer}>
				<View style={styles.UnLoggedInsideBookContainer}>
					<View style={styles.articelContainer}>
						<Text style={styles.bookArticle}>My pets</Text>
					</View>
					<View>{props.petList.map((item) => props.myPetBlock(item))}</View>
					<View style={styles.addButtonContainer}>
						<View style={styles.addButton}>
							<Icon name={'plus'} size={30} color={'#5D5FEF'} />
						</View>
						<Text style={styles.addButtonText}>Add a pet</Text>
					</View>

					<BookingButton nextBookingStep={props.goToThirdStep} />
				</View>
			</View>
		</ScrollView>
	)
}
