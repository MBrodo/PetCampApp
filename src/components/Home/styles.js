import {
	StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
	headerContainer: {
		justifyContent: 'flex-start',
		height: 155,
	},
	imageBackGround: {
		width: '100%',
		height: 190,
	},
	headerBlock: {
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	headerArticleContainer: {
		marginLeft: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerArticle: {
		color: '#594334',
		fontSize: 45,
		fontFamily: 'Bahianita-Regular',
	},
	headerInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 10
	},
	headerText: {
		color: 'black',
		fontSize: 13,
		fontFamily: 'Bahianita-Regular',
	},
	headerPhoneNumber: {
		color: 'black',
		fontSize: 17,
		fontFamily: 'Bahianita-Regular',
		marginLeft: 10
	},
	inputContainer: {
		flexDirection: 'row',
		backgroundColor: '#E1E1E1',
		alignItems: 'center',
	},
	bodyInput: {
		backgroundColor: '#E1E1E1',
		paddingLeft: 30,
		width: '90%'
	},
	descriptionContainer: {
		marginHorizontal: 10,
		marginVertical: 10
	},
	descriptionArticle: {
		color: 'black',
		fontSize: 30,
		fontFamily: 'Bahianita-Regular',
	},
	descriptionText: {
		color: 'black',
		fontSize: 14,
	},
	bookContainer: {
		alignItems: 'center',
	},
	bookButton: {
		alignItems: 'center',
		width: '60%',
		backgroundColor: '#5D5FEF',
		borderRadius: 5,
		padding: 5
	},
	bookText: {
		color: 'white',
		fontSize: 30,
		fontFamily: 'Bahianita-Regular',
	},
	galleryArticleContainer: {
		marginLeft: 10,
		marginTop: 10
	},
	galleryArticle: {
		color: 'black',
		fontSize: 30,
		fontFamily: 'Bahianita-Regular',
	},
	footerImageContainer: {
		flexDirection: 'row',
	},
	scrollImages: {
		flexDirection: 'row',
		marginTop: 10,
		alignSelf: 'center',
	},
	circle: {
		width: 5,
		height: 5,
		backgroundColor: '#C4C4C4',
		borderRadius: 20,
		marginHorizontal: 3
	},
	circleActive: {
		width: 5,
		height: 5,
		backgroundColor: 'black',
		borderRadius: 20,
		marginHorizontal: 3
	},
	socialContainer: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginVertical: 20,
		marginHorizontal: 10
	},
	socialArticle: {
		textAlign: 'center',
		color: 'black',
		fontSize: 30,
		fontFamily: 'Bahianita-Regular',
	},
	socialIconsContainer: {
		justifyContent: 'center',
		flexDirection: 'row',
	},
	socialIcon1: {
		marginHorizontal: 5,
		color: 'blue'
	},
	socialIcon2: {
		marginHorizontal: 5,
		color: 'rgb(255, 131, 255)'
	}
});