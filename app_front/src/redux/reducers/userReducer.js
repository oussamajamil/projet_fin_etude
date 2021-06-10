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
const initialState3 = {
    projet: null,
}

const initialState4 = {
    info1: null,
    info2: null,
    info3: null,
}
const initialState5 = {
    error: null,
}
const initialStatecadeaux = {
        cadeaux: null,
    }
    // const initialState5 = {
    //     info2: null
    // };
    // const initialState6 = {
    //     info3: null
    // };
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
export const addprojetReducer = (state = initialState3, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADDPROJET:
            return {...state, projet: payload };
        default:
            return state;

    }
}

export const addinfoReducer1 = (state = initialState4, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADDINFO1:
            return {...state, info1: payload };
        case ActionTypes.ADDINFO2:
            return {...state, info2: payload };
        case ActionTypes.ADDINFO3:
            return {...state, info3: payload };
        default:
            return state;

    }
}
export const errorProjetReducer = (state = initialState5, { type, payload }) => {
    switch (type) {
        case ActionTypes.ERRORPROJET:
            return {...state, error: payload };
        default:
            return state;

    }
}
export const cadeauxReducer = (state = initialStatecadeaux, { type, payload }) => {
    switch (type) {
        case ActionTypes.CADEAUX:
            return {...state, cadeaux: payload };
        default:
            return state;

    }
}