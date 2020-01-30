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