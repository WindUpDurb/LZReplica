"use strict";

import React, {PropTypes} from "react";


export const PropertyDescription = ({property}) => {
    if (property) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-1">
                        <span id="propertyDescriptionHeader">{property.siteTitle}</span>
                    </div>
                </div>
                <div className="row">

                    <div className="col-sm-10 col-sm-offset-1">
                        <span id="propertyDescriptionBody">{property.propertyDescription}</span>

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

PropertyDescription.propTypes = {
    property: PropTypes.object
};