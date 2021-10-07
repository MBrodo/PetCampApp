import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux'
import {store, persistor} from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import {StartPage} from './src/screens/StartPage'

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={<StartPage />} persistor={persistor}>
          
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
