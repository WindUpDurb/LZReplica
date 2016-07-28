"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {PropertyDescription} from "./PropertyDescription";
import {PropertyDetailsAndIconsSection} from "./PropertyDetailsAndIconsSection";
import {MapSection} from "./MapSection";
import {AgentSection} from "./AgentSection";
import {ImageHeader} from "./ImageHeader";
import * as PropertyActions from "../../actions/PropertyActions";
import {bindActionCreators} from "redux";
import {Link} from "react-router";

class DemoSitePage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        if (!this.props.propertyId) {
            this.props.PropertyActions.grabDemoSite();
        } else if (this.props.propertyId) {
            this.props.PropertyActions.grabSiteData(this.props.propertyId);
        }
    }

    render() {
        return (
            <div>
                <ImageHeader />
                <PropertyDescription property={this.props.demoData}/>
                <PropertyDetailsAndIconsSection property={this.props.demoData}/>
                <MapSection property={this.props.demoData} />
                <AgentSection />
            </div>
        );
    }
}

DemoSitePage.propTypes = {
    PropertyActions: PropTypes.object.isRequired,
    demoData: PropTypes.object,
    propertyId: PropTypes.string
};

function mapStateToProps(state, ownProps) {
    let demoData;
    if (state.demoData) {
        demoData = state.demoData;
    }
    return {
        demoData,
        propertyId: ownProps.routeParams.propertyId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        PropertyActions: bindActionCreators(PropertyActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoSitePage);