import { ActionTypes } from '../contants/action-type';

export const login = (users) => {
    return {
        type: ActionTypes.SET_USERS,
        payload: users,
    }
}
export const Hommes = (user_connecter) => {
    return {
        type: ActionTypes.HOMME,
        payload: user_connecter,
    }
}

export const connection_login = (loginConn) => {
    return {
        type: ActionTypes.LOGINCON,
        payload: loginConn,
    }
}