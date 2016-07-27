"use strict";

import React, {PropTypes} from "react";

export const PropertyDetailsAndIconsSection = ({property}) => {
    if (property) {
        return (
            <div id="propertyDetailsDiv">
                <div className="row text-center">
                    <div className="col-sm-3 col-sm-offset-2">
                        <span className="propertyDetailDescriptor">Price</span>
                        <br/>
                        <span className="propertyDetailsText">{property.propertyPrice || "To Be Updated."}</span>
                    </div>
                    <div className="col-sm-3">
                        <span className="propertyDetailDescriptor">Bedrooms</span>
                        <br/>
                        <span className="propertyDetailsText">{property.bedrooms || "To Be Updated."}</span>
                    </div>
                    <div className="col-sm-3">
                        <span className="propertyDetailDescriptor">Bathrooms</span>
                        <br/>
                        <span className="propertyDetailsText">{property.bathrooms || "To Be Updated."}</span>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-sm-3 col-sm-offset-2">
                        <span className="propertyDetailDescriptor">Property Size</span>
                        <br/>
                        <span className="propertyDetailsText">{property.squareFeet || "To Be Updated."}</span>

                    </div>
                    <div className="col-sm-3">
                        <span className="propertyDetailDescriptor">Lot Size</span>
                        <br/>
                        <span className="propertyDetailsText">{property.lotSize || "To Be Updated."}</span>

                    </div>
                    <div className="col-sm-3">
                        <span className="propertyDetailDescriptor">Year Built</span>
                        <br/>
                        <span className="propertyDetailsText">{property.yearBuilt || "To Be Updated."}</span>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
    
};

PropertyDetailsAndIconsSection.propTypes = {
    property: PropTypes.object
};
