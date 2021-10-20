import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import { Book } from '../../screens/Book'
import { PriceList } from '../PriceList'
import { LogIn } from '../LogIn/LogIn'
import { Search } from '../Search'
import { Contacts } from '../Contacts'

const Tab = createBottomTabNavigator()

export function Navigation() {
	const tabBarOptions = ({ route }) => ({
		headerShown: false,
		tabBarActiveTintColor: 'rgb(31, 31, 31)',
		tabBarInactiveTintColor: 'white',
		tabBarInactiveBackgroundColor: '#4fa09285',
		tabBarActiveBackgroundColor: '#4fa09285',
		tabBarIcon: ({ focused, size, color }) => {
			let iconName
			if (route.name === 'Search') {
				iconName = 'search'
				size = focused ? 30 : 23
				color = focused ? '#297164' : 'white'
			} else if (route.name === 'PriceList') {
				iconName = 'money-check-alt'
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
			<Tab.Screen name="Search" component={Search} />
			<Tab.Screen name="PriceList" component={PriceList} />
			<Tab.Screen name="Book" component={Book} />
			<Tab.Screen name="Contacts" component={Contacts} />
			<Tab.Screen name="LogIn" component={LogIn} />
		</Tab.Navigator>
	)
}