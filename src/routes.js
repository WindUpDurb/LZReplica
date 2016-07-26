"use strict";

import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import DemoSitePage from "./components/DemoSite/DemoSitePage";
import EditPropertyPage from "./components/EditProperty/EditPropertyPage";
import toastr from "toastr";

export const generateRoutes = (store) => {
/*
    const checkIfActiveUser = (nextState, replace) => {
        let activeUser;
        if (store) {
            activeUser = store.getState().userAndAuth;
        }

        if (!activeUser) {
            replace({pathname: "/"});
            if(!localStorage.profile) {
                toastr.info("Please login for access.");
            }
        }
    };
*/

    return (
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="/demo" component={DemoSitePage}/>
            <Route path="/editProperty/:propertyId" component={EditPropertyPage}/>
        </Route>
    );

};

/*
return (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/beerStyles" component={BeerStyleDirectory}/>
        <Route path="/breweriesNearby" component={BreweriesNearbyPage}/>
        <Route path="/beerSearch" component={BeerSearchPage}/>
        <Route path="/beerStyles/:style/:page" component={BeerStylePage}/>
        <Route path="/beerLog" component={BeerLogPage} onEnter={checkIfActiveUser}/>
        <Route path="/beer/:beerId" component={BeerViewPage}/>
    </Route>
);*/
