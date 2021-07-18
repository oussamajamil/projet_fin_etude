import { combineReducers } from 'redux';
import { userReducer, invisReducer, allprojetReducer, likesReducer, MessageReducer, ProjetDataReducer, QuestionPosserReducer, userConnecterReducer, AllUserReducer, AdminReducer, loginConnectionReducer, addprojetReducer, addinfoReducer1, errorProjetReducer, cadeauxReducer } from './userReducer';

const reducers = combineReducers({
    app: userReducer,
    app1: userConnecterReducer,
    conn: loginConnectionReducer,
    projet: addprojetReducer,
    info: addinfoReducer1,
    irrorP: errorProjetReducer,
    cd: cadeauxReducer,
    admin: AdminReducer,
    alluser: AllUserReducer,
    QuestionPoser: QuestionPosserReducer,
    projetDataattande: ProjetDataReducer,
    messagePoster: MessageReducer,
    likeProjets: likesReducer,
    allprojet: allprojetReducer,
    inviss: invisReducer,
})
export default reducers;