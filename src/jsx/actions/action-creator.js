import { FETCH_CONDITIONS, FETCH_SUBSYSTEMS, HIDE_COMPONENT, SET_POSITION, SWITCH_VISIBILITY_FILTER } from './action-types';
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

export const fetchSubsystems = () => ({
    type: FETCH_SUBSYSTEMS,
    meta: {
        type: 'storage',
        key: 'subsystems',
        method: 'get'
    },
    payload: {}
});

export const hideComponent = id => ({
    type: HIDE_COMPONENT,
    payload: {
        id
    }
});
export const setPosition = (id, position) => ({
    type: SET_POSITION,
    payload: {
        position
    }
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