"use strict";

import * as types from "./actionTypes";

export function dispatchPropertyUpdates() {
    return {
        
    };
}

export function dispatchPropertiesData(properties) {
    return {
        type: types.PROPERTIES_DATA_SUCCESS,
        properties
    };
}


export function updatePropertyInDatabase(toUpdateWith) {
    return function (dispatch) {
        console.log(toUpdateWith);
    };
}

/*export function retrievePropertyData(propertyId) {
    return function (dispatch) {
        return fetch(`/api/properties/${propertyId}`)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse)
    };
}*/

export function retrieveProperties() {
    return function (dispatch) {
        return fetch("/api/properties/")
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                dispatch(dispatchPropertiesData(parsedResponse));
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    };
}