import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'

import { StackNavigation } from './src/screens/StackNavigation'

const App = () => {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<PersistGate loading={<StackNavigation />} persistor={persistor}></PersistGate>
			</Provider>
		</NavigationContainer>
	)
}

export default App
