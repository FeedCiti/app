import { AUTH_START, AUTH_SUCCESS } from '../actions/action.types';
import updateObject from './updateObject';

const INIT_STATE = {
    user: {},
    loading: false,
    error: null
};

function authReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case AUTH_START:
            break;
        case AUTH_SUCCESS:
            break;
        default:
            return state;
    }
}

export default authReducer;
