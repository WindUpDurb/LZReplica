"use strict";

import React from "react";
import {initialState} from "./initialState";


export default function initialReducer(state = initialState.initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}