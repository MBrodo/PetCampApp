import React from 'react'
import { View, Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import Animated, { withTiming } from 'react-native-reanimated'
import Svg, { Defs, LinearGradient, Mask, Path, Rect, Stop } from 'react-native-svg'

import Row from '../Row'
import { styles } from '../style'
import { COLOR, END_COLOR, WIDTH, HEIGHT, d } from './svg'

const AnimatedRect = Animated.createAnimatedComponent(Rect)

const TabbarView = (props) => {
	return (
		<>
			<View>
				<View pointerEvents="none">
					<Svg width={WIDTH} height={HEIGHT}>
						<Defs>
							<LinearGradient
								id="gradient"
								x1={WIDTH / 2}
								y1={0}
								x2={WIDTH / 2}
								y2={HEIGHT}
								gradientUnits="userSpaceOnUse"
							>
								<Stop offset={0} stopColor={END_COLOR} />
								<Stop offset={1} stopColor={COLOR} />
							</LinearGradient>
							<Mask id="mask">
								<AnimatedRect animatedProps={props.animatedProps} fill="white" />
							</Mask>
						</Defs>
						<Path d={d} fill="url(#gradient)" mask="url(#mask)" />
					</Svg>
				</View>
				<View style={styles.overlay}>
					<TouchableWithoutFeedback
						onPress={() => {
							props.open.value = withTiming(props.open.value === 1 ? 0 : 1)
						}}
					>
						<Icon name="user" color="white" size={25} />
					</TouchableWithoutFeedback>
					<Text style={styles.tabBarText}>Profile</Text>
				</View>
			</View>

			<Animated.View
				style={[
					styles.content,
					{
						bottom: props.insets.bottom,
					},
					props.content,
				]}
				pointerEvents="box-none"
			>
				<View style={styles.items}>
					<Row label="Logout" onPress={props.logOut} />
					<Row label="Profile" onPress={props.goToProfile} />
				</View>
			</Animated.View>
		</>
	)
}

export default TabbarView
