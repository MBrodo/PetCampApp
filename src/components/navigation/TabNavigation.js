import React, { useState } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import { View, TouchableWithoutFeedback, Text } from 'react-native'

import { PriceList } from '../PriceList'
import { Search } from '../Search'
import { Contacts } from '../Contacts'
import { BookAndAboutUs } from './BookAndAboutUs'
import { MyProfileStackNavigation } from './MyProfileStackNavigation'
import { styles } from '../../screens/styles'

const Tab = createBottomTabNavigator()

export function TabNavigation({ navigation }) {
	const tabBarButton = () => (
		<TouchableWithoutFeedback onPress={() => navigation.navigate('Bookpage')}>
			<View style={styles.outsideNavigationContainer}>
				<View style={styles.navigationButton}>
					<Text style={styles.navigationButtonText}>Book</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)

	const sizeBook = (focused) => {
		return focused ? 33 : 30
	}

	const tabBarOptions = ({ route }) => ({
		tabBarLabelStyle: {
			fontSize: 11,
			marginBottom: 2,
		},
		headerShown: false,
		tabBarActiveTintColor: 'rgb(31, 31, 31)',
		tabBarInactiveTintColor: 'white',
		tabBarInactiveBackgroundColor: '#3CB09D',
		tabBarActiveBackgroundColor: '#3CB09D',
		tabBarIcon: ({ focused, size, color, tabBarVisible }) => {
			let iconName
			if (route.name === 'Search') {
				iconName = 'search'
				size = focused ? 30 : 25
				color = focused ? '#297164' : 'white'
			} else if (route.name === 'PriceList') {
				iconName = 'money-check-alt'
				size = focused ? 30 : 25
				color = focused ? '#297164' : 'white'
			} else if (route.name === 'Contacts') {
				iconName = 'id-badge'
				size = focused ? 30 : 25
				color = focused ? '#297164' : 'white'
			} else if (route.name === 'LogIn') {
				iconName = 'user'
				size = focused ? 30 : 25
				color = focused ? '#297164' : 'white'
			}

			return <Icon name={iconName} size={size} color={color} />
		},
	})
	const [authenticate, setAuthenticate] = useState(false)
	return (
		<Tab.Navigator initialRouteName="Book" screenOptions={tabBarOptions}>
			<Tab.Screen name="Search" component={Search} />
			<Tab.Screen name="PriceList" component={PriceList} />
			<Tab.Screen
				name="Book"
				options={{
					tabBar: { visible: false },
					tabBarIcon: tabBarButton,
					tabBarLabelStyle: {
						fontSize: 0,
					},
				}}
			>
				{() => <BookAndAboutUs authenticate={authenticate} />}
			</Tab.Screen>
			<Tab.Screen name="Contacts" component={Contacts} />
			<Tab.Screen name="LogIn">
				{() => (
					<MyProfileStackNavigation authenticate={authenticate} setAuthenticate={setAuthenticate} />
				)}
			</Tab.Screen>
		</Tab.Navigator>
	)
}
