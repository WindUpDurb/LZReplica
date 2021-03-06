"use strict";

import React, {PropTypes} from "react";
import {bindActionCreators} from "redux";
import * as PropertyActions from "../../actions/PropertyActions";
import {Link} from "react-router";
import {Property} from "./Property";
import {connect} from "react-redux";
import * as FunctionTools from "../../actions/FunctionTools";


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
                <Link to="/addNewProperty" className="btn btn-primary btn-raised boxShadow">Add a New Property</Link>
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
    let properties;
    if (state.clientProperties) {
        properties = FunctionTools.arrayOfValues(state.clientProperties);
    }
    return {
        clientProperties: properties
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyManagementPage);