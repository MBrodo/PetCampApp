import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	background: {
		backgroundColor: 'rgba(60, 176, 157, 0.1)',
	},
	main: {
		marginHorizontal: 20,
		marginTop: 10,
		marginBottom: 20,
	},
	header: {
		color: 'black',
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	titleText: {
		color: 'black',
		fontSize: 20,
	},
	petDescription: {
		color: 'rgba(0, 0, 0, 0.5)',
		fontSize: 15,
		marginBottom: 5,
	},
	image: {
		height: 100,
		width: 100,
		marginVertical: 15,
	},
	petBlockFooter: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,
	},
	roomText: {
		color: 'black',
		fontSize: 15,
		marginBottom: 5,
	},
	priceBlock: {
		flexDirection: 'row',
	},
	priceTitle: {
		fontSize: 15,
		color: '#A0A0A0',
		fontWeight: 'bold',
	},
	priceText: {
		color: 'black',
		fontSize: 15,
		fontWeight: 'bold',
	},
	line: {
		height: 1,
		width: '100%',
		borderRadius: 1,
		borderWidth: 1,
		borderColor: 'gray',
		borderStyle: 'dashed',
		marginVertical: 10,
	},
	optionsBlock: {
		marginVertical: 10,
	},
})
