import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { LogIn } from '../LogIn/LogIn'
import { ProfileSettingsContainer } from '../Profile/ProfileInfo/profileSettings/ProfileSettingsContainer'
import { MyPetsContainer } from '../Profile/ProfileInfo/myPets/MyPetsContainer'
import { MyBookingContainer } from '../Profile/ProfileInfo/myBooking/MyBookingContainer'
import { MyReportsContainer } from '../Profile/ProfileInfo/myReports/MyReportsContainer'

const Stack = createStackNavigator()

export const MyProfileStackNavigation = (props) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName={'signIn'}
		>
			<Stack.Screen name="signIn">
				{() => <LogIn authenticate={props.authenticate} setAuthenticate={props.setAuthenticate} />}
			</Stack.Screen>
			<Stack.Screen name="ProfileSettingsContainer" component={ProfileSettingsContainer} />
			<Stack.Screen name="MyPetsContainer" component={MyPetsContainer} />
			<Stack.Screen name="MyBookingContainer" component={MyBookingContainer} />
			<Stack.Screen name="MyReportsContainer" component={MyReportsContainer} />
		</Stack.Navigator>
	)
}
