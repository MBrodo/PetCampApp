import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		marginHorizontal: 20,
		marginVertical: 20,
	},
	screenTitle: {
		fontSize: 24,
		color: 'black',
		marginBottom: 12,
	},
	cityContainer: {
		flexDirection: 'row',
		marginBottom: 5,
		marginTop: 10,
	},
	categoryTitle: {
		color: 'black',
		fontSize: 16,
	},
	geolocationIcon: {
		marginRight: 5,
	},
	hotelInfoContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15,
	},
	text: {
		color: 'black',
		fontFamily: 'Montserrat-Regular',
		fontSize: 13,
	},
	appInfoContainer: {
		alignItems: 'center',
		marginVertical: 15,
	},
	appText: {
		color: 'black',
		fontFamily: 'Montserrat-Regular',
		fontSize: 10,
	},
	rigths: {
		marginTop: 15,
	},
	bodyMap: {
		width: '100%',
		height: 140,
	},
})
