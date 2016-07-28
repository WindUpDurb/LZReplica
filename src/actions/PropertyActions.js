"use strict";

import * as types from "./actionTypes";
import toastr from "toastr";
import {browserHistory} from "react-router";
import * as FunctionTools from "./FunctionTools";

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


export function addNewProperty(newProperty) {
    return function (dispatch) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = {
            method: "POST",
            credentials: "same-origin",
            headers: headers,
            mode: "cors",
            cache: "default",
            body: JSON.stringify(newProperty)
        };
        return fetch("/api/properties/addNewProperty", options)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                if(!parsedResponse.error) {
                    let toDispatch = {};
                    if (!parsedResponse.error && !Array.isArray(parsedResponse)) {
                        toDispatch[parsedResponse[0]._id] = parsedResponse[0];
                    } else if (!parsedResponse.error && Array.isArray(parsedResponse)) {
                        toDispatch = FunctionTools.arrayToObject(parsedResponse);
                    }
                    dispatch(dispatchPropertiesData(toDispatch));
                    browserHistory.push("/propertyManagement");
                }
            })
            .catch(error => {
                toastr.error(error);
            });
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
                let toDispatch = {};
                if (!parsedResponse.error && !Array.isArray(parsedResponse)) {
                    toDispatch[parsedResponse[0]._id] = parsedResponse[0];
                } else if (!parsedResponse.error && Array.isArray(parsedResponse)) {
                    toDispatch = FunctionTools.arrayToObject(parsedResponse);
                }
                toastr.info("Your property and has been updated and saved.");
                return dispatch(dispatchPropertyUpdates(toDispatch));
            })
            .catch(error => {
                console.log("Error: ", error);
                toastr.error(error);
            });
    };
}

export function grabSiteData(propertyId) {
    return function(dispatch) {
        return fetch(`/api/properties/getPropertyData/${propertyId}`)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                dispatch(dispatchDemoData(parsedResponse));
            })
            .catch(error => {
                toastr.error(error);
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
            })
            .catch(error => {
                toastr.error(error);
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
                let toDispatch = {};
                if (!parsedResponse.error && !Array.isArray(parsedResponse)) {
                    toDispatch[parsedResponse[0]._id] = parsedResponse[0];
                } else if (!parsedResponse.error && Array.isArray(parsedResponse)) {
                    toDispatch = FunctionTools.arrayToObject(parsedResponse);
                }
                dispatch(dispatchPropertiesData(toDispatch));
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    };
}

