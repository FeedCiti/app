import feedciti from '../../utils/feedciti';
import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from './action.types';
import auth from '../../utils/auth';
import jwt_decode from 'jwt-decode';

export const authStart = () => {
    return { type: AUTH_START };
};

export const authSuccess = (data) => {
    return { type: AUTH_SUCCESS, payload: data };
};

export const authFail = (err) => {
    return { type: AUTH_FAIL, payload: err };
};

export const authLogin = () => (dispatch) => {
    dispatch(authStart());

    auth.webAuth
        .authorize({ scope: 'openid email profile' })
        .then((credentials) => {
            // TODO: Handle token refreshes
            const token = credentials.idToken;
            //localStorage.setItem('token', token);
            var data = jwt_decode(token);
            dispatch(authSuccess({ data: data, token: token }));
        })
        .catch((err) => dispatch(authFail(err)));
};

export const authLogout = () => {
    return { TYPE: AUTH_LOGOUT };
};
