"use strict";

import * as types from "./actionTypes";

export function dispatchPropertyUpdates() {
    return {
        
    };
}
export function updatePropertyInDatabase(toUpdateWith) {
    return function (dispatch) {
        console.log(toUpdateWith);
    };
}