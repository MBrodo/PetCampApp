import { StyleSheet, Dimensions } from 'react-native'
import { SIZE, R, WIDTH, HEIGHT } from './TabBar/svg'

export const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	label: {
		color: 'white',
		textAlign: 'center',
		fontSize: 14,
		marginRight: 8,
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	content: {
		position: 'absolute',
		bottom: 20,
		right: (Dimensions.get('window').width - WIDTH) / 20,
		width: 60,
		height: 175,
		alignItems: 'center',
	},
	items: {
		height: HEIGHT - SIZE,
		justifyContent: 'space-evenly',
	},
	tabBarText: {
		fontSize: 12,
		color: 'white',
	},
})
