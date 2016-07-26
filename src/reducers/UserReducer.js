"use strict";

import React from "react";
import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";


export default function UserReducer(state = initialState.activeUser, action) {
    switch(action.type) {
        
        case types.LOGIN_SUCCESSFUL:
            console.log("action: ", action)
            return (
                Object.assign({}, state, action.loginData)
            );
        
        default:
            return state;
    }
}