"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {PropertyDescription} from "./PropertyDescription";
import {PropertyDetailsAndIconsSection} from "./PropertyDetailsAndIconsSection";
import {MapSection} from "./MapSection";
import {ClientContactSection} from "./ClientContactSection";
import * as PropertyActions from "../../actions/PropertyActions";
import {bindActionCreators} from "redux";
import {Link} from "react-router";

class DemoSitePage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        this.props.PropertyActions.grabDemoSite();
    }

    render() {
        return (
            <div>
                <PropertyDescription property={this.props.demoData}/>
                <PropertyDetailsAndIconsSection property={this.props.demoData}/>
                <MapSection property={this.props.demoData} />
                <ClientContactSection/>
            </div>
        );
    }
}

DemoSitePage.propTypes = {
    PropertyActions: PropTypes.object.isRequired,
    demoData: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    let demoData;
    if (state.demoData) {
        demoData = state.demoData;
    }
    return {
        demoData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        PropertyActions: bindActionCreators(PropertyActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoSitePage);