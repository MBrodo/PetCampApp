import React from 'react';
import { Provider } from 'react-redux'
import {store, persistor} from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import {Navigation} from './src/screens/Navigation'
import {Home} from './src/components/Home/Home'
import { createStackNavigator } from '@react-navigation/stack';

import {HeaderNavigation} from './src/components/headerNavigation/HeaderNavigation'

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Provider store={store}>
				{/* <PersistGate loading={null} persistor={persistor}> */}
				<Stack.Navigator 
					screenOptions={{
						headerStyle: {
							borderBottomWidth: 1,
							borderBottomColor: '#A7CFC8'
						}
					}}
				>
					<Stack.Screen 
						name="Navigation" 
						component={Navigation} 
						options={{ headerTitle: () => <HeaderNavigation Home={'Home'} /> }}
					/>

					<Stack.Screen 
						name="Home" 
						component={Home} 
						options={{ headerTitle: () => <HeaderNavigation /> }}
					/>
				</Stack.Navigator>
				{/* </PersistGate> */}
			</Provider>
		</NavigationContainer>
	);
};

export default App;
