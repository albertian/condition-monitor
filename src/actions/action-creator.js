import { FETCH_CONDITIONS, FETCH_VISIBILITY_FILTERS, FETCH_POSITIONS, SET_POSITION, SWITCH_VISIBILITY_FILTER } from './action-types';
import { COMPONENTS_CONDITIONS_URL } from '../constants';

export const fetchConditions = () => ({
    type: FETCH_CONDITIONS,
    meta: {
        type: 'api',
        url: COMPONENTS_CONDITIONS_URL,
        method: 'get'
    },
    payload: {}
});

export const fetchVisibilityFilters = () => ({
    type: FETCH_VISIBILITY_FILTERS,
    meta: {
        type: 'storage',
        key: 'subsystems',
        method: 'get'
    },
    payload: {}
});

export const switchVisibilityFilter = id => ({
    type: SWITCH_VISIBILITY_FILTER,
    meta: {
        type: 'storage',
        key: 'subsystems',
        method: 'set'
    },
    payload: {
        id
    }
});

export const fetchPositions = () => ({
    type: FETCH_POSITIONS,
    meta: {
        type: 'storage',
        key: 'positions',
        method: 'get'
    },
    payload: {
    }
});

export const setPosition = (id1, id2) => ({
    type: SET_POSITION,
    meta: {
        type: 'storage',
        key: 'positions',
        method: 'set'
    },
    payload: {
        id1,
        id2
    }
});
