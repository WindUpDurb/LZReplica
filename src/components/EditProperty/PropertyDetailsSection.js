"use strict";

import React, {PropTypes} from "react";

export const PropertyDetailsSection = ({property, updateFormState}) => {

    return (
        <div id="propertyDetailsEditDiv" className="container">
            <div className="row">
                <div className="well col-sm-8 col-sm-offset-3">
                    <div className="row">
                        <div className="col-sm-9 col-sm-offset-3 form-group label-floating">
                            <label className="control-label">Site Title</label>
                            <input
                                value={property.siteTitle || "To be updated."}
                                name="siteTitle"
                                className="form-control" 
                                onChange={updateFormState}
                                type="text"/>
                            <p className="help-block">What's the title for this listing?</p>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-9 col-sm-offset-3 form-group label-floating">
                            <label className="control-label">Address</label>
                            <input
                                value={property.propertyAddress || "To be updated."}
                                name="propertyAddress"
                                onChange={updateFormState}
                                className="form-control" 
                                type="text"/>
                            <p className="help-block">What's the address for the property?</p>
                        </div>
                    </div>

                    <br/>
                    <div className="row">
                        <div className="form-group label-floating">
                            <label className="control-label">Description</label>
                            <div className="col-sm-7">
                                <textarea
                                    value={property.propertyDescription || "To be updated."}
                                    name="propertyDescription"
                                    onChange={updateFormState}
                                    className="form-control" 
                                    rows="3"/>
                                <span className="help-block">Please provide a detail description on the property.</span>
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div className="row">
                        <div className="col-sm-9 col-sm-offset-3 form-group label-floating propertyInput">
                            <label className="control-label">Floor Plan Text</label>
                            <input
                                value={property.floorPlanText || "To be updated."}
                                name="floorPlanText"
                                onChange={updateFormState}
                                className="form-control" 
                                type="text"/>
                            <p className="help-block">Add some details regarding the floor plan.</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};


PropertyDetailsSection.propTypes = {
    updateFormState: PropTypes.func.isRequired,
    property: PropTypes.object
};