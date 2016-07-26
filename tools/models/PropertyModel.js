"use strict";

let mongoose = require("mongoose");

let propertySchema = new mongoose.Schema({
    siteTitle: {type: String},
    propertyAddress: {type: String},
    propertyDescription: {type: String},
    floorPlanText: {type: String},
    //amazon S3 url:
    floorPlanImage: {type: String},
    propertyPrice: {type: String},
    bedrooms: {type: String},
    bathrooms: {type: String},
    squareFeet: {type: String},
    lotSize: {type: String},
    yearBuilt: {type: String}
});

propertySchema.statics.addNewProperty = function (newPropertyData, callback) {
    Property.create(newPropertyData, function (error, newProperty) {
        return callback(error, newProperty);
    });
};

propertySchema.statics.updateProperty = function (toUpdateWith, callback) {
    Property.findById(toUpdateWith._id, function (error, databaseProperty) {
        if (error || databaseProperty) return callback(error || {error: "There is no such property"});
        let toSave = Object.assign({}, databaseProperty, toUpdateWith);
        toSave.save(function (error, savedProperty) {
           return callback(error, savedProperty);
        });
    });
};

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;