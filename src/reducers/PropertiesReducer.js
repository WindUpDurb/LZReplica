"use strict";

import React from "react";
import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";


/*Object.assign(
    {},
    state,
    state[action.propertyId] = Object.assign({}, state[action.propertyId], action.property)
)*/

export default function PropertiesReducer(state = initialState.clientProperties, action) {
    switch(action.type) {
        case types.PROPERTY_UPDATE_SUCCESSFUL:
            return (
                Object.assign({}, state, action.property)
            );

        case types.PROPERTIES_DATA_SUCCESS:
            return (
                Object.assign({}, state, action.properties)
            );

        default:
            return state;
    }
}

