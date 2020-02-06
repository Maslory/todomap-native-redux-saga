import C from './constants'
import initialState from './initialState'


export const Token = (state = initialState.Token, action) => {
    switch(action.type){
        case C.CHANGE_TOKEN:
            return action.token
        default:
            return state
    }
}

export const Login = (state = initialState.Login, action) => {
    switch(action.type){
        case C.CHANGE_LOGIN:
            return action.login
        default:
            return  state
    }
}

export const Password = (state= initialState.Password, action) => {
    switch(action.type){
        case C.CHANGE_PASSWORD:
            return action.password 
        default:
            return state
    }
}

export const Checked = (state= initialState.Checked , action) => {
    switch(action.type){
        case C.CHANGE_CHECKED:
            return action.checked

        default:
            return state
    }
}