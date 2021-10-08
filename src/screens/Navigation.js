import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5  from 'react-native-vector-icons/dist/FontAwesome5';

import {AboutUs} from '../components/About/AboutUs'
import {PriceList} from '../components/PriceList'
import {LogIn} from '../components/LogIn'
import {FeedBack} from '../components/FeedBack'
import {Contacts} from '../components/Contacts'

import { styles } from './styles'


const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Finance"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "rgb(31, 31, 31)",
          tabBarInactiveTintColor: "white",
          tabBarInactiveBackgroundColor: '#4fa092af',
          tabBarActiveBackgroundColor: '#4fa092af',
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if(route.name === 'AboutUs') {
              iconName = 'info-circle';
              size = focused ? 30 : 23
              color = focused ? 'rgb(31, 31, 31)' : 'white'
            } else if(route.name === 'PriceList') {
              iconName = 'money-check-alt';
              size = focused ? 30 : 23
              color = focused ? 'rgb(31, 31, 31)' : 'white'
            }
            else if(route.name === 'LogIn') {
              iconName = 'user';
              size = focused ? 33 : 30
              color = focused ? 'rgb(31, 31, 31)' : 'white'
            }
            else if(route.name === 'FeedBack') {
              iconName = 'comments';
              size = focused ? 30 : 23
              color = focused ? 'rgb(31, 31, 31)' : 'white'
            }
            else if(route.name === 'Contacts') {
              iconName = 'id-badge';
              size = focused ? 30 : 23
              color = focused ? 'rgb(31, 31, 31)' : 'white'
            }
            
            return (
              <FontAwesome5 
                name={iconName}
                size={size}
                color={color}
              />
            )
          }
        })}
      >
      <Tab.Screen name="AboutUs" component={AboutUs} />
      <Tab.Screen name="PriceList" component={PriceList} />
      <Tab.Screen name="LogIn" component={LogIn} />
      <Tab.Screen name="FeedBack" component={FeedBack} />
      <Tab.Screen name="Contacts" component={Contacts} />
    </Tab.Navigator>
  )
}

export default Navigation