import {
	StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
	bookOutsidecontainer: {
		alignItems: 'center',
	},
	bookInsideContainer: {
		width: '90%'
	},
	bookArticle: {
		color: '#297164',
		fontSize: 42,
		fontFamily: 'Bahianita-Regular',
	},
	checkBoxContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		backgroundColor: '#F2F2F2'
	},
	checkBox: {
		backgroundColor: '#F2F2F2',
		borderWidth: 0,
	},
	checkBoxTextStyle: {
		color: 'black',
		fontSize: 15,
	},
	checkBoxFontFamily: {
		fontFamily: 'Bahianita-Regular',
	},
	bookSelectArticle: {
		color: 'black',
		fontSize: 30,
		fontFamily: 'Bahianita-Regular',
	},
	bodyContainer: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	bodyButtonActive: {
		width: '50%',
		borderBottomWidth: 5,
		borderBottomColor: '#297164',
		alignItems: 'center',
		paddingVertical: 10,
	},
	bodyButtonInactive: {
		width: '50%',
		borderBottomWidth: 1,
		borderBottomColor: '#94949485',
		alignItems: 'center',
		paddingVertical: 10
	},
	bodyTextActive: {
		color: '#297164'
	},
	bodyTextInactive: {
		borderBottomColor: '#94949485',
	},
	optionsContainer: {
		marginVertical: '8%'
	},
	bodyMap: {
		width: '100%',
		height: 140,
	},
	bodyCountryList: {
		width: '100%',
		height: 140,
	},
	countryActive: {
		color: '#297164',
	},
	countryInactive: {
		color: 'gray',
	},
	mainDateContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	dateContainer: {
		width: 150,
		height: 50,
		borderWidth: 1,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	dateText: {
		fontSize: 15,
		color: '#76707F'
	},
	dateIcon: {
		color: 'black'
	},
	dateLineContainer: {
		justifyContent: 'center'
	},
	dateLine: {
		width: 15,
		borderWidth: 1,
		backgroundColor: 'black'
	},
	footerButton: {
		width: '100%',
		height: 50,
		backgroundColor: '#5D5FEF',
		borderRadius: 5,
		marginTop: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	footerButtonText: {
		color: 'white',
		fontSize: 28,
		fontFamily: 'Bahianita-Regular',
	}
});