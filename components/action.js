import C from './constants'

export const changeToken = (token) =>
(
    {
        type: C.CHANGE_TOKEN,
        token: token,
    }
)

export const changeLogin = (login) =>
(
    {
        type: C.CHANGE_LOGIN,
        login: login,
    }
)

export const changePassword = (password) =>
(
    {
        type: C.CHANGE_PASSWORD,
        password: password,
    }
)

export const changeChecked = (checked) =>
(
    {
        type: C.CHANGE_CHECKED,
        checked: checked,
    }
)

export const request = (email, password) => 
    (
        { 
            type: C.REQUESTED,
            email: email,
            password: password
        }
    );