import charity from '../../apis/charity';
import * as API from '../../../api_keys';
import {
    CHARITY_START,
    CHARITY_HEALTH,
    CHARITY_FEATURED,
    CHARITY_FAIL
} from './action.types';

export const charityStart = () => {
    return { type: CHARITY_START };
};

export const charityHealth = (data) => {
    return { type: CHARITY_HEALTH, payload: data };
};

export const charityFeatured = (data) => {
    return { type: CHARITY_FEATURED, payload: data };
};

export const charityFail = (data) => {
    return { type: CHARITY_FAIL, payload: data };
};

export const fetchHealth = () => (dispatch) => {
    dispatch(charityStart());
    charity
        .get('/themes/health/projects', {
            params: {
                api_key: API.CHARITY_KEY
            }
        })
        .then((res) => {
            dispatch(charityHealth(res.data.projects.project));
        })
        .catch((err) => {
            dispatch(charityFail(err));
        });
};

export const fetchFeatured = () => (dispatch) => {
    dispatch(charityStart());
    charity
        .get('/featured/projects', {
            params: {
                api_key: API.CHARITY_KEY
            }
        })
        .then((res) => {
            console.log('fetchFeatured:', res);
            dispatch(charityFeatured(res.data.projects.project));
        })
        .catch((err) => {
            dispatch(charityFail(err));
        });
};
