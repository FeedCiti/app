import charity from '../../apis/charity';
import * as API from '../../../api_keys';
import {
    CHARITY_START,
    CHARITY_SUCCESS,
    CHARITY_HEALTH,
    CHARITY_FAIL
} from './action.types';

export const charityStart = () => {
    return { type: CHARITY_START };
};

export const charityHealth = (data) => {
    return { type: CHARITY_HEALTH, payload: data };
};

export const charityFail = (data) => {
    return { type: CHARITY_FAIL, payload: data };
};

export const fetchHealth = () => (dispatch) => {
    dispatch(charityStart());
    charity
        .get('/public/projectservice/themes/health/projects', {
            params: {
                api_key: API.CHARITY_KEY
            }
        })
        .then((res) => {
            dispatch(charityHealth(res.data.projects.project));
        })
        .catch((err) => {
            console.log('WHY ERR:', err);
            dispatch(charityFail(err));
        });
};
