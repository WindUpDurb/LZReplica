"use strict";

import React, {PropTypes} from "react";

export const HouseAndLotDetailsSection = ({updateFormState}) => {
    
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
};

HouseAndLotDetailsSection.propTypes = {
    updateFormState: PropTypes.func.isRequired
};