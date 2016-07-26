"use strict";

import React, {PropTypes} from "react";

export const PropertyDetailsAndIconsSection = () => {

    return (
      <div id="propertyDetailsDiv">
        <div className="row text-center">
            <div className="col-sm-3 col-sm-offset-2">
                <span className="propertyDetailDescriptor">Price</span>
            </div>
            <div className="col-sm-3">
                <span className="propertyDetailDescriptor">Bedrooms</span>

            </div>
            <div className="col-sm-3">
                <span className="propertyDetailDescriptor">Bathrooms</span>
            </div>
        </div>
          <div className="row text-center">
              <div className="col-sm-3 col-sm-offset-2">
                  <span className="propertyDetailDescriptor">Property Size</span>
              </div>
              <div className="col-sm-3">
                  <span className="propertyDetailDescriptor">Lot Size</span>

              </div>
              <div className="col-sm-3">
                  <span className="propertyDetailDescriptor">Year Built</span>
              </div>
          </div>
      </div>
    );
};


