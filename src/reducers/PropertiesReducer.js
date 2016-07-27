"use strict";

import React from "react";
import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";


export default function PropertiesReducer(state = initialState.clientProperties, action) {
    switch(action.type) {

        case types.PROPERTIES_DATA_SUCCESS:
            return (
                Object.assign({}, action.properties)
            );

        default:
            return state;
    }
}