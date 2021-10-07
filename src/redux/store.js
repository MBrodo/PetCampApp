import { applyMiddleware, createStore } from "redux";
import {reducer} from './reducers/index';
import thunk from 'redux-thunk';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'; 

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

  export const store = createStore( 
    reducer,
    applyMiddleware(thunk), 
  );

  export const persistor = persistStore(store)