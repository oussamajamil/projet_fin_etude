import { combineReducers } from 'redux';
import { userReducer, userConnecterReducer, loginConnectionReducer } from './userReducer';

const reducers = combineReducers({
    app: userReducer,
    app1: userConnecterReducer,
    conn: loginConnectionReducer,
})
export default reducers;