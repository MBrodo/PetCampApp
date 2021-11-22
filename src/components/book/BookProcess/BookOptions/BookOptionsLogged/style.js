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
	numberOfHotel: {
		fontSize: 16,
		color: 'black',
		marginTop: 16,
	},
	hotelStreetContainer: {
		flexDirection: 'row',
		marginTop: 5,
	},
	hotelStreet: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 40,
	},
	cityOfHotel: {
		fontSize: 14,
		color: 'black',
		marginLeft: 5,
	},
	hotelRooms: {
		fontSize: 12,
		color: 'black',
	},
	priceBlock: {
		flexDirection: 'row',
		marginTop: 10,
		justifyContent: 'flex-start',
	},
	priceContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginRight: 60,
		marginTop: 5,
	},
	hotelPriceArticle: {
		fontSize: 14,
		color: '#A0A0A0',
		fontWeight: 'bold',
		marginRight: 5,
	},
	hotelPrice: {
		fontSize: 14,
		color: 'black',
		marginLeft: 3,
		fontWeight: 'bold',
	},
	checkContainer: {
		flexDirection: 'row',
		marginTop: 15,
	},
	checkInContainer: {
		marginRight: 40,
	},
	checkText: {
		fontSize: 12,
	},
	checkTime: {
		fontSize: 12,
		color: 'black',
		fontWeight: 'bold',
	},
	additionalOptionsContainer: {
		marginTop: 15,
	},
	additionalOptionsText: {
		fontSize: 16,
		color: 'black',
	},
	petTransferOutSideContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 5,
		justifyContent: 'space-between',
	},
	petTransferContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	petTransferCheckBox: {
		padding: 0,
		margin: 0,
		width: 11,
		position: 'relative',
		left: -9,
	},
	petTransferText: {
		fontSize: 14,
	},
	transferPriceText: {
		color: '#A0A0A0',
		fontWeight: 'bold',
		fontSize: 14,
	},
	transferPrice: {
		fontWeight: 'bold',
		color: 'black',
		fontSize: 14,
		marginLeft: 4,
	},
	infocontainer: {
		flexDirection: 'row',
		marginVertical: 4,
	},
	infoText: {
		fontSize: 10,
	},
	petAgreements: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 2,
	},
	totalPriceContainer: {
		marginVertical: 20,
	},
	footerContainer: {
		flexDirection: 'row',
	},
	footerContainerInside: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	iconContainer: {
		marginTop: 2,
		marginRight: 3,
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
		marginVertical: 25,
	},
	acceptButtonText: {
		color: 'white',
		fontSize: 22,
	},
	footerText: {
		fontSize: 10,
		marginLeft: 3,
	},
	footerFocusText: {
		fontSize: 10,
		color: 'black',
		fontWeight: 'bold',
		marginLeft: 3,
	},
})
