"use strict";

import React, {PropTypes} from "react";
import {Link} from "react-router";

export const Property = ({property}) => {
    console.log("dah property: ", property)
    return (
        <div className="row">
            <div className="well col-sm-7 col-sm-offset-3">
                <Link 
                    to={`/editProperty/${property[0]._id}`}
                    property={property}>
                    {property[0].propertyAddress}</Link>
            </div>
        </div>
    );
};

Property.propTypes = {
    property: PropTypes.object.isRequired
};