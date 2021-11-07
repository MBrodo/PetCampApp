import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'

import { StackNavigation } from './src/components/navigation/StackNavigation'
import { StripeProvider } from '@stripe/stripe-react-native'

const App = () => {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<StripeProvider
					publishableKey={
						'pk_test_51Jsmy5J372t0gxzM6wfUjUGrkjPYkt3KaNegUftPru5qlJZ9jSmUZGxbLu3rXxhDfOkeT6c4tHdnlq4mNOhOSfv300FI7bZB3h'
					}
					merchantIdentifier="merchant.identifier"
				>
					<PersistGate loading={<StackNavigation />} persistor={persistor}></PersistGate>
				</StripeProvider>
			</Provider>
		</NavigationContainer>
	)
}

export default App
