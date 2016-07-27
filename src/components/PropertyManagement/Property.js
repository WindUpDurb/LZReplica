"use strict";

import React, {PropTypes} from "react";
import {Link} from "react-router";

export const Property = ({property}) => {
    return (
        <div className="row">
            <div className="well col-sm-7 col-sm-offset-3">
                <Link 
                    to={`/editProperty/${property._id}`}
                    property={property}>
                    {property.propertyAddress}</Link>
            </div>
        </div>
    );
};

Property.propTypes = {
    property: PropTypes.object.isRequired
};