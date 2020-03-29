import { AUTH_START, AUTH_SUCCESS } from './action.types';

export const authStart = () => {
    return { type: AUTH_START };
};

export const authSuccess = (data) => {
    return { type: AUTH_SUCCESS, payload: data };
};
