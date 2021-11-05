import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { LogIn } from '../LogIn/LogIn'
import { ProfileSettingsContainer } from '../Profile/ProfileInfo/profileSettings/ProfileSettingsContainer'
import { MyPetsListContainer } from '../Profile/ProfileInfo/myPets/MyPetsListContainer'
import { MyBookingListContainer } from '../Profile/ProfileInfo/myBooking/MyBookingListContainer'
import { MyReportsListContainer } from '../Profile/ProfileInfo/myReports/MyReportsListContainer'
import { AddMyPetContainer } from '../Profile/ProfileInfo/addMyPet/AddMyPetContainer'
const Stack = createStackNavigator()

export const MyProfileStackNavigation = (props) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName={'signIn'}
		>
			<Stack.Screen name="signIn">{() => <LogIn />}</Stack.Screen>
			<Stack.Screen name="ProfileSettingsContainer" component={ProfileSettingsContainer} />
			<Stack.Screen name="MyPetsContainer" component={MyPetsListContainer} />
			<Stack.Screen name="AddMyPet" component={AddMyPetContainer} />
			<Stack.Screen name="MyBookingContainer" component={MyBookingListContainer} />
			<Stack.Screen name="MyReportsContainer" component={MyReportsListContainer} />
		</Stack.Navigator>
	)
}
