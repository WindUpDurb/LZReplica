"use strict";

import * as types from "./actionTypes";

export function dispatchPropertyUpdates(updatedProperty) {
    return {
        type: types.PROPERTY_UPDATE_SUCCESSFUL,
        properties: updatedProperty
    };
}

export function dispatchDemoData(demoData) {
    return {
        type: types.DEMO_DATA_SUCCESS,
        demoData
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
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = {
            method: "POST",
            credentials: "same-origin",
            headers: headers,
            mode: "cors",
            cache: "default",
            body: JSON.stringify(toUpdateWith)
        };
        return fetch("/api/properties/updateProperty", options)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                let toDispatch;
                if (!parsedResponse.error && !Array.isArray(parsedResponse)) {
                    toDispatch = [parsedResponse[0]];
                }
                dispatch(dispatchPropertyUpdates(toDispatch || parsedResponse));
            });
    };
}

export function grabDemoSite() {
    return function(dispatch) {
        return fetch("/api/properties/demosite")
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                dispatch(dispatchDemoData(parsedResponse));
            });
    };
}

export function retrieveProperties() {
    return function (dispatch) {
        return fetch("/api/properties/")
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                let toDispatch;
                if (!parsedResponse.error && !Array.isArray(parsedResponse)) {
                    toDispatch = [parsedResponse[0]];
                }
                dispatch(dispatchPropertiesData(toDispatch || parsedResponse));
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    };
}