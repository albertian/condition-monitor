import { combineReducers } from "redux";
import componentsConditions from "./components-conditions.js";
import subSystemVisibility from "./subsystem-visibility.js";

const rootReducer = combineReducers({
    componentsConditions,
    subSystemVisibility
})

export default rootReducer;