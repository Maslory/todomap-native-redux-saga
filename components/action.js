import C from './constants'

export const changeToken = (token) =>
(
    {
        type: C.CHANGE_TOKEN,
        token: token,
    }
)