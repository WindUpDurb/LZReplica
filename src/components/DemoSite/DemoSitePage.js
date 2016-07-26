"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {PropertyDescription} from "./PropertyDescription";
import {PropertyDetailsAndIconsSection} from "./PropertyDetailsAndIconsSection";
import {Link} from "react-router";

class DemoSitePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-2 col-sm-offset-9">
                        <Link to="/editProperty/demo-site">Edit This Property</Link>
                        <Link to="/editProperty/demo-site">Add New Property Site</Link>
                    </div>
                </div>
                <PropertyDescription />
                <PropertyDetailsAndIconsSection/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {

    };
}

export default connect(mapStateToProps)(DemoSitePage);