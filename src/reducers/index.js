"use strict";

import { combineReducers } from "redux";
import initialReducer from "./initialReducer";
import PropertiesReducer from "./PropertiesReducer";
import UserReducer from "./UserReducer";


const rootReducer = combineReducers({
    initialState: initialReducer,
    activeUser: UserReducer,
    clientProperties: PropertiesReducer
});

export default rootReducer;
