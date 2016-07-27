"use strict";

const express = require("express");
const router = express.Router();

const Property = require("../models/PropertyModel");

router.get("/test", function (request, response) {
    response.send("Connected");
});

router.get("/", function (request, response) {
    Property.getProperties(function (error, properties) {
        if (error) return response.status(400).send(error);
        response.send(properties);
    });
});

router.post("/updateProperty", function (request, response) {
   Property.updateProperty(request.body, function (error, updatedProperty) {
       if (error) return response.status(400).send(error);
       response.send(updatedProperty);
   });
});

router.post("/addNewProperty", function (request, response) {
    Property.addNewProperty(request.body, function (error, newProperty) {
        if (error) return response.status(400).send(error);
        response.send(newProperty);
    });
});

module.exports = router;