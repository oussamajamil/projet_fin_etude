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
export const admin = (admin) => {
    return {
        type: ActionTypes.ADMIN,
        payload: admin,
    }
}
export const allser = (user) => {
    return {
        type: ActionTypes.ALLUSER,
        payload: user,
    }
}
export const getallprojetenattande = (projet) => {
    return {
        type: ActionTypes.PROJETENATTANDE,
        payload: projet,
    }
}
export const supprimerQestion = (inf) => {
    return {
        type: ActionTypes.SUPPRIMERQUESTION,
        payload: inf,

    }
}
export const getallmessage = (info) => {
    return {
        type: ActionTypes.GETALLMESSAGEPOSTER,
        payload: info,
    }
}
export const supproj = (id_projet) => {
    return {
        type: ActionTypes.SUPPRIMERPROJET,
        payload: id_projet,
    }
}
export const addinvi = (info) => {
    return {
        type: ActionTypes.POSTINVI,
        payload: info,
    }
}
export const supprimerMessages = (info) => {
    return {
        type: ActionTypes.SUPPRIMERMESSAGEPOSTERS,
        payload: info,
    }
}
export const getAllQestionposer = (question) => {
    return {
        type: ActionTypes.QUESTIONPASACCEPTE,
        payload: question,
    }
}
export const updateUser = (info) => {
    return {
        type: ActionTypes.UPDATEUSE,
        payload: info,
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
export const getalllikes = (likes) => {
    return {
        type: ActionTypes.ALLLIKESPROJETPARUSER,
        payload: likes,
    }
}
export const getallprojet = (projet) => {
    return {
        type: ActionTypes.ALLPROJET,
        payload: projet,
    }
}