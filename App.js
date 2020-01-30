import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import {Token} from './components/reducer'
import initialState from './components/initialState'

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
  applyMiddleware(logger, saver)(createStore)(
      combineReducers({ Token }),
      // (localStorage['redux-store']) ?
      //     JSON.parse(localStorage['redux-store']) :
      state
  )


const store = storeFactory()

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
      <Text>Привет</Text>
    </View>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
