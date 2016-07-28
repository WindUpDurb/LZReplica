"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {PropertyDetailsSection} from "./PropertyDetailsSection";
import {HouseAndLotDetailsSection} from "./HouseAndLotDetails";
import * as PropertyActions from "../../actions/PropertyActions";
import {bindActionCreators} from "redux";
import {Footer} from "../common/Footer";

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
            <div className="text-center">
                <div className="text-center"><h3>Demo Edit Site</h3></div>
                <PropertyDetailsSection
                    property={this.state.form}
                    updateFormState={this.updateFormState}
                    />
                <HouseAndLotDetailsSection
                    property={this.state.form}
                    updateFormState={this.updateFormState}
                    />
                <button id="saveButton" className="btn btn-primary btn-raised" onClick={this.saveForm}>Save</button>
                <Footer/>
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
    let property = state.clientProperties.filter((propertyObject) => (propertyObject._id === propertyId))[0];
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
