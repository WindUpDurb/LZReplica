"use strict";

import React, {PropTypes} from "react";

export const HouseAndLotDetailsSection = ({property, updateFormState}) => {
    if (property) {
        return (
            <div className="container">
                <div className="row">
                    <div className="well col-sm-8 col-sm-offset-3">
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="col-sm-9 col-sm-offset-3 form-group label-floating">
                                    <label className="control-label">Price: $</label>
                                    <input
                                        value={property.propertyPrice || "To Be Updated"}
                                        name="propertyPrice"
                                        onChange={updateFormState}
                                        className="form-control"
                                        type="text"/>
                                    <p className="help-block">What's the property listed for?</p>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="col-sm-9 col-sm-offset-3 form-group label-floating">
                                    <label className="control-label">Bedroom(s)</label>
                                    <input
                                        value={property.bedrooms || "To Be Updated"}
                                        name="bedrooms"
                                        onChange={updateFormState}
                                        className="form-control"
                                        type="text"/>
                                    <p className="help-block">Bedrooms on the property?</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="col-sm-9 col-sm-offset-3 form-group label-floating">
                                    <label className="control-label">Bathroom(s)</label>
                                    <input
                                        value={property.bathrooms || "To Be Updated"}
                                        name="bathrooms"
                                        onChange={updateFormState}
                                        className="form-control"
                                        type="text"/>
                                    <p className="help-block">Bathrooms on the property?</p>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="col-sm-9 col-sm-offset-3 form-group label-floating">
                                    <label className="control-label">Square Feet</label>
                                    <input
                                        value={property.squareFeet || "To Be Updated"}
                                        name="squareFeet"
                                        onChange={updateFormState}
                                        className="form-control"
                                        type="text"/>
                                    <p className="help-block">Square feet of the house?</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="col-sm-9 col-sm-offset-3 form-group label-floating">
                                    <label className="control-label">Lot Size</label>
                                    <input
                                        value={property.lotSize || "To Be Updated"}
                                        name="lotSize"
                                        onChange={updateFormState}
                                        className="form-control"
                                        type="text"/>
                                    <p className="help-block">Size of the lot?</p>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="col-sm-9 col-sm-offset-3 form-group label-floating">
                                    <label className="control-label">Year Built</label>
                                    <input
                                        value={property.yearBuilt || "To Be Updated"}
                                        name="yearBuilt"
                                        onChange={updateFormState}
                                        className="form-control"
                                        type="text"/>
                                    <p className="help-block">Year the house was built?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                    <div className="well col-sm-8 col-sm-offset-3">
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="col-sm-9 col-sm-offset-3 form-group label-floating">
                                    <label className="control-label">Price: $</label>
                                    <input
                                        name="propertyPrice"
                                        onChange={updateFormState}
                                        className="form-control"
                                        type="text"/>
                                    <p className="help-block">What's the property listed for?</p>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="col-sm-9 col-sm-offset-3 form-group label-floating">
                                    <label className="control-label">Bedroom(s)</label>
                                    <input
                                        name="bedrooms"
                                        onChange={updateFormState}
                                        className="form-control"
                                        type="text"/>
                                    <p className="help-block">Bedrooms on the property?</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="col-sm-9 col-sm-offset-3 form-group label-floating">
                                    <label className="control-label">Bathroom(s)</label>
                                    <input
                                        name="bathrooms"
                                        onChange={updateFormState}
                                        className="form-control"
                                        type="text"/>
                                    <p className="help-block">Bathrooms on the property?</p>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="col-sm-9 col-sm-offset-3 form-group label-floating">
                                    <label className="control-label">Square Feet</label>
                                    <input
                                        name="squareFeet"
                                        onChange={updateFormState}
                                        className="form-control"
                                        type="text"/>
                                    <p className="help-block">Square feet of the house?</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="col-sm-9 col-sm-offset-3 form-group label-floating">
                                    <label className="control-label">Lot Size</label>
                                    <input
                                        name="lotSize"
                                        onChange={updateFormState}
                                        className="form-control"
                                        type="text"/>
                                    <p className="help-block">Size of the lot?</p>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="col-sm-9 col-sm-offset-3 form-group label-floating">
                                    <label className="control-label">Year Built</label>
                                    <input
                                        name="yearBuilt"
                                        onChange={updateFormState}
                                        className="form-control"
                                        type="text"/>
                                    <p className="help-block">Year the house was built?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

HouseAndLotDetailsSection.propTypes = {
    property: PropTypes.object,
    updateFormState: PropTypes.func.isRequired
};