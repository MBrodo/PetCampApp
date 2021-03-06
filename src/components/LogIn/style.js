import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		marginVertical: 20,
	},
	logInSection: {
		width: 350,
	},
	logInTitle: {
		fontFamily: 'bahianita-regular',
		fontWeight: '400',
		fontSize: 30,
	},
	logInText: {
		marginTop: 10,
		fontFamily: 'bahianita-regular',
		fontWeight: '400',
		fontSize: 22,
	},
	logInAlternativeText: {
		width: 30,
		height: 40,
		textAlign: 'center',
		fontSize: 24,
	},
	passwordInput: {
		flexDirection: 'row',
		borderRadius: 4,
		height: 50,
		marginTop: 5,
		borderWidth: 1,
	},
	passwordText: {
		padding: 10,
		width: 280,
	},
	passwordIcon: {
		marginVertical: 13,
		marginLeft: 25,
	},
	logInButton: {
		marginVertical: 30,
		backgroundColor: '#5D5FEF',
		height: 50,
		borderWidth: 1,
		borderRadius: 4,
		alignItems: 'center',
	},
	logInButtonText: {
		fontFamily: 'bahianita-regular',
		fontWeight: '400',
		fontSize: 22,
		color: 'white',
		marginVertical: 7,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
	closeIcon: {
		position: 'relative',
		top: '12.5%',
		left: '89%',
		width: 30,
	},
	subContainer: {
		alignItems: 'center',
		marginBottom: 40,
	},
	fbicon: {
		color: '#4267B2',
		marginVertical: 5,
	},
	subContainerText: {
		flexDirection: 'row',
		marginTop: 10,
	},
	subContainerLink: {
		fontSize: 20,
		color: 'red',
	},
	subContainerTitle: {
		fontSize: 20,
		marginRight: 30,
	},
	textWithLines: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	alternativeLine: {
		flex: 1,
		height: 1,
		backgroundColor: 'black',
	},
	input: {
		borderRadius: 4,
		height: 50,
		marginTop: 5,
		borderWidth: 1,
		padding: 10,
	},
})
