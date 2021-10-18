import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import { View, TouchableWithoutFeedback } from 'react-native'

import { PriceList } from '../PriceList'
import { LogIn } from '../LogIn/LogIn'
import { Search } from '../Search'
import { Contacts } from '../Contacts'
import { BookAndAboutUs } from './BookAndAboutUs'

import { styles } from '../../screens/styles'

const Tab = createBottomTabNavigator()

export function TabNavigation({ navigation }) {
	const sizeBook = (focused) => {
		return focused ? 33 : 30
	}

	const tabBarOptions = ({ route }) => ({
		headerShown: false,
		tabBarActiveTintColor: 'rgb(31, 31, 31)',
		tabBarInactiveTintColor: 'white',
		tabBarInactiveBackgroundColor: '#4fa09285',
		tabBarActiveBackgroundColor: '#4fa09285',
		tabBarIcon: ({ focused, size, color, tabBarVisible }) => {
			let iconName
			if (route.name === 'Search') {
				iconName = 'search'
				size = focused ? 30 : 23
				color = focused ? '#297164' : 'white'
			} else if (route.name === 'PriceList') {
				iconName = 'money-check-alt'
				size = focused ? 30 : 23
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
			<Tab.Screen
				name="Book"
				component={BookAndAboutUs}
				options={{
					tabBar: { visible: false },
					tabBarIcon: ({ focused }) => (
						<TouchableWithoutFeedback onPress={() => navigation.navigate('Bookpage')}>
							<View style={styles.outsideNavigationContainer}>
								<View style={styles.navigationButton}>
									<Icon name="search" size={sizeBook(focused)} color={'white'} />
								</View>
							</View>
						</TouchableWithoutFeedback>
					),
				}}
			/>
			<Tab.Screen name="Contacts" component={Contacts} />
			<Tab.Screen name="LogIn" component={LogIn} />
		</Tab.Navigator>
	)
}
