"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {PropertyDetailsSection} from "./PropertyDetailsSection";
import {HouseAndLotDetailsSection} from "./HouseAndLotDetails";
import * as PropertyActions from "../../actions/PropertyActions";
import {bindActionCreators} from "redux";

class EditPropertyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: this.props.property
        };

        this.updateFormState = this.updateFormState.bind(this);
        this.saveForm = this.saveForm.bind(this);
    }

    //consider changing color of input if it has been changed from original state
    updateFormState(event) {
        let field = event.target.name;
        let form = this.state.form;
        form[field] = event.target.value;
        return this.setState({form});
    }

    saveForm() {
        this.props.PropertyActions.updatePropertyInDatabase(this.state.form);
    }

    render() {
        return (
            <div>
                <div className="text-center"><h3>Edit Site</h3></div>
                <PropertyDetailsSection
                    property={this.state.form}
                    updateFormState={this.updateFormState}
                    />
                <HouseAndLotDetailsSection
                    property={this.state.form}
                    updateFormState={this.updateFormState}
                    />
                <button className="btn btn-primary btn-raised" onClick={this.saveForm}>Save</button>
            </div>
        );
    }
}

EditPropertyPage.propTypes = {
    PropertyActions: PropTypes.object,
    propertyId: PropTypes.string.isRequired,
    property: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let propertyId = ownProps.params.propertyId;
    let property;
    if (state.clientProperties && Array.isArray(state.clientProperties)) {
        property = state.clientProperties.filter((propertyObject) => (propertyObject._id === propertyId));
    } else if (state.clientProperties && !Array.isArray(state.clientProperties)) {
        property = state.clientProperties[0];
    }
    return {
        propertyId,
        property
    };
}

function mapDispatchToProps(dispatch) {
    return {
        PropertyActions: bindActionCreators(PropertyActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPropertyPage);
