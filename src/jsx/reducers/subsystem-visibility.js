import {
    FETCH_SUBSYSTEMS,
    SWITCH_VISIBILITY_FILTER
} from "../actions/action-types";

const initialState = [];

export default function subSystemVisibility(state = initialState, action) {
    switch (action.type) {
        case FETCH_SUBSYSTEMS:
            return [...action.payload]
        case SWITCH_VISIBILITY_FILTER:
            return [...action.payload]
        default:
            return state;
    }
}