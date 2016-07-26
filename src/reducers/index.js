"use strict";

import { combineReducers } from "redux";
import initialReducer from "./initialReducer";
import UserReducer from "./UserReducer";


const rootReducer = combineReducers({
    initialState: initialReducer,
    activeUser: UserReducer
});

export default rootReducer;
