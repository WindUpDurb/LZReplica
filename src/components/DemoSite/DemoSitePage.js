"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {PropertyDescription} from "./PropertyDescription";

class DemoSitePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Demo
                <PropertyDescription />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {

    };
}

export default connect(mapStateToProps)(DemoSitePage);