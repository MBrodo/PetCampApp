import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: 'rgba(60, 176, 157, 0.1)',
		width: '100%',
		height: '100%',
	},
	wrapper: {
		alignItems: 'center',
	},
	imageBackGround: {
		height: 140,
		width: '100%',
	},
	userInfo: {
		flexDirection: 'row',
		height: 140,
		width: 300,
		position: 'relative',
		top: 60,
		left: 30,
	},
	userPic: {
		height: 140,
		width: 140,
		borderRadius: 100,
		borderColor: 'white',
		borderWidth: 8,
	},
	uploadBGContainer: {
		position: 'absolute',
		top: 100,
		right: 20,
		justifyContent: 'center',
		alignItems: 'center',
		width: 33,
		height: 33,
		borderRadius: 16,
		backgroundColor: '#5D5FEF',
	},
	uploadImageContainer: {
		position: 'relative',
		top: 10,
		right: 30,
		justifyContent: 'center',
		alignItems: 'center',
		width: 33,
		height: 33,
		borderRadius: 16,
		backgroundColor: '#5D5FEF',
	},
	uploadBG: {
		color: 'white',
	},
	uploadUserPic: {
		color: 'white',
	},
	main: {
		width: '100%',
		marginTop: 80,
		paddingHorizontal: 40,
	},
	title: {
		fontSize: 20,
		color: 'black',
	},
	settingsContainer: {
		flexDirection: 'row',
		marginVertical: 10,
	},
	keyContainer: {
		marginVertical: 10,
		height: 200,
		width: 110,
		justifyContent: 'space-between',
	},
	valueContainer: {
		marginVertical: 10,
		height: 200,
		width: 200,
		justifyContent: 'space-between',
	},
	text: {
		fontSize: 13,
		color: 'black',
		height: 20,
	},
	button: {
		height: 25,
		width: 70,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#7879F1',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	buttonText: {
		color: '#7879F1',
	},
	buttonsContainer: {
		flexDirection: 'row',
		width: 200,
		justifyContent: 'space-between',
	},
	textInput: {
		fontSize: 13,
		height: 20,
		width: 150,
		backgroundColor: 'white',
		padding: 0,
		borderRadius: 4,
	},
})
