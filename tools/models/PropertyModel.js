"use strict";

let mongoose = require("mongoose");

let propertySchema = new mongoose.Schema({
    demo: {type: Boolean},
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
        if (error) return callback(error);
        Property.find({}, function (error, allProperties) {
            return callback(error, allProperties);
        });
    });
};

propertySchema.statics.getProperties = function (callback) {
    Property.find({}, function (error, properties) {
        return callback(error, properties);
    });
};

propertySchema.statics.grabDemoData = function (callback) {
    Property.findOne({demo: true}, function (error, demoData) {
        return callback(error, demoData);
    });
};

propertySchema.statics.updateProperty = function (toUpdateWith, callback) {
    Property.findByIdAndUpdate(toUpdateWith._id, toUpdateWith, function (error, savedProperty) {
        if (error) return callback(error);
        Property.find({}, function (error, allProperties) {
            return callback(error, allProperties);
        });
    });
};


/*
propertySchema.statics.updateProperty = function (toUpdateWith, callback) {
    Property.findById(toUpdateWith._id, function (error, databaseProperty) {
        if (error || !databaseProperty) return callback(error || {error: "There is no such property"});
        console.log("To update with: ", toUpdateWith);
        let toSave = Object.assign({}, databaseProperty, toUpdateWith);
        console.log("To save: ", toSave)
        toSave.save(function (error, savedProperty) {
            console.log("Saved property: ", savedProperty)
            if (error) return callback(error);
           Property.find({}, function (error, allProperties) {
               return callback(error, allProperties);
           });
        });
    });
};
*/

const Property = mongoose.model("Property", propertySchema);

/*let demoProperty = {
    propertyDescription: `We are an imaginative, flexible, and responsive real estate marketing company aimed at offering high quality, well priced, and valuable services. We are reliable, respected, and well liked because we make everything as easy and painless as possible.
                           Our mission is to help you sell yourself and your properties. We create images and products that represent your business and showcase your listings in the most beautiful and comprehensive way possible.
                           Michael has photographed over 2,000 homes in Los Angeles, giving him a unique perspective.
                           Our team is comprised of talented and specialized people. Allow us to bring out talents together to create luxury marketing materials for you.`,

    propertyAddress: "711 E. Walnut St., Unit 405, Pasadena, CA 91101",
    siteTitle: "ShootingLA Demo Web Site",
    bedrooms: "5.5",
    bathrooms: "3.5",
    squareFeet: "2500",
    lotSize: "2800",
    yearBuilt: "1990",
    demo: true
};
propertySchema.statics.addNewProperty(demoProperty);*/

module.exports = Property;