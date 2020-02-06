import {
    call,
    put,
    takeEvery,
    takeLatest,
    select
  } from 'redux-saga/effects'
  import C from './constants'
  import {
    request,
    changeToken
  } from './action'
  import axios from 'axios';
  
  // export const getProject = (state) => state.password
  
  function* getApiData() {
    try {
      // отсюда будет отправляться пароль и логин
      const state = yield select(); // получаем состояние из store для отправки
      console.log('Sostoyanie',state)
      let sendData
      const data = yield axios.post("http://192.168.0.105:3000/authorization",state)
      .then(res => sendData = res)
      if(JSON.stringify(data) != ''){
        console.log(JSON.stringify(data.data))
        yield put(changeToken(data.data)) // сессия должна жить сутки
      }
      else{
        console.log('неверный пароль или почта')
      }
     
    } catch (e) {
      console.log(e)
    }
  }
  
  export default function* mySagas() {
    yield takeEvery(C.REQUESTED, getApiData)
  }