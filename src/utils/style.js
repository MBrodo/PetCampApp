import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	passwordDefault: {
		flexDirection: 'row',
		borderRadius: 4,
		height: 50,
		marginTop: 5,
		borderWidth: 1,
	},
	inValidPassword: {
		flexDirection: 'row',
		borderRadius: 4,
		height: 50,
		marginTop: 5,
		borderWidth: 1,
		borderColor: 'red',
	},
	validPassword: {
		flexDirection: 'row',
		borderRadius: 4,
		height: 50,
		marginTop: 5,
		borderWidth: 1,
		borderColor: 'green',
	},
})
