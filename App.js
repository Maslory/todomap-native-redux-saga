import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import {Token, Checked, Login, Password} from './components/reducer'
import initialState from './components/initialState'
import LoginPage from './components/LoginPage'
import createSagaMiddleware from 'redux-saga'
import mySagas from './components/sagas'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainPage from './components/MainPage'

const AppNavigator = createStackNavigator(
  {
    Home: MainPage,
    // Авторизация: LoginPage,
    // Details: DetailsScreen,
  },
  // {
  //   initialRouteName: 'Home',
  // }
);
const AppContainer = createAppContainer(AppNavigator);


const sagaMiddleware = createSagaMiddleware();

const logger = store => next => action => {
  let result
  console.groupCollapsed('dispatching', action.type)
  console.log('prev state', store.getState())
  console.log('action', action)
  result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
}
const saver = store => next => action => {
  let result = next(action)
  // localStorage['redux-store'] = JSON.stringify(store.getState())
  return result
}

const storeFactory = (state = initialState) =>
  applyMiddleware(sagaMiddleware, logger, saver)(createStore)(
      combineReducers({ Token, Checked, Login, Password  }),
      // (localStorage['redux-store']) ?
      //     JSON.parse(localStorage['redux-store']) :
      state
  )

const store = storeFactory()
sagaMiddleware.run(mySagas)

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
