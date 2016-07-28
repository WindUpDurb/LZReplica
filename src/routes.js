"use strict";

import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import DemoSitePage from "./components/DemoSite/DemoSitePage";
import EditPropertyPage from "./components/EditProperty/EditPropertyPage";
import AddNewPropertyPage from "./components/AddNewProperty/AddNewPropertyPage";
import PropertyManagementPage from "./components/PropertyManagement/PropertyManagementPage";
import toastr from "toastr";

export const generateRoutes = (store) => {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="/demo" component={DemoSitePage}/>
            <Route path="/demo/:propertyId" component={DemoSitePage}/>
            <Route path="/editProperty/:propertyId" property component={EditPropertyPage}/>
            <Route path="/addNewProperty" property component={AddNewPropertyPage}/>
            <Route path="/propertyManagement" component={PropertyManagementPage}/>
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
