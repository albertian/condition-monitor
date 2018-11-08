import { combineReducers } from "redux";
import componentsConditions from "./components-conditions";
import componentsPositions from "./components-positions"
import subSystemVisibility from "./subsystem-visibility";

const rootReducer = combineReducers({
    componentsConditions,
    componentsPositions,
    subSystemVisibility
})

export default rootReducer;