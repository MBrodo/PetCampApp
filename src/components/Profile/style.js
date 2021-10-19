import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: 'rgba(79,160,146, 0.2)',
		width: '100%',
		height: 1200,
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
	uploadUserPic: {
		color: '#5D5FEF',
		position: 'relative',
		top: 10,
		right: 30,
	},
	userName: {
		color: 'black',
		fontSize: 40,
		fontFamily: 'Bahianita-Regular',
		marginTop: 90,
	},
	main: {
		width: '100%',
		marginTop: 60,
		paddingHorizontal: 30,
	},
	container: {
		backgroundColor: 'white',
		height: 300,
		marginTop: 20,
		borderRadius: 7,
		padding: 20,
	},
	containerHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	containerTitle: {
		fontSize: 20,
		color: 'black',
	},
	containerLink: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	containerLinkText: {
		fontSize: 20,
		color: '#5D5FEF',
	},
	containerLinkIcon: {
		color: '#5D5FEF',
		marginLeft: 10,
	},
	containerMain: {},
	containerElement: {
		height: 110,
		paddingVertical: 10,
		flexDirection: 'row',
	},
	petPic: {
		height: 50,
		width: 50,
		borderRadius: 100,
		marginTop: 5,
	},
	elementMain: {
		width: '80%',
	},
	elementFloor: {
		flexDirection: 'row',
		marginVertical: 5,
		justifyContent: 'space-around',
	},
	elementFloorAlt: {
		flexDirection: 'row',
		marginVertical: 5,
		justifyContent: 'space-between',
	},
	elementInfo: {
		alignItems: 'center',
		width: 80,
	},
	elementInfoAlt: {
		alignItems: 'center',
	},
	elementInfoDate: {
		width: 200,
	},
	elementText: {
		color: 'black',
	},
	myReportsIcon: {
		position: 'relative',
		bottom: 55,
	},
	myReportsCamera: {
		position: 'relative',
		bottom: 15,
		left: 15,
	},
	borderLine: {
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
		marginVertical: 8,
	},
})
