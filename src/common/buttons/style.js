import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
		marginVertical: 25,
	},
	acceptButtonText: {
		color: 'white',
		fontSize: 22,
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
	cancleButton: {
		borderWidth: 1,
		borderColor: '#E883B7',
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
	cancleButtonText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#E883B7',
	},
})
