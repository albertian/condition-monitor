import {
    FETCH_CONDITIONS,
    HIDE_COMPONENT,
    SET_POSITION
} from "../actions/action-types";

const initialState = {};

export default function componentsConditions(state = initialState, action) {
    switch (action.type) {
        case FETCH_CONDITIONS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}