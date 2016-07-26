"use strict";

let mongoose = require("mongoose");

let propertySchema = new mongoose.Schema({
    siteTitle: {type: String},
    propertyAddress: {type: String},
    propertyDescription: {type: String},
    floorPlanText: {type: String},
    //amazon S3 url:
    floorPlanImage: {type: String},
    propertyPrice: {type: Number},
    bedrooms: {type: String},
    bathrooms: {type: String},
    squareFeet: {type: Number},
    lotSize: {type: Number},
    yearBuilt: {type: Number}
});