"use strict";

import React, {PropTypes} from "react";
import {bindActionCreators} from "redux";
import * as PropertyActions from "../../actions/PropertyActions";
import {Property} from "./Property";
import {connect} from "react-redux";


class PropertyManagementPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.PropertyActions.retrieveProperties();
    }
    
    render() {
        let properties;
        if(this.props.clientProperties) {
            properties = this.props.clientProperties.map((property, index) => <Property key={index} property={property} />);
        }
        return (
            <div className="container text-center">
                <h3>Client Properties</h3>
                {properties}
            </div>
        );
    }
}

PropertyManagementPage.propTypes = {
    clientProperties: PropTypes.array
};

function mapDispatchToProps(dispatch) {
    return {
        PropertyActions: bindActionCreators(PropertyActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    let clientProperties;
    if (state.clientProperties && Array.isArray(state.clientProperties)) {
        clientProperties = state.clientProperties;
    } else if (state.clientProperties && !Array.isArray(state.clientProperties)) {
        clientProperties = [state.clientProperties];
    }
    return {
        clientProperties
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyManagementPage);