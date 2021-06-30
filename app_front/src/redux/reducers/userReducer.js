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
const initialStateAdmin = {
    admin: false,
}
const alluserStat = {
    user: [],
}
const QuestionState = {
    question: [],
}
const projetenattnde = {
    projet: [],
}
const messageData = {
    message: [],
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
export const AdminReducer = (state = initialStateAdmin, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADMIN:
            return {...state, admin: payload };
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
    //Admin  redux
export const AllUserReducer = (state = alluserStat, { type, payload }) => {
    switch (type) {
        case ActionTypes.ALLUSER:
            return {...state, user: payload };
        case ActionTypes.UPDATEUSE:
            const index = state.user.findIndex(user => user.id === payload.id);
            const newArray = [...state.user]; //making a new array
            newArray[index].ActiveCompte = payload.ActiveCompte;
            return {
                ...state, //copying the orignal state
                user: newArray, //reassingning todos to new array
            }
        default:
            return state;

    }
}
export const MessageReducer = (state = messageData, { type, payload }) => {
        switch (type) {
            case ActionTypes.GETALLMESSAGEPOSTER:
                // return {...state, message: payload };
                console.log(payload);
            default:
                return state;
        }
    }
    // export const ProjetDataReducer = (state = projetenattnde, { type, payload }) => {
    //     switch (type) {
    //         case ActionTypes.PROJETENATTANDE:
    //             return {...state, projet: payload };
    //         case ActionTypes.SUPPRIMERPROJET:
    //             return { // returning a copy of orignal state
    //                 ...state, //copying the original state
    //                 projet: state.projet.filter(projet => projet.id !== payload.id)
    //                     // returns a new filtered todos array
    //             }
    //         default:
    //             return state;
    //     }
    // }
export const QuestionPosserReducer = (state = QuestionState, { type, payload }) => {
    switch (type) {
        case ActionTypes.QUESTIONPASACCEPTE:
            return {...state, question: payload };
        case ActionTypes.SUPPRIMERQUESTION:
            return { // returning a copy of orignal state
                ...state, //copying the original state
                question: state.question.filter(question => question.id !== payload.id)
                    // returns a new filtered todos array
            }
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