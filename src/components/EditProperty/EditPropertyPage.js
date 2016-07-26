"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {PropertyDetailsSection} from "./PropertyDetailsSection";

class EditPropertyPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>Demo</div>
                <PropertyDetailsSection/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {

    };
}

export default connect(mapStateToProps)(EditPropertyPage);
