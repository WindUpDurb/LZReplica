"use strict";

import React, {PropTypes} from "react";
import {Link} from "react-router";

export const Property = ({property}) => {
    return (
        <div className="well col-sm-7 col-sm-offset-3">
            <div className="row">
                <Link
                    to={`/editProperty/${property._id}`}
                    property={property}>
                    {property.propertyAddress}</Link>
            </div>
            <div className="row">
                <Link  to={`/editProperty/${property._id}`} className="btn btn-primary btn-raised">Edit Property</Link>
                <Link to={`/demo/${property._id}`} style={{marginLeft: "5px"}} className="btn btn-default btn-raised">View Property Page</Link>
            </div>
        </div>
    );
};

Property.propTypes = {
    property: PropTypes.object.isRequired
};