import { FETCH_POSITIONS, SET_POSITION } from "../actions/action-types";

const initialState = [];

export default function componentsPositions(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSITIONS:
            return [...action.payload];
        case SET_POSITION:
            return [...action.payload];
        default:
            return state;
    }
}