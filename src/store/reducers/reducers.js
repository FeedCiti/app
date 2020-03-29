import { combineReducers } from 'redux';
import authReducer from './reducer.auth';
import charityReducer from './reducer.charity';

export default combineReducers({
    authReducer,
    charityReducer
});
