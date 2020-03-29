import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
    AUTH_LOGOUT
} from '../actions/action.types';
import updateObject from './updateObject';

const INIT_STATE = {
    token: null,
    user: {},
    loading: false,
    error: null
};

const authStart = (state) => updateObject(state, { error: null, loading: true });

const authSuccess = (state, action) =>
    updateObject(state, {
        token: action.payload.token,
        user: action.payload.data,
        loading: false,
        error: null
    });

const authFail = (state, action) =>
    updateObject(state, { error: action.payload, loading: false });

const authLogout = (state) => updateObject(state, INIT_STATE);

function authReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case AUTH_START:
            return authStart(state);
        case AUTH_SUCCESS:
            return authSuccess(state, action);
        case AUTH_FAIL:
            return authFail(state, action);
        case AUTH_LOGOUT:
            return authLogout(state);
        default:
            return state;
    }
}

export default authReducer;
