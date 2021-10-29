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
	},
	myPetOptions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	optionArticle: {
		fontSize: 12,
	},
	optionName: {
		fontSize: 16,
		color: 'black',
	},
	genderOptionsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,
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
		marginVertical: 30,
	},
	acceptButtonText: {
		color: 'white',
		fontSize: 22,
	},
})
