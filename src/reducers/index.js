"use strict";

import { combineReducers } from "redux";
import initialReducer from "./initialReducer";


const rootReducer = combineReducers({
    initialState: initialReducer
});

export default rootReducer;
