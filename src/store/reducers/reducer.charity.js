import {
    CHARITY_START,
    CHARITY_HEALTH,
    CHARITY_FEATURED,
    CHARITY_FAIL
} from '../actions/action.types';
import updateObject from './updateObject';

const INIT_STATE = {
    healthCharities: [],
    featuredCharity: [],
    loading: false,
    error: null
};

const charityStart = (state) => updateObject(state, { error: null, loading: true });

const charityHealth = (state, action) =>
    updateObject(state, {
        healthCharities: action.payload,
        error: null,
        loading: false
    });

const charityFeatured = (state, action) =>
    updateObject(state, {
        featuredCharity: action.payload,
        error: null,
        loading: false
    });

const charityFail = (state, action) =>
    updateObject(state, { error: action.payload, loading: false });

/* eslint-disable-next-line */
function charityReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case CHARITY_START:
            return charityStart(state);
        case CHARITY_HEALTH:
            return charityHealth(state, action);
        case CHARITY_FEATURED:
            return charityFeatured(state, action);
        case CHARITY_FAIL:
            return charityFail(state, action);
        default:
            return state;
    }
}

export default charityReducer;
