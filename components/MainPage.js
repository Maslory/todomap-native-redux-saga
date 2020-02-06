import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import { Icon } from 'react-native-elements'
import { Input } from "react-native-elements";
import { connect } from "react-redux";
import { changeChecked, changePassword, request, changeLogin } from "./action";
import { CheckBox } from "react-native-elements";
// import { ButtonGroup } from 'react-native-elements';
import MapView from 'react-native-maps';
import ButtonGroup from 'react-native-button-group';

// const gsd = <Icon name="user" type='font-awesome' size={24} color="#333333"  />

const buttons = ['Главная', 'Горящие', 'Дела', 'Настройки']
let selectedIndex = 2

const MainPage = props => {
  const updateIndex = () => {
    console.log('24')
  }
  return (
    <ThemeProvider>
      
    <MapView
        style={{
          flex: 1
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
      <View style={{width: '100%', height: 50, display: 'flex', flexDirection: 'row', }}>   
          <Button
          containerStyle={{flex: 1}}
            title={'Главная'}
            onPress={updateIndex}
          />
          <Button
          containerStyle={{flex: 1}}
            title={'Горящие'}
            onPress={updateIndex}
          />
          <Button
          containerStyle={{flex: 1}}
            title={'Дела'}
            onPress={updateIndex}
          />
          <Button
          containerStyle={{flex: 1}}
            title={'Настройки'}
            onPress={updateIndex}
          />
       </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
  },
});
function mapDispatchToProps(dispatch) {
  return {
    // changeToken: (token) => dispatch(changeToken(token)),
    changeChecked: checked => dispatch(changeChecked(checked)),
    call: () => dispatch(request()),
    changePassword: password => dispatch(changePassword(password)),
    changeLogin: login => dispatch(changeLogin(login))
  };
}

function mapStateToProps(state, store, getState) {
  return {
    token: state.Token,
    checked: state.Checked,
    login: state.Login,
    password: state.Password
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);


          