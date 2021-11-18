import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	modalContainer: {
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(187, 187, 187, 0.2)',
	},
	wrapper: {
		backgroundColor: 'red',
		width: 300,
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
	titleText: {
		fontSize: 16,
		color: 'black',
		marginTop: 20,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginVertical: 25,
	},
	acceptButton: {
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6,
		borderWidth: 2,
		borderColor: '#999cff',
		paddingVertical: 5,
		paddingHorizontal: 25,
		borderRadius: 5,
		backgroundColor: 'white',
	},
	cancelButton: {
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6,
		borderWidth: 2,
		borderColor: '#ffaad6',
		paddingVertical: 5,
		paddingHorizontal: 25,
		borderRadius: 5,
		backgroundColor: 'white',
		marginLeft: 15,
	},
	cancelText: {
		color: '#ffaad6',
	},
	acceptText: {
		color: '#999cff',
	},
})
