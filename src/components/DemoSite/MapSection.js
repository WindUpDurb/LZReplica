"use strict";

import React, {PropTypes} from "react";

export const MapSection = ({property}) => {
    if (property && property.propertyAddress) {
        let address = property.propertyAddress.replace(/\s/gi, "%20");
        let key = "AIzaSyDqrDvJ5eOUVPsOypLESEK5I7oKwURIkUg";
        let src = `https://www.google.com/maps/embed/v1/place?q=${address}&zoom=17&key=${key}`;
        return (
            <div className="text-center">
                <iframe
                    id="googleMap"
                    width="70%"
                    height="450"
                    frameBorder="0"
                    style={{border: 0}}
                    src={src}>
                </iframe>

            </div>
        );
    } else {
        return (
            <div></div>
        );
    }

};

MapSection.propTypes = {
    property: PropTypes.object
};