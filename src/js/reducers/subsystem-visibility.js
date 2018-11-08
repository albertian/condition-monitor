import {
    FETCH_VISIBILITY_FILTERS,
    SWITCH_VISIBILITY_FILTER
} from "../actions/action-types";

const initialState = [];

export default function subSystemVisibility(state = initialState, action) {
    switch (action.type) {
        case FETCH_VISIBILITY_FILTERS:
            return [...action.payload]
        case SWITCH_VISIBILITY_FILTER:
            return [...action.payload]
        default:
            return state;
    }
}