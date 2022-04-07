import isLoggedReducer from './isLogged';
import counterReducer from './counter'
import {combineReducers} from 'redux';

const allReduccers = combineReducers({
    counterReducer,
    isLoggedReducer 
})

export default allReduccers;