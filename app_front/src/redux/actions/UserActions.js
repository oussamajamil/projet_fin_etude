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
export const addProjet = (projet) => {
    return {
        type: ActionTypes.ADDPROJET,
        payload: projet,
    }
}
export const addinfoprojet1 = (info1) => {
    return {
        type: ActionTypes.ADDINFO1,
        payload: info1,
    }
}
export const addinfoprojet2 = (info2) => {
    return {
        type: ActionTypes.ADDINFO2,
        payload: info2,
    }
}
export const addinfoprojet3 = (info3) => {
    return {
        type: ActionTypes.ADDINFO3,
        payload: info3,
    }
}

export const errorprojets = (error) => {
    return {
        type: ActionTypes.ERRORPROJET,
        payload: error,
    }
}
export const cadeauxProjets = (cadeaux) => {
    return {
        type: ActionTypes.CADEAUX,
        payload: cadeaux,
    }
}