import React from 'react'
import {
	Extrapolate,
	interpolate,
	useAnimatedProps,
	useAnimatedStyle,
	useSharedValue,
} from 'react-native-reanimated'
import { mix } from 'react-native-redash'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import TabbarView from './TabBarView'
import { SIZE, R, WIDTH, HEIGHT } from './svg'
import { useNavigation } from '@react-navigation/native'
import EncryptedStorage from 'react-native-encrypted-storage'
import { useDispatch } from 'react-redux'
import { setUserId } from '../../../redux/slices/userSlice'

const TabBarConatainer = () => {
	const insets = useSafeAreaInsets()
	const open = useSharedValue(0)
	const animatedProps = useAnimatedProps(() => {
		const progress = open.value
		const height = mix(progress, SIZE, HEIGHT)
		const width = interpolate(height, [SIZE, 2 * SIZE, HEIGHT], [SIZE, SIZE, WIDTH])
		const x = interpolate(width, [SIZE, WIDTH], [(WIDTH - SIZE) / 2, 0])
		const y = interpolate(height, [SIZE, HEIGHT], [HEIGHT - SIZE, 0])
		return {
			rx: R,
			ry: R,
			width,
			height,
			x,
			y,
		}
	})

	const content = useAnimatedStyle(() => ({
		opacity: interpolate(open.value, [0.75, 1], [0, 1], Extrapolate.CLAMP),
		transform: [{ translateY: mix(open.value, HEIGHT + insets.bottom, 0) }],
	}))

	const navigation = useNavigation()
	const goToProfile = () => {
		navigation.navigate('Profile')
	}

	async function removeUserSession() {
		try {
			await EncryptedStorage.removeItem('user_session')
		} catch (error) {}
	}
	const dispatch = useDispatch()
	const logOut = () => {
		removeUserSession()
		dispatch(setUserId([]))
	}

	return (
		<TabbarView
			goToProfile={goToProfile}
			content={content}
			animatedProps={animatedProps}
			insets={insets}
			open={open}
			logOut={logOut}
		/>
	)
}

export default TabBarConatainer
