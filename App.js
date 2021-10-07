import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux'
import {store, persistor} from './src/store';
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View></View>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
