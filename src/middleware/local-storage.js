import {
    FETCH_POSITIONS,
    FETCH_VISIBILITY_FILTERS,
    SET_POSITION,
    SWITCH_VISIBILITY_FILTER
} from "../actions/action-types";

import { MAX_COMPONENTS_NUMBER } from '../constants';

/**
 * Search item in array and remove if it's found otherwise add
 * @param {Number} id - filter id
 * @param {Array.<Number>} filters - list of ids
 * @returns {Array.<Number>} - changed array
 */
function switchFilter(id, filters) {
    const index = filters.indexOf(id);
    if (index !== -1) {
        filters.splice(index, 1);
    } else {
        filters.push(id);
    }
    return filters;
}

/**
 * Move element to position another's element position
 * @param {Number} id1 - id of moved element
 * @param {Number} id2 - id of element with destination position of moved element
 * @param {Array.<Object>} positions
 * @returns {Array.<Object>} - changed array
 */
function setPosition(id1, id2, positions) {
    const fromPosition = positions.find(item => item.id === id1).position,
        destinationPosition = positions.find(item => item.id === id2).position,
        directionUp = fromPosition > destinationPosition;
    if (directionUp) {
        positions.forEach(obj => {
            if (obj.position >= destinationPosition && obj.position < fromPosition) {
                obj.position++;
            } else if (obj.position === fromPosition) {
                obj.position = destinationPosition;
            }
        });
    } else {
        positions.forEach(obj => {
            if (obj.position <= destinationPosition && obj.position > fromPosition) {
                obj.position--;
            } else if (obj.position === fromPosition) {
                obj.position = destinationPosition;
            }
        });
    }
    return positions;
}

const localStorageMiddleware = store => next => action => {
    if (!action.meta || action.meta.type !== 'storage') {
        return next(action);
    }
    const { key } = action.meta;
    let data = JSON.parse(localStorage.getItem(key)) || [];

    if (data.length === 0 && action.type === FETCH_POSITIONS) {
        for (let i = 0; i < MAX_COMPONENTS_NUMBER; i++) {
            data.push({ id: i, position: i });
        }
    }

    if (action.meta.method === 'set') {
        if (action.type === SWITCH_VISIBILITY_FILTER) {
            data = switchFilter(action.payload.id, data);
        } else if (action.type === SET_POSITION) {
            data = setPosition(action.payload.id1, action.payload.id2, data);
        }
    }
    
    localStorage.setItem(key, JSON.stringify(data));
    const newAction = Object.assign({}, action, {
        payload: data
    });
    delete newAction.meta;
    store.dispatch(newAction);
}

export default localStorageMiddleware;