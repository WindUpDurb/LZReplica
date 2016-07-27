"use strict";

import React from "react";
import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";


export default function DemoSiteReducer(state = initialState.demoData, action) {
    switch(action.type) {

        case types.DEMO_DATA_SUCCESS:
            return (
                action.demoData
            );
        
        default:
            return state;
    }
}