"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {PropertyDetailsSection} from "../EditProperty/PropertyDetailsSection";
import {HouseAndLotDetailsSection} from "../EditProperty/HouseAndLotDetails";
import * as PropertyActions from "../../actions/PropertyActions";
import {bindActionCreators} from "redux";
import {Footer} from "../common/Footer";

class AddNewPropertyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newProperty: {}
        };

        this.updateFormState = this.updateFormState.bind(this);
        this.addNewProperty = this.addNewProperty.bind(this);
    }

    updateFormState(event) {
        let field = event.target.name;
        let form = this.state.newProperty;
        form[field] = event.target.value;
        return this.setState({newProperty: form});
    }

    addNewProperty() {
       this.props.PropertyActions.addNewProperty(this.state.newProperty);
    }

    render() {
        return (
            <div className="text-center">
                <div className="text-center"><h3>Add New Property</h3></div>
                <PropertyDetailsSection
                    updateFormState={this.updateFormState}
                />
                <HouseAndLotDetailsSection
                    updateFormState={this.updateFormState}
                />
                <button id="saveButton" className="btn btn-primary btn-raised" onClick={this.addNewProperty}>Save</button>
                <Footer/>
            </div>
        );
    }
}

AddNewPropertyPage.propTypes = {
    PropertyActions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        PropertyActions: bindActionCreators(PropertyActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPropertyPage);
