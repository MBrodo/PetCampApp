import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	UnLoggedBookContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		backgroundColor: 'rgba(60, 176, 157, 0.1)',
	},
	UnLoggedInsideBookContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 50,
		paddingVertical: 50,
		width: 310,
		padding: 20,
		backgroundColor: '#FFFFFF',
		borderRadius: 4,
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
	congratsTextContainer: {
		alignItems: 'center',
		marginTop: 10,
	},
	congratsText: {
		fontSize: 16,
	},
})
