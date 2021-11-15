import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	UnLoggedSettingsContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		backgroundColor: 'rgba(60, 176, 157, 0.1)',
	},
	UnLoggedInsideSettingsContainer: {
		justifyContent: 'center',
		width: 310,
		height: 320,
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
	UnLoggedArticle: {
		textAlign: 'center',
		fontSize: 24,
		color: 'black',
		fontWeight: 'bold',
	},
	UnLoggedText: {
		marginTop: 10,
		fontSize: 16,
		color: '#FF1066',
		textAlign: 'center',
		marginBottom: 35,
	},
})
