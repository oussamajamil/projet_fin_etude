import { combineReducers } from 'redux';
import { userReducer, userConnecterReducer, loginConnectionReducer, addprojetReducer, addinfoReducer1, errorProjetReducer, cadeauxReducer } from './userReducer';

const reducers = combineReducers({
    app: userReducer,
    app1: userConnecterReducer,
    conn: loginConnectionReducer,
    projet: addprojetReducer,
    info: addinfoReducer1,
    irrorP: errorProjetReducer,
    cd: cadeauxReducer,
})
export default reducers;