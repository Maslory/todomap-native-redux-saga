import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import { Icon } from 'react-native-elements'
import { Input } from "react-native-elements";
import { connect } from "react-redux";
import { changeChecked, changePassword, request, changeLogin } from "./action";
import { CheckBox } from "react-native-elements";



let errorMessageLogin = "";
let errorMessagePassword = "";

const LoginPage = props => {
  const submit = () => {
   
    if (errorMessagePassword == "" && errorMessageLogin == "") {
      
      props.call();
      
    }
   
  };
  const handlerLogin = text => {
    //сделать отдельную функцию для валидации или использовать react native validation
    if (props.login.length < 5) {
      errorMessageLogin = "Минимальная длина логина 6 символа";
    } else if (props.login.length > 21) {
      errorMessageLogin = "Максимальная длина логина 21 символ";
    } else {
      errorMessageLogin = "";
    }
    props.changeLogin(text);
  };
  const handlerPassword = text => {
    if (props.password.length < 5) {
      errorMessagePassword = "Минимальная длина пароля 6 символа";
    } else if (props.password.length > 21) {
      errorMessageLogin = "Максимальная длина паролья 21 символ";
    } else {
      errorMessagePassword = "";
    }
    props.changePassword(text);
  };

  return (
    <ThemeProvider>
      <View style={styles.container}>

            <Icon
            reverse
            name='sign-in'
            type='font-awesome'
            size={40}
            color='#E10050'
            />

          <Text style={{width: '100%', textAlign: 'center', marginBottom: '15%', fontSize: 26}} >Вход в аккаунт</Text>
            <Input
              textContentType="username"
              placeholder="Логин"
              label="Логин"
              value={props.login}
              inputStyle={styles.input}
              inputContainerStyle={styles.input_container_style}
              containerStyle={{marginBottom: '5%'}}
              onChangeText={handlerLogin}
              autoCompleteType="username"
              errorStyle={{ color: "red" }}
              labelStyle={{ color: "#333333" }}
              errorMessage={errorMessageLogin}
              leftIconContainerStyle={{ marginLeft: 0, marginRight: "2.5%" }}
              leftIcon={<Icon name="user" type='font-awesome' size={24} color="#333333"  />}
            />
              <Input
              textContentType="password"
              placeholder="Пароль"
              label="Пароль"
              maxLength={12}
              containerStyle={{marginBottom: '3%'}}
              inputStyle={styles.input}
              inputContainerStyle={styles.input_container_style}
              secureTextEntry={true}
              value={props.password}
              onChangeText={handlerPassword}
              labelStyle={{ color: "#333333" }}
              errorStyle={{ color: "red" }}
              errorMessage={errorMessagePassword}
              leftIconContainerStyle={{ marginLeft: 0, marginRight: "2.5%" }}
              leftIcon={<Icon name="lock" size={26} color="#333333" />}
            />
           <CheckBox
                title="Запомнить меня"
                checkedIcon="check-circle"
                uncheckedIcon="circle"
                onPress={() => props.changeChecked(!props.checked)}
                checked={props.checked}
                containerStyle={{
                  backgroundColor: "#ffffff",
                  padding: 0,
                  borderWidth: 0,
                  width: '100%',
                  marginLeft: '7.5%',
                  marginBottom: '10%'
                }}
              />
            <View style={styles.bottom__container}>
              <Button
                title="Вход"
                buttonStyle={styles.button}
                onPress={submit}
              />
            </View>
            <View style={{flexDirection: 'row', paddingLeft: '5%', paddingRight: '5%'}}>
            <Text
                style={{ color: "#333333", width: '50%', textDecorationLine: 'underline'  }}
                // onPress={() => Linking.openURL("http://google.com")}
              >
                Забыли пароль
              </Text>
              <Text
                style={{ color: "#333333", width: '50%',  textAlign: 'right', textDecorationLine: 'underline' }}
                // onPress={() => Linking.openURL("http://google.com")}
              >
                Регистрация
              </Text>
            
            </View>
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
  bottom__container: {
    width: "100%",
    // height: "25%"
  },
  button: {
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%"
  },
  input: {
    color: "#333333",
    padding: 0,
    backgroundColor: "#ffffff",
    
    
  },
  input_container_style: {
    padding: 0,
    margin: 0,
    
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);


          