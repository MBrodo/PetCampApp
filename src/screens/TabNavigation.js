import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import { PriceList } from '../components/PriceList'
import { LogIn } from '../components/LogIn'
import { FeedBack } from '../components/FeedBack'
import { Contacts } from '../components/Contacts'
import { BookAndAboutUs } from '../components/navigation/BookAndAboutUs'

const Tab = createBottomTabNavigator()

export function TabNavigation() {
	const tabBarOptions = ({ route }) => ({
		headerShown: false,
		tabBarActiveTintColor: 'rgb(31, 31, 31)',
		tabBarInactiveTintColor: 'white',
		tabBarInactiveBackgroundColor: '#4fa09285',
		tabBarActiveBackgroundColor: '#4fa09285',
		tabBarIcon: ({ focused, size, color }) => {
			let iconName
			if (route.name === 'PriceList') {
				iconName = 'money-check-alt'
				size = focused ? 30 : 23
				color = focused ? '#297164' : 'white'
			} else if (route.name === 'FeedBack') {
				iconName = 'comments'
				size = focused ? 30 : 23
				color = focused ? '#297164' : 'white'
			} else if (route.name === 'Book') {
				iconName = 'search'
				size = focused ? 33 : 30
				color = focused ? '#297164' : 'white'
			} else if (route.name === 'Contacts') {
				iconName = 'id-badge'
				size = focused ? 30 : 23
				color = focused ? '#297164' : 'white'
			} else if (route.name === 'LogIn') {
				iconName = 'user'
				size = focused ? 30 : 23
				color = focused ? '#297164' : 'white'
			}

			return <Icon name={iconName} size={size} color={color} />
		},
	})

	return (
		<Tab.Navigator initialRouteName="Book" screenOptions={tabBarOptions}>
			<Tab.Screen name="PriceList" component={PriceList} />
			<Tab.Screen name="FeedBack" component={FeedBack} />
			<Tab.Screen name="Book" component={BookAndAboutUs} />
			<Tab.Screen name="Contacts" component={Contacts} />
			<Tab.Screen name="LogIn" component={LogIn} />
		</Tab.Navigator>
	)
}
