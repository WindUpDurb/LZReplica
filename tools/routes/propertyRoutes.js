"use strict";

const express = require("express");
const router = express.Router();

const Property = require("../models/PropertyModel");

router.get("/", function (request, response) {
    Property.getProperties(function (error, properties) {
        if (error) return response.status(400).send(error);
        response.send(properties);
    });
});

router.get("/getPropertyData/:propertyId", function (request, response) {
    Property.grabPropertyData(request.params.propertyId, function (error, property) {
        if (error) return response.status(400).send(error);
        response.send(property);
    });
});

router.get("/demosite", function (request, response) {
    Property.grabDemoData(function (error, demoData) {
        if (error) return response.status(400).send(error);
        response.send(demoData);
    });
});

router.post("/updateProperty", function (request, response) {
   Property.updateProperty(request.body, function (error, updatedProperty) {
       if (error) return response.status(400).send(error);
       response.status(200).send(updatedProperty);
   });
});

router.post("/addNewProperty", function (request, response) {
    Property.addNewProperty(request.body, function (error, newProperty) {
        if (error) return response.status(400).send(error);
        response.send(newProperty);
    });
});

module.exports = router;