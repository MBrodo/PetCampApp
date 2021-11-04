import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	mainScroll: {
		backgroundColor: 'rgba(60, 176, 157, 0.1)',
	},
	mainBlock: {
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardContainer: {
		width: 250,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 20,
		borderRadius: 5,
		backgroundColor: 'white',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6,
	},
	addCardContainer: {
		width: 250,
		marginTop: 20,
		marginBottom: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		backgroundColor: 'white',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6,
	},
	wrapper: {
		width: '85%',
		marginVertical: 10,
	},
	myPetPhoto: {
		marginTop: 30,
		alignItems: 'center',
	},
	myPetPhotoText: {
		marginTop: 5,
		fontSize: 20,
		color: 'black',
	},
	pointContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginVertical: 5,
	},
	pointText: {
		fontSize: 14,
		color: 'black',
	},
	ButtonContainer: {
		justifyContent: 'center',
		flexDirection: 'row',
		marginBottom: 20,
	},
	changeButton: {
		borderWidth: 1,
		borderColor: '#7879F1',
		borderRadius: 5,
		paddingVertical: 5,
		paddingHorizontal: 15,
		backgroundColor: 'white',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 4,
	},
	changeButtonText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#7879F1',
	},
	addPetContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 130,
	},
	addPetButton: {
		width: 150,
		height: 150,
		borderRadius: 75,
		backgroundColor: '#E9EAFF',
		borderWidth: 2,
		borderStyle: 'dotted',
		borderColor: '#5D5FEF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	addPetIcon: {
		color: '#5D5FEF',
	},
	addPetText: {
		marginTop: 20,
		fontSize: 20,
		color: 'black',
	},
})
