import { ActionTypes } from "../contants/action-type"

const initialState = {
    users: null
}
const initialState1 = {
    user_connecter: null
}
const initialState2 = {
    loginConn: null
}
export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USERS:
            return {...state, users: payload };
            // case ActionTypes.LOGOUT:
            //     return {...state, users: null };
        default:
            return state;

    }
}

export const userConnecterReducer = (state = initialState1, { type, payload }) => {
    switch (type) {
        case ActionTypes.HOMME:
            return {...state, user_connecter: payload };
        default:
            return state;

    }
}
export const loginConnectionReducer = (state = initialState2, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOGINCON:
            return {...state, loginConn: payload };
        default:
            return state;

    }
}