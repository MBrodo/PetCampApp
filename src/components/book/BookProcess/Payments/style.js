import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	UnLoggedScrollContainer: {
		backgroundColor: 'rgba(60, 176, 157, 0.1)',
	},
	stepsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	localStepsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 20,
		marginHorizontal: 5,
	},
	activeStepNumber: {
		fontSize: 40,
		color: 'black',
		fontWeight: 'bold',
		marginRight: 5,
	},
	inActiveStepNumber: {
		fontSize: 40,
		color: '#848484',
		fontWeight: 'bold',
		marginRight: 5,
	},
	activeStepText: {
		color: 'black',
		fontSize: 14,
	},
	inActiveStepText: {
		color: '#848484',
		fontSize: 14,
	},
	UnLoggedBookContainer: {
		alignItems: 'center',
		height: '100%',
	},
	UnLoggedInsideBookContainer: {
		justifyContent: 'center',
		marginBottom: 50,
		width: 310,
		padding: 20,
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 6.27,
		elevation: 10,
	},
	bookArticle: {
		fontSize: 24,
		color: 'black',
		fontWeight: 'bold',
	},
	myPetContainer: {
		marginTop: 20,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#DFDFDF',
	},
	myPetOptionsContainer: {
		width: '75%',
		marginLeft: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	optionsContainer: {
		marginTop: 10,
	},
	bookingDates: {
		marginTop: 10,
		marginLeft: 15,
	},
	bookingPaymentsInfo: {
		marginTop: 10,
		marginBottom: 20,
		marginLeft: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '66%',
	},
	optionArticle: {
		fontSize: 12,
	},
	optionName: {
		fontSize: 16,
		color: 'black',
	},
	genderOptionsContainer: {
		justifyContent: 'space-between',
		marginRight: 20,
	},
	checkBoxOptions: {
		marginRight: 13,
	},
	addButtonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 15,
	},
	addButtonText: {
		fontSize: 16,
		color: 'black',
		marginLeft: 15,
	},
	addButton: {
		width: 50,
		height: 50,
		borderRadius: 25,
		borderWidth: 2.5,
		borderColor: '#5D5FEF',
		backgroundColor: '#7072ff38',
		borderStyle: 'dotted',
		justifyContent: 'center',
		alignItems: 'center',
	},
	acceptButtonContainer: {
		alignItems: 'center',
	},
	acceptButton: {
		width: 120,
		height: 40,
		backgroundColor: '#7879F1',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		marginVertical: 65,
	},
	acceptButtonText: {
		color: 'white',
		fontSize: 22,
	},
	paymentContainer: {
		alignItems: 'center',
	},
	paymentButton: {
		borderWidth: 1,
		borderColor: '#5D96CC',
		borderRadius: 5,
		paddingVertical: 5,
		paddingHorizontal: 20,
	},
	paymentText: {
		color: '#5D96CC',
		fontWeight: 'bold',
	},
	card: {
		backgroundColor: '#F2F2F2',
		textColor: '#000000',
		borderColor: '#000000',
		borderWidth: 1,
		borderRadius: 5,
	},
	cardContainer: {
		width: '95%',
		height: 50,
		marginVertical: 30,
		marginHorizontal: 10,
	},
})
