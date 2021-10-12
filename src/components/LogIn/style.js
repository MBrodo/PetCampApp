import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
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
		height: 40,
		marginTop: 5,
		borderWidth: 1,
	},
	passwordText: {
		padding: 10,
		width: 280,
	},
	passwordIcon: {
		marginVertical: 8,
		marginLeft: 25,
	},
	logInButton: {
		color: '#5D5FEF',
		marginVertical: 30,
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
		position: 'absolute',
		top: 40,
		right: 30,
	},
	subContainer: {
		alignItems: 'center',
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
		height: 40,
		marginTop: 5,
		borderWidth: 1,
		padding: 10,
	},
})
