"use strict";

import * as types from "./actionTypes";
import toast from "toastr";

export function dispatchUserData(loginData) {
    return {
        type: types.LOGIN_SUCCESSFUL,
        loginData
    };
}

export function submitLogin(loginForm) {
    return function(dispatch) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = {
            method: "POST",
            credentials: "same-origin",
            headers: headers,
            mode: "cors",
            cache: "default",
            body: JSON.stringify(loginForm)
        };
        return fetch("/api/users/login", options)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                if(parsedResponse.error) {
                    return toast.error(parsedResponse.error);
                }
                dispatch(dispatchUserData(parsedResponse));
                
            })
            .catch(error => {
                toast.error("The email and/or the password may be incorrect.");
            });
    };
}