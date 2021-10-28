import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	UnLoggedBookContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		backgroundColor: 'rgba(60, 176, 157, 0.1)',
	},
	UnLoggedInsideBookContainer: {
		justifyContent: 'center',
		width: 310,
		height: 320,
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
	},
	hotelPriceArticle: {
		fontSize: 14,
		color: '#A0A0A0',
	},
	hotelPrice: {
		fontSize: 14,
		color: 'black',
		marginLeft: 3,
	},
	getLogInContainer: {
		alignItems: 'center',
		marginTop: 20,
	},
	getLogInInsideContainer: {
		width: '80%',
		alignItems: 'center',
	},
	getLogInText: {
		fontSize: 16,
		color: '#FF1066',
		textAlign: 'center',
	},
	footerContainer: {
		flexDirection: 'row',
		marginTop: 35,
	},
	footerContainerInside: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	iconContainer: {
		marginTop: 2,
		marginRight: 3,
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
